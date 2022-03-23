import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ currentUser, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
