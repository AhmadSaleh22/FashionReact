import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: " 39px 0",
    justifyContent: "space-evenly",
  },
  mainCat: {
    height: "50px",
    border: "1px solid #ebebeb",
    width: "682.5px",
  },
  category: {
    float: "left",
    background: "transparent",
    border: "none",
    paddingLeft: "23px",
    paddingTop: "13px",
    paddingBottom: "13px",
    paddingRight: "30px",
    fontSize: "16px",
    color: "#252525",
  },
  inputBox: {
    border: "none",
    fontSize: "15px",
    color: "#d1d1d1",
    paddingLeft: "20px",
  },
  expandIcon: {
    color: "rgb(178, 178, 178)",
    fontSize: "16px",
    marginTop: "13px",
    borderRight: "1px solid #b2b2b2",
    width: "40px",
  },
  searchIcon: {
    color: "#ffffff",
    border: "1px solid #e7ab3c",
    background: "#e7ab3c",
    padding: "12px 14px 8px",
    cursor: "pointer",
    float: "right",
  },
  heartIcon: {
    fontSize: "20px",
    position: "relative",
    marginRight: "14px",
    marginTop: "10px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "12px",
  },
  customBadge: {
    backgroundColor: "#e7ab3c",
    color: "white",
  },
});

export default function HeaderTop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img
          src="https://preview.colorlib.com/theme/fashi/img/logo.png"
          alt="img"
          style={{
            verticalAlign: "middle",
            marginTop: "12px",
          }}
        />
      </div>
      <div className={classes.mainCat}>
        <button className={classes.category}>All Categories</button>
        <ExpandMoreIcon className={classes.expandIcon} />
        <input
          type="text"
          placeholder="What do you need?"
          className={classes.inputBox}
        />
        <button className={classes.searchIcon}>
          <SearchIcon />
        </button>
      </div>
      <div style={{ display: "inline-flex", marginRight: "2%" }}>
        <Badge
          classes={{ badge: classes.customBadge }}
          className={classes.heartIcon}
          badgeContent={1}
        >
          <FavoriteBorderIcon />
        </Badge>
        <Badge
          classes={{ badge: classes.customBadge }}
          className={classes.heartIcon}
          badgeContent={1}
        >
          <LocalMallIcon />
        </Badge>
        <Typography variant="h5" gutterBottom className={classes.price}>
          $150.00
        </Typography>
      </div>
    </div>
  );
}
