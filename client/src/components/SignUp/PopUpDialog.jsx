import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form.jsx";
import Avatar from "@mui/material/Avatar";

function PopUpDialog() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <h1>SIGNUP</h1>
      <Form handleClose={handleClose} />
    </Dialog>
  );
}

export default PopUpDialog;
