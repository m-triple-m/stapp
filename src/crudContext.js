const { createContext, useState } = require("react");

export const CrudContext = createContext();

export const CrudProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CrudContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </CrudContext.Provider>
  );
};
