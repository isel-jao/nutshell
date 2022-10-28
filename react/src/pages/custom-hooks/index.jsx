import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import useGenrateRandomJoke from "./use-generate-random-joke";
import useLocalStorage from "./use-local-storage";
import useMultiSteps from "./useMultiSteps";
import Pagination from "@mui/material/Pagination";

import {
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
const Step1 = () => <div>Step1</div>;

const Step2 = () => <div>Step2</div>;

const Step3 = () => <div>Step3</div>;

const Step4 = () => <div>Step4</div>;

const Step5 = () => <div>Step5</div>;

const Step6 = () => <div>Step6</div>;

const Step7 = () => <div>Step7</div>;

const Step8 = () => <div>Step8</div>;

const Step9 = () => <div>Step9</div>;

const Steps = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9];

const CustomHooksPage = () => {
  const [joke, genrateNew] = useGenrateRandomJoke();
  const [name, setName] = useLocalStorage("name", "John Doe");
  const { Step, index, next, prev, goto, last, first } = useMultiSteps(
    Steps,
    1
  );
  return (
    <div className=" p-3">
      <div className="flex align-center flex-col gap-4 pb-3 solid-bottom border-slate-300 my-3">
        <div className="text-lg text-center">
          [joke, genrateNew] = useGenrateRandomJoke()
        </div>
        <div className=" rounded card w-full h-4 p-3">{joke}</div>
        <Button variant="contained" onClick={genrateNew}>
          generate joke
        </Button>
      </div>
      <div className="my-3 flex  flex-col gap-4 pb-3 solid-bottom border-slate-300">
        <div className="text-lg text-center">
          [name, setName] = useLocalStorage("name", "John Doe")
        </div>
        <TextField
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-3 flex  flex-col gap-4 pb-3 solid-bottom border-slate-300">
        <div className="text-lg text-center">
          <div>{"const Steps = [Step1, Step2, Step3];"}</div>
          <div>
            {
              "const {(Step, index, next, prev, last, first)} = useMultiSteps(Steps, 1)"
            }
          </div>
        </div>
        <div className="flex justify-between">
          {<Step />}
          <span>
            {index + 1} / {Steps.length}
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            showing step {index + 1} of {Steps.length}
          </div>
          <Pagination
            count={Steps.length}
            showFirstButton
            showLastButton
            onChange={(e, page) => {
              console.log(page);
              goto(page - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHooksPage;
