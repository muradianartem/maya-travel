import * as React from "react";
import { withStyles, WithStyles, Grid } from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import styles from "./ContactBar.styles";

interface ContactBarProps extends WithStyles {}

function ContactBar(props: ContactBarProps) {
  const { classes } = props;

  return (
    <Grid className={classes.root}>
      <span className={classes.item}>Business name here</span>
      <p className={classes.dot}></p>
      <span className={classes.item}>Slogan here</span>
      <p className={classes.dot}></p>
      <span className={classes.item}>
        <PhoneIcon className={classes.icon} />
        054-1234567
      </span>
      <p className={classes.dot}></p>
      <span className={classes.item}>
        <MailIcon className={classes.icon} />
        myemail@gmail.com
      </span>
      <p className={classes.dot}></p>
      <span className={classes.item}>
        <LocationOnIcon className={classes.icon} />
        My address here
      </span>
    </Grid>
  );
}

export default withStyles(styles)(ContactBar);
