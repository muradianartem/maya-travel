import * as React from "react";
import { withStyles, WithStyles, Grid } from "@material-ui/core";

import Header from "../components/Header";

import styles from "./MainModule.styles";

interface MainModuleProps extends WithStyles {}

function MainModule(props: MainModuleProps) {
  const { classes } = props;

  return (
    <>
      <Header />
      <Grid className={classes.mainPage}></Grid>
    </>
  );
}

export default withStyles(styles)(MainModule);
