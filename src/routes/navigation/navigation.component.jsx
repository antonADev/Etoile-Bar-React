import { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ContactsContext } from '../../contexts/contacts-context';

import Contacts from '../../components/contacts/contacts.component';
import Footer from '../../components/footer/footer.component';

import logo from '../../assets/LogoMakr-99xgf9.png';
import {
  Nav,
  NavLink,
  InnerLinks,
  ContactsButton,
  Close,
  Bars,
  NavMenu,
  NavMenuSmall,
} from './navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isContactsOpen, setContactsOpen } = useContext(ContactsContext);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, [isOpen]);

  return (
    <>
      <Contacts />
      <Nav isOpen={isOpen}>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>

        {(isOpen || screenWidth > 768) && (
          <NavMenu>
            <InnerLinks to='/'>HOME</InnerLinks>
            <InnerLinks to='/menu'>MENU</InnerLinks>
            <ContactsButton
              isTrue={isContactsOpen}
              onClick={() => {
                setContactsOpen(!isContactsOpen);
              }}>
              CONTACTS
            </ContactsButton>
          </NavMenu>
        )}

        {!isOpen ? <Bars onClick={toggleNav} /> : <Close onClick={toggleNav} />}
      </Nav>
      {isOpen && screenWidth < 768 && (
        <NavMenuSmall>
          <InnerLinks to='/'>HOME</InnerLinks>
          <InnerLinks to='/menu'>MENU</InnerLinks>
          <ContactsButton
            isTrue={isContactsOpen}
            onClick={() => {
              setContactsOpen(!isContactsOpen);
            }}>
            CONTACTS
          </ContactsButton>
        </NavMenuSmall>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
