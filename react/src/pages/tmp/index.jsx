import React from "react";
import Provider, { GetContext } from "../../components/provider";
import { Switch } from "@mui/material";
const defaultTheme = {
  mode: "light",
  primary: "blue",
  secondary: "red",
};

const DarkModeToggle = () => {
  const [theme, setTheme] = GetContext();
  return (
    <Switch
      checked={theme.mode === "dark"}
      onChange={(e) => {
        setTheme({ ...theme, mode: e.target.checked ? "dark" : "light" });
      }}
    />
  );
};

const TmpPage = () => {
  const [thme, setTheme] = React.useState(defaultTheme);
  return (
    <Provider value={[thme, setTheme]}>
      <div
        style={{
          backgroundColor: thme.mode === "light" ? "white" : "black",
        }}
        className="h-50 debug flex flex-col justify-center align-center"
      >
        <DarkModeToggle />
      </div>
    </Provider>
  );
};

export default TmpPage;
