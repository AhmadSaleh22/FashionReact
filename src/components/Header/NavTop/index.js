import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import PersonIcon from "@material-ui/icons/Person";
import { useStyles } from "./style";
import { facebookIcon, linkedinIcon, pinterestIcon } from "../img/img.jsx";
import AccordionFunc from "./AccordionFunc";
import { Link } from "react-router-dom";

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
          <img src={facebookIcon} alt="img" className={classes.facebookImg} />
          <TwitterIcon className={classes.icons} />
          <img
            src={linkedinIcon}
            alt="img"
            style={{ marginLeft: "15px" }}
            className={classes.facebookImg}
          />
          <img
            src={pinterestIcon}
            alt="img"
            className={classes.facebookImg}
            style={{ marginLeft: "15px" }}
          />
        </div>

        <AccordionFunc />

        <Link to="/login">
          <div className={classes.login}>
            <PersonIcon className={classes.icons} />
            <Typography
              style={{ marginLeft: "5px", marginTop: "3px" }}
              variant="inherit"
              gutterBottom
            >
              login
            </Typography>
          </div>
        </Link>
      </div>
    </div>
  );
}
