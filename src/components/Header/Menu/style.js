import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    zIndex: "999",
    "&>a": {
      color: "#fff",
      textDecoration: "none",
      lineHeight: "24px",
      paddingLeft: "40px",
      paddingTop: "16px",
      paddingRight: "30px",
      paddingBottom: "10px",
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
