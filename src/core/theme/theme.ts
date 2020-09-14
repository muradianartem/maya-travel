import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primary: "#FFFFFF",
  black: "#000000",
  secondary: "#F1F3F4",
  error: "#FF0000",
  grey: "#CFD6DA",
};

const spacing = 4;

export default createMuiTheme({
  spacing,
  palette: {
    primary: {
      main: colors.black,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
  },
  overrides: {
    MuiLink: {
      root: {
        marginRight: spacing * 10,
        "&: hover": {
          cursor: "pointer",
        },
      },
    },
  },
});
