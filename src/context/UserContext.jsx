// import { createContext, useState } from 'react';
// import Cookies from 'universal-cookie';
// import { auth, db } from '../firebaseConfig';
// import { collection, doc, getDoc } from 'firebase/firestore';

import { createContext, useReducer } from 'react';
import userReducer, { USER_ACTION, initialState } from '../reducer/userReducer';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// export const UserContext = createContext();

// const UserContextProvider = ({ children }) => {
//   const cookies = new Cookies();
//   const [user, setUser] = useState({
//     uidToken: '',
//     email: '',
//     name: '',
//     role: '',
//   });
//   const getData = collection(db, 'users');

//   const login = async (uidToken) => {
//     cookies.set('TFS_token', uidToken, {
//       sameSite: 'strict',
//       maxAge: 3600,
//     });

//     const docRef = doc(getData, uidToken);
//     await getDoc(docRef).then((res) => {
//       setUser({ ...res.data(), uidToken: res.id });
//     });
//   };

//   const getRole = async () => {
//     const cookie = cookies.get('TFS_token');
//     console.log(cookie, 'hola');
//     if (cookie !== '') {
//       const docRef = doc(getData, user.uidToken);

//       const role = await getDoc(docRef).then((res) => {
//         return res.role;
//       });

//       return role;
//     } else {
//       return '';
//     }
//   };
//   const getConnection = () => {
//     const tokenId = cookies.get('TFS_token');
//     if (tokenId) {
//       if (user.name === '') {
//         const docRef = doc(getData, tokenId);
//         getDoc(docRef).then((res) => {
//           setUser({ ...res.data(), uidToken: res.id });
//           return { ...res.data(), uidToken: res.id };
//         });
//       }
//       return true;
//     } else {
//       return false;
//     }
//   };
//   const logout = () => {
//     // setUser(null);
//     auth.signOut();
//     cookies.remove('TFS_token');
//     setUser({
//       uidToken: '',
//       email: '',
//       name: '',
//       role: 'user',
//     });
//   };
//   const userDataTransfer = () => {
//     // getConnection();
//     return user;
//   };
//   let data = {
//     userDataTransfer,
//     setUser,
//     login,
//     logout,
//     getConnection,
//     getRole,
//   };
//   return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
// };

// export default UserContextProvider;

export const UserContext = createContext(initialState);

function useUserReducer() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = ({ uidToken }) => {
    // const { uidToken, email, name, isAdmin } = data;
    const docRef = doc(collection(db, 'users'), uidToken);

    getDoc(docRef)
      .then((res) => {
        return { ...res.data(), uidToken: uidToken };
      })
      .then((res) => {
        console.log(res);

        const data = {
          uidToken: res.uidToken,
          email: res.email,
          name: res.name,
          isAdmin: res.role === 'admin' ? true : false,
        };
        console.log(data);
        dispatch({
          type: USER_ACTION.LOGIN,
          payload: { uidToken: uidToken, ...data },
        });
      });
    // dispatch({
    //   type: USER_ACTION.LOGIN,
    //   payload: {
    //     uidToken: uidToken,
    //     email: email,
    //     name: name,
    //     isAdmin: isAdmin,
    //   },
    // });
  };

  const logout = () => {
    dispatch({
      type: USER_ACTION.LOGOUT,
      payload: { uidToken: '', email: '', name: '', isAdmin: false },
    });
  };

  const getConnection = () => {
    dispatch({ type: USER_ACTION.GET_CONNECTION, payload: '' });
  };
  return { state, login, logout, getConnection };
}

function UserContextProvider({ children }) {
  const { state, login, logout, getConnection } = useUserReducer();
  return (
    <UserContext.Provider
      // email: state?.email,
      // name: state?.name,
      // isAdmin: state?.isAdmin,
      value={{
        ...state,
        state,
        login,
        logout,
        getConnection,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
