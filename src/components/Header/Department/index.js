import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";

export function Department() {
  const classes = useStyles();

  return (
    <div className={classes.department}>
      <MenuIcon className={classes.barIcon} />
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.textDepratment}
      >
        All departments
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.contentRight}
      >
        ï„‡
      </Typography>
      <div className={classes.hoverClass}>
        <NavLink to="/" exact>
          Women's Clothing
        </NavLink>
        <NavLink to="/men">Men's Clothing</NavLink>
        <NavLink to="/under">Underwear</NavLink>
        <NavLink to="/kids">Kid's Clothing</NavLink>
        <NavLink to="/brandFashion">Brand Fashion</NavLink>
        <NavLink to="/shoes">Accessories/Shoes</NavLink>
        <NavLink to="/luxuryBrand">Luxury Brands</NavLink>
        <NavLink to="/outdoor">Brand Outdoor Apparel</NavLink>
      </div>
    </div>
  );
}
