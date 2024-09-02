import { Meta, StoryObj, Decorator } from "@storybook/react"
import { ThemeProvider as ThemeProviderStyled } from "styled-components"
import {  lightTheme } from "../../../assets/styles/theme"

import Modal from ".";
import { ModalContextProps, ModalProvider } from "../../../context/modalContext";
import { ButtonAction, Centralize, ModalDialog, Overlay, Paragraph, SpacingContents } from "./Modal.styles";


export default {
    title: "Components/Modal",
    component: Modal,
} as Meta

const withLightTheme: Decorator = () => (
    <ThemeProviderStyled theme={lightTheme}>
        <ModalProvider>
            <Overlay>
                <Centralize>
                    <ModalDialog>
                        <Paragraph>Você tem certeza que deseja realizar esta ação?</Paragraph>
                        <SpacingContents>
                            <ButtonAction  style={{ backgroundColor: '#00D982' }} >Sim</ButtonAction>
                            <ButtonAction  style={{ backgroundColor: '#C90000' }}>Não</ButtonAction>
                        </SpacingContents>
                    </ModalDialog>
                </Centralize>
            </Overlay>
        </ModalProvider>
    </ThemeProviderStyled>
);


export const ComponenteAberto: StoryObj<ModalContextProps> = {
    decorators: [withLightTheme],
}
