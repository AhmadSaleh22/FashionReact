import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Link } from "react-router-dom";
import { Department } from "../Department";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: " #252525",
    height: "52px",
    alignItems: "center",
    listStyle: "none",
  },
  listItem: {
    fontSize: "14px",
    // fontWeight: "700",
    color: "#ffffff",
    padding: "18px 45px 15px",
    borderRight: "2px solid #3b3b3b",
    textTransform: "uppercase",
    textDecoration: "none",
    position: "relative",
    "&.active": {
      background: "#e7ab3c",
    },
  },
  hoverCollection: {
    position: "absolute",
    right: "0",
    top: "36px",
    width: "200px",
    display: "none",
    flexDirection: "column",
    color: "#fff",
    background: "#252525",
    "&>a": {
      color: "#fff",
      textDecoration: "none",
      lineHeight: "24px",
      paddingLeft: "40px",
      paddingTop: "16px",
      paddingRight: "30px",
      paddingBottom: "10px",
      transition: "all 0.3s",
      "&.active": {
        color: "#e7ab3c",
      },
      "&:hover": {
        color: "#e7ab3c",
      },
    },
  },
  mainCollection: {
    position: "relative",
    "&:hover": {
      "& $hoverCollection": {
        display: "flex",
      },
      cursor: "pointer",
    },
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div>
      <nav>
        <ul className={classes.root}>
          <Department />
          <NavLink to="/" className={classes.listItem} exact>
            Home
          </NavLink>

          <NavLink to="/shop" className={classes.listItem}>
            shop
          </NavLink>
          <div className={classes.mainCollection}>
            <NavLink to="/collection" className={classes.listItem}>
              collection
            </NavLink>
            <div className={classes.hoverCollection}>
              <Link to="/">Men's</Link>
              <Link to="/">Women's</Link>
              <Link to="/">Kid's</Link>
            </div>
          </div>
          <NavLink to="/blog" className={classes.listItem}>
            blog
          </NavLink>
          <NavLink to="/contact" className={classes.listItem}>
            contact
          </NavLink>
          <div className={classes.mainCollection}>
            <NavLink to="/pages" className={classes.listItem}>
              pages
            </NavLink>
            <div className={classes.hoverCollection}>
              <Link to="/">Blog Details</Link>
              <Link to="/">Shopping Cart</Link>
              <Link to="/">Checkout</Link>
              <Link to="/">Faq</Link>
              <Link to="/">Register</Link>
              <Link to="/">Login</Link>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
