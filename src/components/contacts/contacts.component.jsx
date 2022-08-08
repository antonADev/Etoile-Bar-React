import { useContext } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import {
  ContactsContainer,
  ButtonContainer,
  CloseButton,
  LogoContainer,
  LogoImage,
  InfoContainer,
  ContactHeader,
  ContactPara,
  TextContainer,
} from './contacts.styles';
import { ContactsContext } from '../../contexts/contacts-context';

import logo from '../../assets/LogoMakr-99xgf9.png';

const Contacts = () => {
  const { isContactsOpen, setContactsOpen } = useContext(ContactsContext);

  return (
    <ContactsContainer isOpen={isContactsOpen}>
      <ButtonContainer>
        <CloseButton
          onClick={() => {
            setContactsOpen(!isContactsOpen);
          }}>
          <AiOutlineClose />
        </CloseButton>
      </ButtonContainer>

      <LogoContainer>
        <LogoImage src={logo} alt='logo' />
      </LogoContainer>
      <InfoContainer>
        <TextContainer>
          <ContactHeader>Telefono</ContactHeader>
          <ContactPara href='tel:+390984951496'>0984951496</ContactPara>
          <ContactHeader>Email</ContactHeader>
          <ContactPara href='mailto:etoilebisignano@gmail.com'>
            etoilebisignano@gmail.com
          </ContactPara>
          <ContactHeader>Indirizzo</ContactHeader>
          <ContactPara href='https://www.google.com/maps/place/Etoile/@39.5025482,16.2663507,17z/data=!4m5!3m4!1s0x133f766c9cb32e97:0x2d98d0c9464a97c3!8m2!3d39.5025787!4d16.2685294'>
            Via Corrado Alvaro, 87043 Bisignano
          </ContactPara>
        </TextContainer>
      </InfoContainer>
    </ContactsContainer>
  );
};

export default Contacts;
