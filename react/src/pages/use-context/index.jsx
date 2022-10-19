import React from "react";
import { TextField } from "@mui/material";
const defaulUser = {
  firstName: "John",
  lastName: "Doe",
};

export const UserContext = React.createContext(null);

const FirstName = () => {
  const [user, setUser] = React.useContext(UserContext);
  return (
    <TextField
      label="First Name"
      onChange={(e) => {
        setUser({ ...user, firstName: e.target.value });
      }}
    />
  );
};

const LastName = () => {
  const [user, setUser] = React.useContext(UserContext);
  return (
    <TextField
      label="Last Name"
      onChange={(e) => {
        setUser({ ...user, lastName: e.target.value });
      }}
    />
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div className="grid-md-2 grid-1 gap-2 px-2">
        <FirstName />
        <LastName />
      </div>
    </div>
  );
};

const UseContextPage = () => {
  const [user, setUser] = React.useState(defaulUser);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Profile />
      <div className="flex">
        <div className="p-4 bg-slate-700 text-slate-200 w-10 text-center">
          {user.firstName}
        </div>
        <div className="border-slate-400 solid-left p-4 bg-slate-700 text-slate-200 w-10 text-center">
          {user.lastName}
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default UseContextPage;
