import styled from 'styled-components';

export const ContactsInfoContainer = styled.div`
  color: #633b0d;
  width: 100vw;
  max-height: 600px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactsTextContainer = styled.div`
  max-width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactsHeader = styled.h1`
  font-size: clamp(1.1rem, 0.7153rem + 4.6368vw, 5rem);
`;

export const ContactsPara = styled.p`
  font-weight: 200;
  font-size: clamp(1rem, 0.7153rem + 1.6368vw, 1.3rem);
`;
