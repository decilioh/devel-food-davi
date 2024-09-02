import { Meta, StoryObj, Decorator } from "@storybook/react"
import { ThemeProvider as ThemeProviderStyled } from "styled-components"
import { darkTheme, lightTheme } from "../../../assets/styles/theme"
import { action } from '@storybook/addon-actions';
import Loader, { LoaderProps } from ".";
import { ThemeProvider } from "../../../context/themeContext";


export default {
    title: "Components/Loader",
    component: Loader,
} as Meta<LoaderProps>

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

export const LightTheme: StoryObj<LoaderProps> = {
    decorators: [withLightTheme],
    args: {
        theme: {theme: "light", toggleTheme: () => {}}
    },
    argTypes: {
        theme: { control: { disable: true } }
    }
}

export const DarkTheme: StoryObj<LoaderProps> = {
    decorators: [withDarkTheme],
    args: {
        theme: {theme: "dark", toggleTheme: () => {}}
    },
    argTypes: {
        theme: { control: { disable: true } }
    }
}