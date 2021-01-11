import React from "react";
import bus from "./images/icon.png";
import clock from "./images/clock.png";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: "1px solid #ebebeb",
    width: "80%",
    marginLeft: "10%",
    marginTop: "45px",
  },
  img: {
    height: "40",
    width: "53",
    marginRight: "20px",
  },
  oneGrid: {
    padding: "30px 55px",
    borderRight: "1px solid #F3F4F0",
    textAlign: "left",
  },
}));

function OneComp(props) {
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.oneGrid} container>
      <Grid>
        <img src={props.source} className={classes.img} alt="img" />
      </Grid>
      <Grid>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="p">{props.content}</Typography>
      </Grid>
    </Grid>
  );
}

export default function Proparity() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <OneComp
          source={bus}
          title="FREE SHIPPING"
          content="For all order over 99$"
        />
        <OneComp
          source={clock}
          title="DELIVERY ON TIME"
          content="If good have prolems"
        />
        <OneComp
          source={bus}
          title="SECURE PAYMENT"
          content="100% secure payment"
        />
      </Grid>
    </div>
  );
}
