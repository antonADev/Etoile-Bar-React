import {
  ContactsInfoContainer,
  ContactsTextContainer,
  ContactsHeader,
  ContactsPara,
} from './contacts-info.styles';

const ContactsInfo = () => {
  return (
    <ContactsInfoContainer>
      <ContactsTextContainer>
        <ContactsHeader>Contatti</ContactsHeader>
        <ContactsPara>
          Vieni a trovarci in via Corrado Alvaro, 87043, Bisignano CS
        </ContactsPara>
      </ContactsTextContainer>
    </ContactsInfoContainer>
  );
};

export default ContactsInfo;
