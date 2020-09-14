import { createStyles, Theme } from "@material-ui/core/styles";

export default ({ spacing }: Theme) =>
  createStyles({
    root: {},
    icon: {
      margin: spacing(0, 1.5),
      "& :hover": {
        cursor: "pointer",
      },
    },
  });
