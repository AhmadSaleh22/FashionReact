import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CustomArrows from "./SliderSlick";
import * as S from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    border: "none",
  },
  TabDiv: {
    color: "#252525",
    border: "none",
    margin: "0",
    minWidth: "10px",
    padding: "0",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="inherit"
        style={{
          boxShadow: "none",
          fontSize: "20px",
          minWidth: "50px !important",
        }}
      >
        <S.TabTop>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{ marginLeft: "100px", color: "#171717" }}
          >
            <Tab
              label="Clothings"
              {...a11yProps(0)}
              style={{ minWidth: "100px" }}
            />
            <Tab
              label="HandBag"
              {...a11yProps(1)}
              style={{ minWidth: "100px" }}
            />
            <Tab label="Shoes" {...a11yProps(2)} style={{ minWidth: "50px" }} />
            <Tab
              label="Accessories"
              {...a11yProps(3)}
              style={{ minWidth: "120px" }}
            />
          </Tabs>
        </S.TabTop>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CustomArrows />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
      </SwipeableViews>
    </div>
  );
}
