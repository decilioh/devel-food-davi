import { Meta, StoryObj } from "@storybook/react"
import Select from ".";
import { SelectProps } from "./interface";
import { AiOutlineLock } from "react-icons/ai";
import { action } from '@storybook/addon-actions';

export default {
    title: "Components/Select",
    component: Select,
} as Meta<SelectProps>


export const Default: StoryObj<SelectProps> = {
    args: {
        icon: AiOutlineLock,
        text: "Nacionalidades",
        options: [
            {label: "Brasileiro", value: "Brasileiro"},
            {label: "Japones", value: "Japones"},
            {label: "Mexicano", value: "Mexicano"},
            {label: "Alemã", value: "Alemã"},
        ]
    }
}
export const WasTouched: StoryObj<SelectProps> = {
    args: {
        icon: AiOutlineLock,
        text: "Nacionalidades",
        options: [
            {label: "Brasileiro", value: "Brasileiro"},
            {label: "Japones", value: "Japones"},
            {label: "Mexicano", value: "Mexicano"},
            {label: "Alemã", value: "Alemã"},
        ],
        isTouched: true,
    }
}