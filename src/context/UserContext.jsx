import { createContext, useState } from "react";
import Cookies from "universal-cookie";
import { auth, db } from "../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState({
    uidToken: "",
    email: "",
    name: "",
    role: "",
  });
  const getData = collection(db, "users");

  const login = async (uidToken) => {
    cookies.set("TFS_token", uidToken, {
      sameSite: "strict",
      maxAge: 3600,
    });

    const docRef = doc(getData, uidToken);
    const userData = await getDoc(docRef).then((res) => {
      setUser({ ...res.data(), uidToken: res.id });
    });

    console.log(cookies.get("TFS_token"), userData);
  };

  const getRole = async () => {
    if (user.uidToken !== "") {
      const docRef = doc(getData, user.uidToken);

      const role = await getDoc(docRef).then((res) => {
        return res.role;
      });

      return role;
    } else {
      return "";
    }
  };
  const getConnection = () => {
    const tokenId = cookies.get("TFS_token");
    if (tokenId) {
      if (user.name === "") {
        const docRef = doc(getData, tokenId);
        getDoc(docRef).then((res) => {
          setUser({ ...res.data(), uidToken: res.id });
          return { ...res.data(), uidToken: res.id };
        });
      }
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    // setUser(null);
    cookies.remove("TFS_token");
    setUser({
      uidToken: "",
      email: "",
      name: "",
      role: "",
    });
    auth.signOut();
  };
  const userDataTransfer = () => {
    // getConnection();
    return user;
  };
  let data = {
    userDataTransfer,
    setUser,
    login,
    logout,
    getConnection,
    getRole,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
