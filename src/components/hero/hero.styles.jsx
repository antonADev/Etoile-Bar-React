import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const HeroContainer = styled.div`
  position: relative;

  width: 100vw;
  max-height: 100%;

  ${ReactPlayer} {
    object-fit: cover;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Header = styled.h1`
  font-size: clamp(1.1rem, 0.7153rem + 4.6368vw, 5rem);
`;

export const Paragraph = styled.p`
  font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);
  font-weight: 200;
  text-align: center;
  max-width: 80vw;
`;
