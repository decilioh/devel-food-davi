// .storybook/preview.tsx
import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from '../src/assets/styles/global'
import {darkTheme, lightTheme} from "../src/assets/styles/theme"; // Importe o tema se estiver usando um

const theme = "light";

const withGlobalStyle = (Story) => (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
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
