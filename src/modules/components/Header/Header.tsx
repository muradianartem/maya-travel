import * as React from "react";
import { withStyles, WithStyles, Grid, Link, Divider } from "@material-ui/core";

import Select from "../../../shared/components/Select";
import logo from "../../../shared/assets/logo/logo.png";
import { LANGUAGE, CURRENCY } from "../../../shared/constants/header";
import ContactBar from "./components/ContactBar";
import SocialLinksProps from "./components/SocialLinks";

import styles from "./Header.styles";

interface HeaderProps extends WithStyles {}

function Header(props: HeaderProps) {
  const { classes } = props;
  const buttons = ["Home", "About", "Contact"];

  const menuItems = buttons.map((button) => {
    return (
      <Link
        key={button}
        className={classes.link}
        onClick={() => {
          console.info(`${button} button`);
        }}
      >
        {button}
      </Link>
    );
  });

  return (
    <Grid className={classes.root}>
      <Grid container justify="space-between" className={classes.menuWrapper}>
        <Grid item className={classes.menuItems}>
          <img src={logo} alt="Maya-travel" className={classes.logo} />
          {menuItems}
        </Grid>
        <Grid item className={classes.menuItems}>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Select options={CURRENCY} />
          <Select options={LANGUAGE} />
        </Grid>
      </Grid>
      <Grid container justify="space-between" className={classes.contacts}>
        <ContactBar />
        <SocialLinksProps />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Header);
