import { createTheme } from "@mui/material";
import colors from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.green,
        },
        secondary: {
            main: colors.gold,
        },
        background: {
            default: colors.softGreen,
            paper: colors.softYellow,
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 600,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
        },
    },
});

export default theme;
