import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
const ReduxPage = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState(userState);
  const handleChange = (e, key) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const getInputType = (key, value) => {
    if (key === "password") return "password";
    if (key === "email") return "email";
    if (typeof value === "boolean") return "checkbox";
    if (typeof value === "number") return "number";
    return "text";
  };

  return (
    <div className="p-6">
      <div className="grid-lg-4 grid-md-2 grid-1 g-4 mb-4">
        {Object.keys(user)
          .filter((key) => !["_id", "createdAt", "updatedAt"].includes(key))
          .map((key) => (
            <TextField
              key={key}
              label={key}
              value={user[key]}
              type={getInputType(key, user[key])}
              onChange={(e) => handleChange(e, key)}
            />
          ))}
      </div>
      <Button
        variant="contained"
        onClick={() =>
          dispatch({
            type: "USER/SET",
            payload: user,
          })
        }
      >
        save to store
      </Button>
      <div className="grid-lg-2 g-3  gird-2">
        <div>
          <div className="text-2xl text-slate-600 my-3">LOCAL</div>
          <div className=" card">
            {Object.entries(user).map(([key, value]) => (
              <div className="flex" key={key}>
                <div className="w-8 text-xl p-2 solid-right border-slate-300">
                  {key}:
                </div>
                <div className="text-xl  p-2">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-2xl text-slate-600 my-3">STORE</div>
          <div className=" card">
            {Object.entries(userState).map(([key, value]) => (
              <div className="flex" key={key}>
                <div className="w-8 text-xl p-2 solid-right border-slate-300">
                  {key}:
                </div>
                <div className="text-xl  p-2">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxPage;
