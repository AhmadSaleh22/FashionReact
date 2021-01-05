import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  department: {
    backgroundColor: "rgb(59, 59, 59)",
    padding: "9px",
    color: "#fff",
    display: "inline-flex",
    width: "280px",
    marginLeft: "7%",
    position: "relative",
    "&:hover": {
      "& $hoverClass": {
        display: "flex",
      },
      cursor: "pointer",
    },
  },
  barIcon: {
    fontSize: "18px",
    // fontWeight: "400",
    margin: "8px ",
  },
  textDepratment: {
    fontSize: "14px",
    // fontWeight: "700",
    textTransform: "uppercase",
    marginLeft: "16px",
    marginTop: "5px",
  },
  contentRight: {
    float: "right",
    marginLeft: "50px",
  },
  hoverClass: {
    display: "none",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    background: "#fff",
    left: "0",
    top: "52px",
    boxShadow: "0 13px 32px rgba(51, 51, 51, 0.1)",
    paddingBottom: "29px",
    // zIndex: "200",
    "&>a": {
      color: "#000000",
      textDecoration: "none",
      lineHeight: "24px",
      paddingLeft: "40px",
      paddingTop: "16px",
      paddingRight: "30px",
      transition: "all 0.3s",
      "&.active": {
        color: "#e7ab3c",
      },
      "&:hover": {
        color: "#e7ab3c",
      },
    },
  },
}));

export function Department() {
  const classes = useStyles();

  return (
    <div className={classes.department}>
      <MenuIcon className={classes.barIcon} />
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.textDepratment}
      >
        All departments
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.contentRight}
      >
        ï„‡
      </Typography>
      <div className={classes.hoverClass}>
        <NavLink to="/" exact>
          Women's Clothing
        </NavLink>
        <NavLink to="/men">Men's Clothing</NavLink>
        <NavLink to="/under">Underwear</NavLink>
        <NavLink to="/kids">Kid's Clothing</NavLink>
        <NavLink to="/brandFashion">Brand Fashion</NavLink>
        <NavLink to="/shoes">Accessories/Shoes</NavLink>
        <NavLink to="/luxuryBrand">Luxury Brands</NavLink>
        <NavLink to="/outdoor">Brand Outdoor Apparel</NavLink>
      </div>
    </div>
  );
}
