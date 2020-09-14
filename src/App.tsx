import React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import MainModule from "./modules/mainModule/MainModule";

import styles from "./App.styles";

interface AppProps extends WithStyles<typeof styles> {}

function App(props: AppProps) {
  return (
    <div>
      <MainModule />
    </div>
  );
}

export default withStyles(styles)(App);
