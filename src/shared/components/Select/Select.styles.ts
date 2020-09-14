import { createStyles, Theme } from "@material-ui/core/styles";

export default ({ spacing }: Theme) =>
  createStyles({
    root: {
      textDecoration: "none",
      "& .MuiInput-underline:before": {
        borderBottom: "none",
      },
      minWidth: spacing(20),
      marginLeft: spacing(5),
    },
  });
