import React from "react";
import { Card, Container, Typography } from "@material-ui/core";
import Timer from "./Timer";
import useStyles from "./style";
import { BootstrapButton } from "./style";

export default function Offer() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root} fixed>
      <Card square={true} elevation={0}>
        <div className={classes.cont}>
          <Typography variant="h2" className={classes.typographyH2}>
            Deal Of The Week
          </Typography>
          <Typography variant="body1" className={classes.typographyBody}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            <br /> do ipsum dolor sit amet, consectetur adipisicing elit
          </Typography>
          <Typography
            variant="button"
            display="block"
            className={classes.salary}
          >
            $35.00
          </Typography>
        </div>
        <div className={classes.timer}>
          <Timer />
          <BootstrapButton
            variant="contained"
            color="primary"
            disableRipple
            className={classes.margin}
          >
            SHOP NOW
          </BootstrapButton>
        </div>
      </Card>
    </Container>
  );
}
