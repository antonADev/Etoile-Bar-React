import React from 'react';

import logo from '../../assets/LogoMakr-99xgf9.png';
import {
  FooterContainer,
  LogoContainer,
  LogoImage,
  IconContainer,
  SocialLink,
  CopirightPara,
} from './footer.styles';

import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src={logo} alt='logo' />
      </LogoContainer>

      <IconContainer>
        <SocialLink
          href='https://www.instagram.com/etoile_bisignano/?hl=it'
          target='_blank'>
          <FaInstagram />
        </SocialLink>
        <SocialLink
          href='https://www.facebook.com/ETOILEBISIGNANO'
          target='_blank'>
          <FaFacebookF />
        </SocialLink>
      </IconContainer>
      <CopirightPara>Grafica e web design: Antonio Aurello</CopirightPara>
    </FooterContainer>
  );
};

export default Footer;
