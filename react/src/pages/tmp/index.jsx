import React from "react";
import Provider, { GetContext } from "../../components/provider";
import { Switch } from "@mui/material";

const TmpPage = () => {
  return (
    <div
      style={{
        backgroundColor: thme.mode === "light" ? "white" : "black",
      }}
      className="h-50 debug flex flex-col justify-center align-center"
    >
      <DarkModeToggle />
    </div>
  );
};

export default TmpPage;
