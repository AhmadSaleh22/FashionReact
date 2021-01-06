import React from "react";
import Feature from "./Feature";
import { Grid, makeStyles } from "@material-ui/core";
import woman from "./images/girl1.jpg";
import woman1 from "./images/girl2.jpg";
import woman2 from "./images/girl3.jpg";
import woman3 from "./images/girl4.jpg";
import woman4 from "./images/girl5.jpg";
import man from "./images/man1.jpg";
const Style = makeStyles({
  root: {
    display: "flex",
  },
});

export default function index() {
  const classes = Style();
  return (
    <div className={classes.root}>
      <Grid container>
        <Feature preview={woman} />
        <Feature preview={woman1} />
        <Feature preview={woman2} />
        <Feature preview={woman3} />
        <Feature preview={woman4} />
        <Feature preview={man} />
      </Grid>
    </div>
  );
}
