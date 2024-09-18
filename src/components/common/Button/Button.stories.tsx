import { Meta, StoryObj, Decorator } from "@storybook/react";
import Button, { ButtonProps } from ".";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../../assets/styles/theme";
import { action } from '@storybook/addon-actions';

export default {
    title: "Components/Button",
    component: Button,
} as Meta<ButtonProps>; // <- Adicione o ponto e vírgula aqui
  
  const withLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  );
  
  const withDarkTheme: Decorator = (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  );
  
  export const LightTheme: StoryObj<ButtonProps> = {
    args: {
      children: "Tema claro",
      onClick: action("onClick"),
    },
    decorators: [withLightTheme],
  };
  
  export const DarkTheme: StoryObj<ButtonProps> = {
    args: {
      children: "Tema escuro",
      onClick: action("onClick"),
    },
    decorators: [withDarkTheme],
  };
  