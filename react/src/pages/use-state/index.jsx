import React from "react";
import { Button, ButtonGroup } from "@mui/material";
const UseState = () => {
  const [count, setCount] = React.useState(0);
  const syncIncrement = () => {
    setCount(count + 1);
  };
  const syncDecrement = () => {
    setCount(count - 1);
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  const asyncDecrement = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };
  const asyncIncrement2 = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const asyncDecrement2 = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  return (
    <div className=" p-6 f ">
      <div className="text-4xl text-center">Count: {count}</div>
      <div className="flex  justify-center flex-col align-center g-6 mt-6">
        <div className="flex align-center g-2">
          <div className="py-2 text-xl w-13">Sync</div>
          <ButtonGroup>
            <Button onClick={syncDecrement}>-</Button>
            <Button onClick={syncIncrement}>+</Button>
          </ButtonGroup>
        </div>
        <div className="flex align-center g-2">
          <div className="py-2 w-13 text-xl">Async (wrong method)</div>
          <ButtonGroup>
            <Button onClick={asyncDecrement}>-</Button>
            <Button onClick={asyncIncrement}>+</Button>
          </ButtonGroup>
        </div>
        <div className="flex align-center g-2">
          <div className="py-2 w-13 text-xl">Async (correct method) </div>
          <ButtonGroup>
            <Button onClick={asyncDecrement2}>-</Button>
            <Button onClick={asyncIncrement2}>+</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default UseState;
