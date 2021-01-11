import React from "react";
import CollectionCon from "./CollectionCon";
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
        <CollectionCon preview={woman} />
        <CollectionCon preview={woman1} />
        <CollectionCon preview={woman2} />
        <CollectionCon preview={woman3} />
        <CollectionCon preview={woman4} />
        <CollectionCon preview={man} />
      </Grid>
    </div>
  );
}
