/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import UseState from "../../pages/use-state";
import UseContext from "../../pages/use-context";
import ReduxPage from "../../pages/redux";

const NotFound = () => {
  return (
    <div className="flex w-screen h-screen justify-content align-center">
      404 not found
    </div>
  );
};

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterView;
