import { createTheme } from "@mui/material/styles";

const darkPalette = {
  mode: "dark",
  background: {
    default: "#202124", // --color-background
    secondary: "#2F3033",
    paper: "#303134", // --color-surface
    card: "#35373A"
  },
  text: {
    primary: "#e8eaed", // --color-text-primary
    secondary: "#9aa0a6", // --color-text-secondary
  },
  primary: {
    main: "#8ab4f8", // --color-primary
  },
  divider: "#5f6368", // --color-border
  icon: "#A6C6FA", // --color-icon dark
};

const lightPalette = {
  mode: "light",
  background: {
    default: "#FFFFFF", // --color-background
    paper: "#ffffff", // --color-surface
    secondary: "#fff",
    card: "#fff"
  },
  text: {
    primary: "#202124", // --color-text-primary
    secondary: "#5f6368", // --color-text-secondary
  },
  primary: {
    main: "#1a73e8", // --color-primary
  },
  divider: "#dadce0", // --color-border
  icon: "#1a73e8", // --color-icon light
};

export const getTheme = (mode) =>
  createTheme({
    palette: mode === "dark" ? darkPalette : lightPalette,
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      body1: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        letterSpacing: "0.00625em",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem", // 14px
        lineHeight: "1.25rem",
        letterSpacing: "0.0178571429em",
        fontWeight: 400,
      },
      h1: {
        fontSize: "1.5rem", // 24px
        lineHeight: "2rem",
        fontWeight: 400,
      },
      h2: {
        fontSize: "1.375rem", // 22px
        lineHeight: "1.75rem", // 28px
        fontWeight: 400,
      },
      h3: {
        fontSize: "1.125rem", // 18px
        lineHeight: "1.5rem",
        fontWeight: 500,
      },
      button: {
        fontSize: "0.875rem", // 14px
        lineHeight: "1.25rem",
        fontWeight: 500,
        textTransform: "none",
      },
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            letterSpacing: "0.00625em",
            fontWeight: 400,
          },
        },
      },
    },
  });
