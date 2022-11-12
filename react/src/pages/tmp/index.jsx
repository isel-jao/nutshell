import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "../../components/modal";
import { GetContext } from "../../components/provider";
const TmpPage = () => {
  const [open, setOpen] = useState(false);
  const state = GetContext();
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        padding: "1em",
        height: "100vh",
      }}
    >
      {/* <Button
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button> */}
      {/* <Modal open={open} className="rounded">
        hellow
        <Button onClick={() => setOpen(false)}>close</Button>
      </Modal> */}
      <div
        style={{
          width: "80%",
          minWidth: "30rem",
          maxWidth: "40rem",
        }}
      >
        {JSON.stringify(state.nav[0], onanimationend, 2)}
      </div>
    </div>
  );
};

export default TmpPage;
