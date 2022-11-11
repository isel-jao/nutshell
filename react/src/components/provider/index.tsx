import React from "react";

const Context = React.createContext(null);

export const GetContext: () => any = () => {
  return React.useContext(Context);
};

const Provider = ({ value, children }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
