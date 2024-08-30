import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/themeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
);
