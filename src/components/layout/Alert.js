import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import AlertContext from "../../context/alert/alertContext";

const notify = (msg) => toast(msg);

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <>
      {alert !== null && notify(alert.msg)} <ToastContainer />
    </>
  );
};

export default Alert;
