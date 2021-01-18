import React from "react";
import { InputLabel } from "@material-ui/core";

export default function Label({ children, htmlFor }) {
  return (
    <InputLabel
      htmlFor={htmlFor}
      variant="standard"
      children={children}
      style={{ marginBottom: "13px", color: "#252525", fontSize: "18px" }}
      color="secondary"
    />
  );
}
