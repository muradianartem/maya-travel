import { createStyles, Theme } from "@material-ui/core/styles";

export default ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    item: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    icon: {
      width: spacing(3),
      height: spacing(3),
      marginRight: 6,
    },
    dot: {
      backgroundColor: "#11344C",
      width: 8,
      height: 8,
      margin: spacing(0, 5),
      borderRadius: "50%",
    },
  });
