import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  width: 80vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuUl = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #633b0d;
  color: #633b0d;
  font-size: clamp(1rem, 2vw, 1.5rem);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuItemName = styled.h3`
  min-width: 200px;
`;

export const MenuItemPrice = styled.p``;
