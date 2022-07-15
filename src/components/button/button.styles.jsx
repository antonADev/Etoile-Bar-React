import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 1% 3%;
  font-weight: 700;
  font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem);
  background-color: #999065;
  color: #fff;
  border-radius: 3px;

  margin-top: 3%;
  text-transform: uppercase;
  transition: all 1s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #999065;
    transition: all 1s ease-in-out;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #999065;
  border: 2px solid #999065;

  &:hover {
    background-color: #999065;
    color: #fff;
    transition: all 1s ease-in-out;
  }
`;
