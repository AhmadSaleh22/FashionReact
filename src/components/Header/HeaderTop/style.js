import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
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
    marginLeft: "20px",
  },
  customBadge: {
    "&:not-first-of-type": {
      marginLeft: "20px",
    },
  },
});
