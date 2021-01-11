import { React, useState, useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Blog from "./index";
import Proparity from "./Proparity";
import blogSrc from "./images/blog1.jpg";
import blogSrc2 from "./images/blog2.jpg";
import blogSrc3 from "./images/blog3.jpg";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  typog: {
    color: "#252525",
    fontSize: "36px",
    fontWeight: "700",
  },
  blogCon: {
    flexDirection: "row",
    justifyContent: "spaceBetween",
  },
  line: {
    width: "80px",
    height: "4px",
    backgroundColor: "#e7ab3c",
    display: "inline-block",
    marginBottom: "38px",
  },
});
const initialValue = [{ title: "Title", content: " --- content ---" }];

const allowedState = [
  {
    title: "The Best Street Style From London Fashion Week",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    img: blogSrc,
  },
  {
    title: "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    img: blogSrc2,
  },
  {
    title: "How To Brighten Your Wardrobe With A Dash",
    content:
      "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    img: blogSrc3,
  },
];
export default function Blogs() {
  const classes = useStyles();

  const [stateOptions, setStateValues] = useState(initialValue);
  // initialValue.push(...allowedState);

  console.log(initialValue.length);
  // ****** BEGINNING OF CHANGE ******
  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    setStateValues(allowedState);
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h2" className={classes.typog} gutterBottom>
          From The Blog
        </Typography>
        <div className={classes.line}> </div>
      </div>

      <div className={classes.blogCon}>
        {stateOptions.map((localState) => (
          <Blog
            image={localState.img}
            title={localState.title}
            content={localState.content}
          />
        ))}
      </div>
      <Proparity />
    </div>
  );
}
