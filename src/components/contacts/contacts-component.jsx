import { useState } from 'react';
import { ContactsContainer } from './contacts-styles';
const Contacts = (props) => {
  const [isOpen, setIsOpen] = useState(props.isContactsOpen);
  console.log(isOpen);
  return (
    <ContactsContainer isContactsOpen={isOpen}>
      <button onClick={() => setIsOpen(!isOpen)}>Close</button>
      <h1>Hello</h1>
    </ContactsContainer>
  );
};

export default Contacts;
