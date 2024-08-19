import { useState } from 'react';
import Router from './routes/Route';
import { darkTheme, lightTheme } from './assets/styles/theme';
import { GlobalStyles } from './assets/styles/global';
import { ThemeProvider } from './context/themeContext';


export default function App() {
  return (
    <ThemeProvider>

      <>
        <GlobalStyles />
        <Router />
      </>

    </ThemeProvider>

  );
}
