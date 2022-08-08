import { createContext, useState } from 'react';

export const ContactsContext = createContext({
  isContactsOpen: Boolean,
  setContactsOpen: () => {},
});

export const ContactsProvider = ({ children }) => {
  const [isContactsOpen, setContactsOpen] = useState(false);
  const value = { isContactsOpen, setContactsOpen };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};
