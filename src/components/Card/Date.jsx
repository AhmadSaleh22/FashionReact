import React from "react";
import { Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

export default function Date(props) {
  return (
    <Typography variant="body2" color="textSecondary" component="p">
      {props.date}
    </Typography>
  );
}
