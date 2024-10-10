// Card.tsx
import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { BoldText, CardBottom, CardContainer, CardData, FoodIcon, InfoRow, Separator, ToggleButton } from './card.styles';
import { IOrder } from '../../../mocks/orders';

interface Props { 
  order: IOrder; // Mudamos para receber um objeto IOrder
}


const Card = ({ order }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dishNames, setDishNames] = useState<string[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [streetAddress, setStreetAddress] = useState('');

  useEffect(() => {
    const names = order.products.map(product => product.dishName);
    setDishNames(names);
    const total = order.products.reduce((sum, product) => sum + product.quantity, 0);
    setTotalQuantity(total);
    if (order.customer && order.customer.addresses && order.customer.addresses.length > 0) {
      const street = order.customer.addresses[0].street;
      setStreetAddress(street);
    }
  }, [order]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { ...order },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CardContainer isOpen={isOpen} ref={drag} isDragging={isDragging}>
      <CardData>
        <InfoRow><BoldText>Data do pedido:</BoldText> {new Date().toLocaleDateString()}</InfoRow>
        <InfoRow><BoldText>Valor do prato:</BoldText> R$ {order.totalPrice.toFixed(2)}</InfoRow>

        {isOpen && (
          <>
            <InfoRow><BoldText>Nome do prato:</BoldText> {dishNames.join(', ')}</InfoRow>
            <InfoRow><BoldText>Endereço:</BoldText> {streetAddress}</InfoRow>
            <InfoRow><BoldText>Quantidade:</BoldText> {totalQuantity}x</InfoRow>
          </>
        )}
      </CardData>
      <CardBottom>
        <Separator isOpen={isOpen} />
        <ToggleButton onClick={toggleCard}>
          {isOpen ? 'Clique para ver menos' : 'Clique para ver mais'}
        </ToggleButton>
      </CardBottom>
      <FoodIcon isOpen={isOpen} />
    </CardContainer>
  );
};

export default Card;
