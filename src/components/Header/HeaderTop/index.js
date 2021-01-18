import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./style";
import { DataContext } from "../../Context";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -1,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#e7ab3c",
  },
}))(Badge);
export default function HeaderTop() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img
          src="https://preview.colorlib.com/theme/fashi/img/logo.png"
          alt="img"
          style={{
            verticalAlign: "middle",
            marginTop: "12px",
          }}
        />
      </div>
      <div className={classes.mainCat}>
        <button className={classes.category}>All Categories</button>
        <ExpandMoreIcon className={classes.expandIcon} />
        <input
          type="text"
          placeholder="What do you need?"
          className={classes.inputBox}
        />
        <button className={classes.searchIcon}>
          <SearchIcon />
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledBadge badgeContent={0} color="secondary" showZero>
          <FavoriteBorderIcon />
        </StyledBadge>

        <StyledBadge
          badgeContent={cart.length}
          color="secondary"
          style={{ marginLeft: "13px" }}
          showZero
        >
          <LocalMallIcon />
        </StyledBadge>
        <Typography variant="h5" gutterBottom className={classes.price}>
          $150.00
        </Typography>
      </div>
    </div>
  );
}
