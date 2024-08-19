import { Meta, StoryObj } from "@storybook/react"
import PasswordInput from ".";
import { PasswordInputProps } from "./interface";
import { AiOutlineLock } from "react-icons/ai";
import { action } from '@storybook/addon-actions';

export default {
    title: "Components/Password Input",
    component: PasswordInput,
} as Meta<PasswordInputProps>


export const Default: StoryObj<PasswordInputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        onChange: action("onChange"),
        icon: AiOutlineLock,
    }
}

export const WasTouched: StoryObj<PasswordInputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        onChange: action("onChange"),
        isTouched: true,
        icon: AiOutlineLock
    }
}

export const Error: StoryObj<PasswordInputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        onChange: action("onChange"),
        error: {message: "Ocorreu algum erro"},
        isTouched: true,
        icon: AiOutlineLock

    }
}
