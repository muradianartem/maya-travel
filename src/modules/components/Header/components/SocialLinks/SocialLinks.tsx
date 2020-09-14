import * as React from "react";
import { withStyles, WithStyles, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GTranslateIcon from "@material-ui/icons/GTranslate";

import styles from "./SocialLinks.styles";

interface SocialLinksProps extends WithStyles {}

function SocialLinks(props: SocialLinksProps) {
  const { classes } = props;

  return (
    <Grid className={classes.root}>
      <FacebookIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
      <GTranslateIcon className={classes.icon} />
    </Grid>
  );
}

export default withStyles(styles)(SocialLinks);
