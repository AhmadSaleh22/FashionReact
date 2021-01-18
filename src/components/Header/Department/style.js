import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  department: {
    zIndex: "999",
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
    animation: "$myEffectdisplay 1.3s",
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
  "@keyframes myEffectdisplay": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));
