import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "../../components/modal";
const TmpPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6">
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button>
      <Modal open={open} className="rounded">
        hellow
        <Button onClick={() => setOpen(false)}>close</Button>
      </Modal>
    </div>
  );
};

export default TmpPage;
