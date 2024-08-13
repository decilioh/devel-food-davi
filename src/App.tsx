import { useState } from 'react';
import Router from './routes/Route';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/styles/theme';
import { GlobalStyles } from './assets/styles/global';


export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router />
      </>
    </ThemeProvider>

  );
}
