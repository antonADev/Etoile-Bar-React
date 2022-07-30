import styled from 'styled-components';

export const ContactsContainer = styled.div`
  position: absolute;
  width: ${({ isContactsOpen }) => (isContactsOpen ? '30vw' : '0')};
  height: 100vh;
  background-color: red;

  display: flex;
  flex-direction: column;
  border: 1px solid black;
  top: 0px;
  right: 0px;
  z-index: 99;
  transition: width 0.5s ease-in-out;
`;
