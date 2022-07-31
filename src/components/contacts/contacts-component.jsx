import { useState } from 'react';
import { ContactsContainer } from './contacts-styles';
const Contacts = (props) => {
  return (
    <ContactsContainer isContactsOpen={props.isContactsOpen}>
      <button onClick={() => props.handlerFunction()}>Close</button>
      <h1>Hello</h1>
    </ContactsContainer>
  );
};

export default Contacts;
