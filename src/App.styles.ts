import { createStyles } from "@material-ui/core/styles";

export default () =>
  createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        border: 0,
        fontWeight: 400,
      },
    },
  });
