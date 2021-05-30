import React from "react";
import loader from "../../assets/Spinner-3.gif";

const Spinner = () => (
  <>
    <img
      src={loader}
      alt="loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </>
);

export default Spinner;
