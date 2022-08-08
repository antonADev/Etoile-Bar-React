import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
0% { opacity: 0}
50% {opacity: 1}
100% {opacity: 0}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  animation: ${fadeAnimation} 8s;
`;
