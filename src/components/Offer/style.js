import { makeStyles, Button, withStyles } from "@material-ui/core";
import offer from "./time-bg.jpg";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: theme.spacing(60),
    "& > *": {
      width: theme.spacing(160),
      backgroundImage: `url(${offer})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "auto",
    },
  },
  typographyH2: {
    fontFamily: ["Muli", "sans-serif"],
    fontSize: "36px",
    fontWeight: "650",
    color: "#252525",
    marginBottom: "38px",
  },
  typographyBody: {
    color: "#6e6e6e",
    fontSize: "16px",
    fontFamily: ["Muli", "sans-serif"],
    fontWeight: "400",
    lineHeight: "26px",
  },
  salary: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#e7ab3c",
  },
  cont: {
    textAlign: "center",
    paddingTop: "80px",
    paddingBottom: "80px",
    marginRight: "600px",
  },
  timer: {
    textAlign: "center",
    marginBottom: "50px",
    marginRight: "600px",
  },
}));
export const BootstrapButton = withStyles({
  root: {
    width: 141,
    height: 45,
    borderRadius: 0,
    boxShadow: "none",
    fontSize: 15,
    fontWeight: 550,
    backgroundColor: "#e7ab3c",
    borderColor: "#e7ab3c",
    "&:hover": {
      backgroundColor: "#e7ab3c",
      borderColor: "#e7ab3c",
      boxShadow: "none",
    },
  },
})(Button);
