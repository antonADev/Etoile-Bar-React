import styled, { keyframes } from 'styled-components';
const rotation = keyframes`
0%{
  transform: scale(0);
}
100% {
  transform: scale(1);
}`;

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedIcon = styled.img`
  animation: ${rotation} 2s ease-in-out infinite;
`;
