import "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    sub1: {
      main: string;
      contrastText: string;
    };
    bg1: {
      main: string;
    };
  }
  interface PaletteOptions {
    sub1?: {
      main?: string;
      contrastText?: string;
    };
    bg1?: {
      main: string;
    };
  }
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    xm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false; // adds the `mobile` breakpoint
    tablet: false;
    laptop: false;
    desktop: false;
  }
  interface TypographyVariants {
    subtitle: React.CSSProperties;
    note: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    subtitle?: React.CSSProperties;
    note?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    note: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E2563B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ef7f40",
      contrastText: "#fff",
    },
    sub1: { main: "#8f7e62", contrastText: "#fff" },
    bg1: {
      main: "#F5F5F5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xm: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
    subtitle: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#404040",
    },
    note: {
      fontSize: 10,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ['"Noto Sans JP"', "sans-serif", "Roboto"].join(","),
          color: "#404040",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: ['"Noto Sans JP"', "sans-serif", "Roboto"].join(","),
        },
      },
    },
  },
});

export default theme;
