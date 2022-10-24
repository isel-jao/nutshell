/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import UseState from "../../pages/use-state";
import UseContext from "../../pages/use-context";
import UseMemoPage from "../../pages/use-memo";
import ReduxPage from "../../pages/redux";
import TmpPage from "../../pages/tmp";

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
      <Route path="/home" element={<HomePage />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-state" element={<UseState />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/use-memo" element={<UseMemoPage />} />
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="/tmp" element={<TmpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterView;
