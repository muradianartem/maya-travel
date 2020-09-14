import { createStyles, Theme } from "@material-ui/core/styles";

import Image from "../../shared/assets/images/background-image.png";

export default ({ spacing }: Theme) =>
  createStyles({
    root: {},
    mainPage: {
      width: "100%",
      height: "700px",
      background: `top no-repeat url(${Image})`,
      backgroundSize: "cover",
    },
  });
