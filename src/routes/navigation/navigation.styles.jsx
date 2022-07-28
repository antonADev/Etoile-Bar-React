import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const barsAndClose = css`
  display: none;
  color: #633b0d;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  background-color: #fff;
  height: ${({ isOpen }) => (isOpen ? '300px' : '80px')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding: 1rem calc((100vw - 1000px) / 2); */
  z-index: 10;
  transition: height 0.3s linear;
  max-width: 100%;
  /* transition: all 1s ease-in-out; */

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.8rem;
  cursor: pointer;

  img {
    width: 150px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10%, 15%);
  }
`;

export const InnerLinks = styled(Link)`
  color: #633b0d;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 1rem;
  /* height: 100%; */
  cursor: pointer;

  &.active {
    color: #999065;
    border: 1px solid #633b0d;
    border-radius: 3px;
    transition: border 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    & ~ a {
      margin-top: 15%;
    }

    &.active {
      border: none;
    }
  }
`;

export const Bars = styled(FaBars)`
  ${barsAndClose}
`;

export const Close = styled(AiOutlineClose)`
  ${barsAndClose}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavMenuSmall = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
