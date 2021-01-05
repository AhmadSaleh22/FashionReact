import React from "react";
import { Grid, Typography, TextField, makeStyles } from "@material-ui/core";
import Logo from "./images/footer-logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
const MyStyle = makeStyles({
  FullRoot: {
    MarginLeft: "-15px",
    marginRight: "-15px",
    background: "#191919",
    paddingTop: "75px",
    display: "flex",
    bottom: "0",
    left: "0",
    position: "fixed",
    width: "100%",
    height: "auto",
  },
  root: {
    display: "flex",
  },
  list: {
    display: "inline-block",
    listStyle: "none",
    borderRadius: "50%",
    color: "white",
    textAlign: "center",
    marginRight: "7px",
    background: "#434445",
    width: "80px",
    height: "40px",
  },
  col: {
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px",
    color: "white",
    maxWidth: "25%",
    flex: "0 0 25%",
  },
  colink: {
    position: "relative",
    paddingRight: "15px",
    paddingLeft: "15px",
    color: "white",
    maxWidth: "16.666666%",
    flex: "0 0 16.6666666%",
  },
  head: {
    color: "white",
    fontWeight: "700",
    marginBottom: "26px",
  },
  container: {
    display: "flex",
    width: "90%",
    marginLeft: "8.333333%",
  },
  item: {
    lineHeight: "30px",
    fontSize: "16px",
    color: "#b2b2b2",
    fontWeight: "100",
  },
  input: {
    width: "224px",
    height: "47px",
    color: "#b2b2b2",
    background: "#303030",
    border: "none",
    paddingLeft: "20px",
    overflow: "visible",
  },
  form: {
    position: "relative",
    marginTop: "15px",
    width: "359px",
  },
  but: {
    display: "inline-block",
    color: "#fff",
    background: "#e7ab3c",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    border: "1px solid #e7ab3c",
    position: "absolute",
    right: "0",
    top: "0",
    height: "48.5px",
    padding: "13px 20px 12px",
    cursor: "pointer",
  },
  facebook: {
    color: "white",
  },
});
function Input() {
  const classes = MyStyle();
  return (
    <form className={classes.form}>
      <input className={classes.input} placeholder="Enter Your Email" />
      <button className={classes.but}>Subscribe</button>
    </form>
  );
}
function SocialMedia() {
  const classes = MyStyle();
  return (
    <div className={classes.col}>
      <ul className={classes.root}>
        <li className={classes.list}>
          <FacebookIcon className={classes.facebook} />
        </li>
        <li className={classes.list}>
          <InstagramIcon />
        </li>
        <li className={classes.list}>
          <TwitterIcon />
        </li>
        <li className={classes.list}>
          <PinterestIcon />
        </li>
      </ul>
    </div>
  );
}

function ColLink(props) {
  const classes = MyStyle();
  return (
    <div className={classes.colink}>
      <Grid>
        <Typography variant="body1" className={classes.head}>
          {props.Top}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col1}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col2}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col3}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col4}
        </Typography>
      </Grid>
    </div>
  );
}

function ColText(props) {
  const classes = MyStyle();
  var MyProps = props.header;
  return (
    <div className={classes.col}>
      <Grid>
        {MyProps ? (
          <img src={Logo} className={classes.head} />
        ) : (
          <Typography variant="body1" className={classes.head}>
            {props.top}
          </Typography>
        )}
        <Typography variant="body2" className={classes.item}>
          {props.col1}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col2}
        </Typography>
        <Typography variant="body2" className={classes.item}>
          {props.col3}
        </Typography>
        {MyProps ? <SocialMedia /> : <Input />}
      </Grid>
    </div>
  );
}
export default function index() {
  const classes = MyStyle();
  return (
    <div className={classes.FullRoot}>
      <div className={classes.container}>
        <ColText
          header
          col1="Address: 60-49 Road 11378 New York"
          col2="Phone: +65 11.188.888"
          col3="Email: hello.colorlib@gmail.com"
        />
        <ColLink
          Top="Information"
          col1="About Us"
          col2="Checkout"
          col3="Contact"
          col4="Serivius"
        />
        <ColLink
          Top="My Account"
          col1="My Account"
          col2="Contact"
          col3="Shopping Cart"
          col4="Shop"
        />
        <ColText
          top="Join Our Newsletter Now"
          col1="Get E-mail updates about our latest shop and special offers."
        />
      </div>
    </div>
  );
}
