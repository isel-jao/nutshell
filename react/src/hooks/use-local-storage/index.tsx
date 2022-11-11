import React from "react";

function useLocalStorage<type>(
  key: string,
  defaultValue: type
): [type, (value: type) => void] {
  const [value, setValue] = React.useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
