import { createStyles, Theme } from "@material-ui/core/styles";

export default ({ spacing }: Theme) =>
  createStyles({
    root: {},
    menuWrapper: {
      margin: spacing(4, 25),
      width: "auto",
    },
    logo: {
      marginRight: spacing(12),
      height: spacing(8),
      "&:hover": {
        cursor: "pointer",
      },
    },
    menuItems: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      fontSize: "16px",
    },
    divider: {
      width: 1,
      marginRight: spacing(2.5),
    },
    contacts: {
      padding: spacing(3, 25),
      width: "auto",
      backgroundColor: "#F1F3F4",
    },
  });
