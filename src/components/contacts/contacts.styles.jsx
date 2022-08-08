import styled from 'styled-components';

export const ContactsContainer = styled.div`
  width: 50vw;
  position: fixed;
  background-color: rgb(227, 227, 227);
  color: #633b0d;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  height: 100vh;
  padding: 0 30px;
  text-align: center;
  transition: all 1s;
  z-index: 99;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
  @media screen and (min-width: 2000px) {
    width: 20vw;
  }
`;

export const ButtonContainer = styled.div`
  margin: 10% auto;
  max-height: 100px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  font-size: 1.4rem;
`;

export const LogoContainer = styled.div`
  background-color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 6rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const ContactHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const ContactPara = styled.a`
  font-size: 0.8rem;
`;

export const TextContainer = styled.div`
  > ${ContactHeader} {
    margin-top: 25%;
  }
`;
