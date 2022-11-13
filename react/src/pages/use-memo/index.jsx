import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";

const expensiveCalculation = (count) => {
  console.log("expensiveCalculation");
  return count * 2;
};

const LazyInput = ({ onChange, value, ...props }) => {
  const [doneTypingInterval, setDoneTypingInterval] = React.useState(1000);
  const [typingTimeout, setTypingTimeout] = React.useState(null);
  const [localValue, setLocalValue] = React.useState(value || "");

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        onChange(localValue);
      }, doneTypingInterval)
    );
  };

  return <input {...props} value={localValue} onChange={handleChange} />;
};

let renderCount = 0;
const UseMemoPage = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("john");
  const nubmerRef = React.useRef(0);

  const calculation = React.useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  useEffect(() => {
    console.log(`render ${renderCount++}`);
  });
  return (
    <div className="h-screen  flex flex-col gap-6 pt-12 align-center">
      <h1>Count: {count}</h1>
      <div className="flex align-center gap-4">
        <TextField label="count" type="number" inputRef={nubmerRef} />
        <Button
          variant="outlined"
          onClick={() => {
            setCount(Number(nubmerRef.current.value));
          }}
        >
          save
        </Button>
      </div>
      <h1>Calculation: {calculation}</h1>
      <h1>name: {name}</h1>
      <div className="flex align-center gap-4">
        <TextField
          label="name"
          defaultValue={name}
          onBlur={(e) => {
            console.log("blur");
          }}
          onKeyUp={(e) => {
            console.log("keyup");
          }}
          onKeyDown={(e) => {
            console.log("keydown");
          }}
          onKeyDownCapture={(e) => {
            console.log("keydownCapture");
          }}
        />
      </div>
      <LazyInput value={name} onChange={setName} />
    </div>
  );
};

export default UseMemoPage;
