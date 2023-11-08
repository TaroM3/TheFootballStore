import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const userDataTransfer = () => {
    return user;
  };
  let data = { userDataTransfer, setUser };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
