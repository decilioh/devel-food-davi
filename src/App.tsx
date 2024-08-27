import { useState } from 'react';
import Router from './routes/Route';
import { darkTheme, lightTheme } from './assets/styles/theme';
import { GlobalStyles } from './assets/styles/global';
import { ThemeProvider } from './context/themeContext';
import { ModalProvider } from './context/modalContext';


export default function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <>
          <GlobalStyles />
          <Router />
        </>
      </ModalProvider>
    </ThemeProvider>

  );
}
