import React from "react";

const useLocalStorage = (...args) => {
  const [value, setValue] = React.useState(() => {
    const item = window.localStorage.getItem(args[0]);
    return item ? JSON.parse(item) : args[1];
  });

  React.useEffect(() => {
    window.localStorage.setItem(args[0], JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
