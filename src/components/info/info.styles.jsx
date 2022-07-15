import styled from 'styled-components';

export const InfoContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
`;

export const Header = styled.h2`
  color: #633b0d;
  position: absolute;
  top: 80px;
  font-weight: 700;
  font-size: clamp(1.8rem, 0.7153rem + 2.8368vw, 3rem);
`;

export const Paragraph = styled.p`
  color: #633b0d;
  margin-top: 8rem;
  font-weight: 300;
  font-size: clamp(1rem, 0.7153rem + 1.6368vw, 1.3rem);
  max-width: 60%;
`;
