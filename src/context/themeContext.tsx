import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../assets/styles/theme";
import { ToastContainer } from "react-toastify";

export interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeStyles}>
        {children}
        <ToastContainer
          position="top-right"
          closeOnClick
          autoClose={5000}
          theme={theme}
        />
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}