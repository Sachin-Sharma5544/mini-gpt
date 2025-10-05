import React, { createContext, useState, useMemo, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../theme/themes";

interface ThemeContextType {
    toggleTheme: () => void;
    mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    mode: "light",
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
