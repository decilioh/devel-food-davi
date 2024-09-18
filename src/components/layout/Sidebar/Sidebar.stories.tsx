import { Meta, StoryObj, Decorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../../../assets/styles/theme"
import { action } from '@storybook/addon-actions';
import Sidebar, { SidebarProps } from ".";
import { AuthProvider } from "../../../context/authContext";
import { UserProvider } from "../../../context/userContext";
import SidebarClone from "./clone";


export default {
    title: "Layout/Sidebar",
    component: SidebarClone,
} as Meta<SidebarProps>

const withLightTheme: Decorator = (Story) => (
    <ThemeProvider theme={lightTheme}>
        <UserProvider>
            <AuthProvider>
                <Story />
            </AuthProvider>
        </UserProvider>
    </ThemeProvider>
);

const withDarkTheme: Decorator = (Story) => (
    <ThemeProvider theme={darkTheme}>
        <UserProvider>
            <AuthProvider>
                <Story />
            </AuthProvider>
        </UserProvider>
    </ThemeProvider>
);

export const LightTheme: StoryObj<SidebarProps> = {
    decorators: [withLightTheme],
    args: {
        isOpen: false
    }
}

export const DarkTheme: StoryObj<SidebarProps> = {
    decorators: [withDarkTheme],
    args: {
        isOpen: false
    }
}