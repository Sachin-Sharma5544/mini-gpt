import { createTheme, ThemeOptions } from "@mui/material/styles";

export const lightTheme: ThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#333333",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
        },
        text: {
            primary: "#000000",
            secondary: "#333333",
        },
    },
});

export const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#bbbbbb",
        },
        background: {
            default: "#000000",
            paper: "#121212",
        },
        text: {
            primary: "#ffffff",
            secondary: "#bbbbbb",
        },
    },
});
