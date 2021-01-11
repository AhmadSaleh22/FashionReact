import { React } from "react";
import Date from "./Date";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import {
  makeStyles,
  Paper,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "0 15px",
    textAlign: "left",
    maxWidth: 350,
    maxHeight: 490,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  media: {
    height: 260,
  },
  icon: {
    fontSize: "medium",
    color: "#e7ab3c",
    marginRight: "8px",
  },
  space: {
    marginRight: "8px",
    display: "flex",
  },
});
export default function BlogCard(props) {
  // const [Dateme, setDateme] = useState();
  // const [Comments, setComment] = useState();

  const classes = useStyles();

  return (
    <div style={{ display: "inline-block" }}>
      <Paper className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: "flex" }}>
            <span className={classes.space}>
              <CalendarTodayIcon className={classes.icon} />{" "}
              {<Date date="May 4,2019" />}
            </span>
            <span className={classes.space}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.space}
              >
                6
              </Typography>
              <ChatBubbleOutlineIcon className={classes.icon} />
            </span>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Paper>
    </div>
  );
}
