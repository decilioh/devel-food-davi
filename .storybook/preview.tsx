import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/assets/styles/global';
import { darkTheme, lightTheme } from '../src/assets/styles/theme';
import { HelmetProvider } from 'react-helmet-async';

const theme = 'light';

const withGlobalStyle = (Story) => (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <HelmetProvider>
      <GlobalStyles />
      <Story />
    </HelmetProvider>
  </ThemeProvider>
);

const preview = {
  decorators: [withGlobalStyle],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
