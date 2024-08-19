import { Meta, StoryObj } from "@storybook/react"
import Input from ".";
import { InputProps } from "./interface";
import { AiOutlineCreditCard } from "react-icons/ai";
import { action } from '@storybook/addon-actions';

export default {
    title: "Components/Input",
    component: Input,
} as Meta<InputProps>



export const Default: StoryObj<InputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        icon: AiOutlineCreditCard,
        onChange: action("onChange")
    }
}

export const WasTouched: StoryObj<InputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        icon: AiOutlineCreditCard,
        onChange: action("onChange"),
        isTouched: true
    }
}

export const Error: StoryObj<InputProps> = {
    args: {
        placeholder: "Digite o seu texto",
        icon: AiOutlineCreditCard,
        onChange: action("onChange"),
        error: {message: "Ocorreu algum erro"},
        isTouched: true
    }
}
