import React from "react";
import { Typography } from "@material-ui/core";

export default function Date(props) {
  return (
    <Typography variant="body2" color="textSecondary" component="p">
      {props.date}
    </Typography>
  );
}
