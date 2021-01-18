import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    color: "#252525",
    borderBottom: "1px solid #e5e5e5",
    fontSize: "16px",
    height: "55px",
  },
  navLeft: {
    marginLeft: "7%",
    float: "left",
  },
  rightNav: {
    float: "right",
    marginRight: "6.5%",
    display: "flex",
    alignItems: "center",
  },
  email: {
    fontSize: "17px",
    marginRight: "5px",
    verticalAlign: "middle",
  },
  mail: {
    float: "left",
    borderRight: "1px solid #E5E5E5",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingRight: "20px",
  },
  phoneService: {
    marginLeft: "20px",
    paddingBottom: "12px",
    paddingTop: "15px",
    lineHeight: "27px",
  },
  phone: {
    fontSize: "14px",
  },
  icons: {
    fontSize: "16px",
    marginLeft: "15px",
    verticalAlign: "middle",
  },
  socialIcon: {
    paddingRight: "20px",
    display: "inline-flex",
  },
  login: {
    float: "right",
    fontSize: "14px",
    color: "#252525",
    display: "inline-flex",
    borderLeft: " 1px solid #e5e5e5",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingRight: "20px",
    alignItems: "center",
  },
  flag: {
    boxShadow: "none",
  },
  flagImg: {
    width: "30px",
    height: "15px",
    marginRight: "7px",
  },
  facebookImg: {
    width: "12px",
    height: "13px",
  },
});
