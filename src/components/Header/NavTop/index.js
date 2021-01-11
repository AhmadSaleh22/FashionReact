import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import PersonIcon from "@material-ui/icons/Person";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { flag1, flag2 } from "../img/img";

const useStyles = makeStyles({
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
    marginRight: "5%",
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
    paddingBottom: "12px",
  },
  flag: {
    boxShadow: "none",
  },
  flagImg: {
    width: "30px",
    height: "15px",
    marginRight: "7px",
  },
});

export default function NavTop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navLeft}>
        <div className={classes.mail}>
          <EmailIcon className={classes.email} />
          <Typography variant="inherit" gutterBottom>
            hello.colorlib@gmail.com
          </Typography>
        </div>
        <div className={classes.phoneService} style={{ float: "right" }}>
          <PhoneIcon className={classes.phone} />
          <Typography variant="inherit" gutterBottom>
            +65 11.188.888
          </Typography>
        </div>
      </div>
      <div className={classes.rightNav}>
        <div className={classes.socialIcon}>
          <FacebookIcon className={classes.icons} />
          <TwitterIcon className={classes.icons} />
          <LinkedInIcon className={classes.icons} />
          <PinterestIcon className={classes.icons} />
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "300px",
            height: "54px",
            borderLeft: "1px solid #e5e5e5",
          }}
        >
          <Accordion className={classes.flag}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.phone}>
                <img src={flag1} alt="img" className={classes.flagImg} />
                English
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                height: "51px",
                border: "1px solid #dee2e6",
                boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                maxWidth: "142px",
              }}
            >
              <Typography>
                <Typography style={{ fontSize: "13px" }}>
                  <img src={flag1} alt="img" className={classes.flagImg} />
                  English
                </Typography>
                <Typography style={{ fontSize: "13px" }}>
                  <img src={flag2} alt="img" className={classes.flagImg} />
                  German
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div className={classes.login}>
            <PersonIcon className={classes.icons} />
            <Typography
              style={{ marginLeft: "5px" }}
              variant="inherit"
              gutterBottom
            >
              Login
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
