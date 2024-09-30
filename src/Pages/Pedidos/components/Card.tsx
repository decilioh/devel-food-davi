// Card.tsx
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { BoldText, CardBottom, CardContainer, CardData, FoodIcon, InfoRow, Separator, ToggleButton } from './card.styles';

interface Props{ 
  data: string
  preco: string
  nome: string
  observacao: string
  qtd: number
  id: number
  status: string
}

const Card = ({data, preco, nome, observacao, qtd, id, status}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: {id: id, data_pedido: data,  nome_pedido: nome, obs_pedido: observacao, qtd_pedido: qtd, valor_pedido: preco, status_pedido: status},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CardContainer isOpen={isOpen} ref={drag} isDragging={isDragging}>
      <CardData>
        <InfoRow><BoldText>Data do pedido:</BoldText> {data}</InfoRow>
        <InfoRow><BoldText>Valor do prato:</BoldText> R$ {preco}</InfoRow>

        {isOpen && (
          <>
            <InfoRow><BoldText>Nome do prato:</BoldText> {nome}</InfoRow>
            <InfoRow><BoldText>Observação:</BoldText> {observacao}</InfoRow>
            <InfoRow><BoldText>Quantidade:</BoldText> {qtd}x</InfoRow>
          </>
        )}
      </CardData>
      <CardBottom>
        <Separator isOpen={isOpen}/>
        <ToggleButton onClick={toggleCard}>
            {isOpen ? 'Clique para ver menos' : 'Clique para ver mais'}
        </ToggleButton>
      </CardBottom>


      <FoodIcon isOpen={isOpen}/>
    </CardContainer>
  );
};

export default Card;
