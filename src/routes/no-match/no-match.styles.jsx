import styled from 'styled-components';

export const NoMatchContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #633b0d;
  text-align: center;
`;

export const NoMatchHeader = styled.h4`
  font-size: clamp(1.8rem, 0.7153rem + 2.8368vw, 4rem);
`;
export const NoMatchPara = styled.h4`
  max-width: 70%;
  font-weight: 300;
  font-size: clamp(1rem, 0.7153rem + 1.6368vw, 3rem);
`;
