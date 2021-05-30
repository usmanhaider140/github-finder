import React from "react";
import { ToastContainer, toast } from "react-toastify";
const notify = (msg) => toast(msg);
const Alert = ({ alert }) => {
  return (
    <>
      {alert !== null && notify(alert.msg)} <ToastContainer />
    </>
  );
};

export default Alert;
