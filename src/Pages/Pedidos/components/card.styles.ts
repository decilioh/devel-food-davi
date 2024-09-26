import { MdFastfood } from "react-icons/md";
import styled from "styled-components";

export const CardContainer = styled.div<{ isOpen: boolean; isDragging: boolean }>`
  width: 329px;
  min-height: 179px;
  background-color: #0d1e2a;
  color: white;
  border-radius: 15px;
  transition: max-height 0.3s ease, opacity 0.2s ease;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '400px' : '179px')};
  position: relative;
  scale: ${(props) => (props.isDragging ? 0.95 : 1)};
  box-shadow: 4px 3px 5.7px 0px #00000070;
  cursor: grab;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 150px;
  }
`;

export const CardData = styled.div`
  padding: 30px 30px 0 30px;
  padding-right: 60px;
  font-family: 'Roboto Condensed', sans-serif;
  width: 220px;

  @media (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }
`;

export const CardBottom = styled.div`
    padding: 14px;
`;

export const InfoRow = styled.p`
  margin: 2px 0;
  font-size: 1.125rem;
  font-weight: 400;
 
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Separator = styled.hr<{isOpen: boolean}>`
  border: none;
  border-top: 1px solid #666;
  width: 100%;
  margin: 23px 0 40px 0;
  visibility: ${(props) => (props.isOpen ? 'hidden' : 'visible')};

`;

export const BoldText = styled.strong`
  font-weight: 500;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #979797;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  position: absolute;
  bottom: 18px;
  left: 0;
  text-align: center;
  
  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FoodIcon = styled(MdFastfood)<{isOpen: boolean}>`
  position: absolute;
  top: ${(props) => (props.isOpen ? '100px' : '30px')};
  right: 30px;
  font-size: 40px;
  color: white;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;