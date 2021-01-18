import { NavLink, Link } from "react-router-dom";
import { Department } from "../Department";
import { useStyles } from "./style";

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div>
      <nav>
        <ul className={classes.root}>
          <Department />
          <NavLink to="/" className={classes.listItem} exact>
            Home
          </NavLink>

          <NavLink to="/shop" className={classes.listItem}>
            shop
          </NavLink>
          <div className={classes.mainCollection}>
            <NavLink to="/collection" className={classes.listItem}>
              collection
            </NavLink>
            <div className={classes.hoverCollection}>
              <Link to="/">Men's</Link>
              <Link to="/">Women's</Link>
              <Link to="/">Kid's</Link>
            </div>
          </div>
          <NavLink to="/blog" className={classes.listItem}>
            blog
          </NavLink>
          <NavLink to="/contact" className={classes.listItem}>
            contact
          </NavLink>
          <div className={classes.mainCollection}>
            <NavLink to="/pages" className={classes.listItem}>
              pages
            </NavLink>
            <div className={classes.hoverCollection}>
              <Link to="/">Blog Details</Link>
              <Link to="/">Shopping Cart</Link>
              <Link to="/">Checkout</Link>
              <Link to="/">Faq</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
