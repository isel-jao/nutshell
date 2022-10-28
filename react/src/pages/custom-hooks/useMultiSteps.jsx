import React, { useEffect } from "react";
import { useState } from "react";

const useMultiSteps = (steps, defaultValue = 0) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < steps.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index !== 0) setIndex(index - 1);
  };

  const first = () => {
    setIndex(0);
  };

  const last = () => {
    setIndex(steps.length - 1);
  };

  const goto = (idx) => {
    if (idx >= 0 && idx < steps.length) setIndex(idx);
  };

  useEffect(() => {
    if (defaultValue < 0) setIndex(0);
    else if (defaultValue > steps.length - 1) setIndex(steps.length - 1);
    else setIndex(defaultValue);
  }, [defaultValue, steps]);

  return { Step: steps[index], index, next, prev, goto, last, first };
};

export default useMultiSteps;
