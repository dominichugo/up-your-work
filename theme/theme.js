import { createTheme } from "@mui/material";
import colors from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.green,
            contrastText: "white",
        },
        secondary: {
            main: colors.gold,
            contrastText: "white",
        },
        background: {
            default: colors.softGreen,
            paper: colors.softYellow,
        },
        custom: {
            red: colors.red,
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.25rem",
            fontWeight: 300,
        },
        h4: {
            fontSize: "1.25rem",
        },
    },
});

export default theme;
