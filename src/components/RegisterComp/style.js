import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
  },
  registerTyp: {
    fontSize: "36px",
    // fontWeight: "700",
    textAlign: "center",
    paddingTop: "72px",
    marginBottom: "35px",
  },
  mainField: {
    display: "flex",
    flexDirection: "column",
    width: "41%",
    margin: "auto",
  },
  inputField: {
    marginBottom: "25px",
    borderRadius: "none",
    width: "100%",
    borderRadius: "0",
    height: "50px",
    border: "1px solid #ebebeb",
    paddingLeft: "20px",
    fontSize: "16px",
  },
  btnField: {
    background: "#e7ab3c",
    boxShadow: "none",
    padding: "13px 45px 11px",
    fontSize: "14px",
    // fontWeight: "700",
    borderRadius: "0",
    letterSpacing: "2px",
    "&:hover": {
      background: "#e7ab3c",
      boxShadow: "none",
    },
  },
  linkLog: {
    letterSpacing: "2px",
    textTransform: "uppercase",
    textAlign: "center",
    position: "relative",
    color: "rgba(37,37,37)",
    marginTop: "13px",
    "&>a": {
      color: "#252525",
    },
  },
  forgetLabel: {
    fontSize: "14px",
    color: "#6B6B6B",
    textDecoration: "none",
  },
  errorMsg: {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c6cb",
    borderRadius: "0.25rem",
    padding: "0.75rem 1.25rem",
    margin: "auto",
    width: "41%",
    marginBottom: "1rem",
  },
  messageBox: {
    marginBottom: "1rem",
    border: "1px solid #b7ce6b",
    background: "#b7ce6b",
    padding: "0.75rem 1.25rem",
    width: "41%",
    margin: "auto",
  },
}));
