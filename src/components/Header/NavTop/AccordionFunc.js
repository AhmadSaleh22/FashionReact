import React, { useState } from "react";
import "./style";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { flag1, flag2 } from "../img/img.jsx";
import { useStyles } from "./style";

const Accordion = withStyles({
  root: {
    boxShadow: "none",

    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    position: "flex",
    marginTop: "-10px",
    zIndex: "999",
  },
}))(MuiAccordionDetails);
export default function AccordionFunc() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div
      style={{
        display: "flex",
        height: "54px",
        borderLeft: "1px solid #e5e5e5",
      }}
    >
      <Accordion
        className={classes.flag}
        square
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
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
    </div>
  );
}
