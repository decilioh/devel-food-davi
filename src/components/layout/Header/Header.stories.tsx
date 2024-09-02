import { Meta, StoryObj, Decorator } from "@storybook/react"
import { ThemeProvider as ThemeProviderStyled } from "styled-components"
import { darkTheme, lightTheme } from "../../../assets/styles/theme"
import { action } from '@storybook/addon-actions';

import HeaderMain from ".";
import { ThemeProvider } from "../../../context/themeContext";


export default {
    title: "Layout/Header",
    component: HeaderMain,
} as Meta

const withLightTheme: Decorator = (Story) => (
    <ThemeProviderStyled theme={lightTheme}>
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    </ThemeProviderStyled>
);

const withDarkTheme: Decorator = (Story) => (
    <ThemeProviderStyled theme={darkTheme}>
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    </ThemeProviderStyled>
);

export const LightTheme: StoryObj = {
    decorators: [withLightTheme],

}

export const DarkTheme: StoryObj = {
    decorators: [withDarkTheme],

}