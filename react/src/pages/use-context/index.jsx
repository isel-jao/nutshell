import React from "react";
import { TextField } from "@mui/material";

import Provider, { GetContext } from "../../components/provider";

const defaulUser = {
  firstName: "John",
  lastName: "Doe",
};

const FirstName = () => {
  const [user, setUser] = GetContext();
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
  const [user, setUser] = GetContext();
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
      <div className="grid-md-2 grid-1 gap-4 p-4">
        <FirstName />
        <LastName />
      </div>
    </div>
  );
};

const UseContextPage = () => {
  const [user, setUser] = React.useState(defaulUser);

  return (
    <div className="  ">
      <Provider value={[user, setUser]}>
        <Profile />
        <div className="flex mt-4">
          <div className="p-4 bg-slate-700 text-slate-200 w-10 text-center">
            {user.firstName}
          </div>
          <div className="border-slate-400 solid-left p-4 bg-slate-700 text-slate-200 w-10 text-center">
            {user.lastName}
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default UseContextPage;
