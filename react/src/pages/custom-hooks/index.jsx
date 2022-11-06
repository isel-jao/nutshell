import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import useLocalStorage from "./custom-hooks/indes";

const hookClasses =
  "my-3 flex  flex-col gap-4 pb-3 solid-bottom border-slate-300";

const CustomHooksPage = () => {
  const [name, setName] = useLocalStorage("name", "John Doe");
  const [age, setAge] = useLocalStorage("age", 25);
  return (
    <div className=" p-3">
      <div className={hookClasses}>
        <div className="text-lg text-center">
          [name, setName] = useLocalStorage("name", "John Doe")
        </div>
        <TextField
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="age"
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomHooksPage;
