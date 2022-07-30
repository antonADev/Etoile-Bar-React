import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';
import { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  InnerLinks,
  Close,
  Bars,
  NavMenu,
  NavMenuSmall,
} from './navigation.styles';
import logo from '../../assets/LogoMakr-99xgf9.png';
import Contacts from '../../components/contacts/contacts-component';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isContactsOpen, setContactsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleContacts = () => {
    setContactsOpen(!isContactsOpen);
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
      <Nav isOpen={isOpen}>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>

        {(isOpen || screenWidth > 768) && (
          <NavMenu>
            <InnerLinks to='/'>HOME</InnerLinks>
            <InnerLinks to='/menu'>MENU</InnerLinks>
            {/* <InnerLinks to='/contacts'>CONTACTS</InnerLinks> */}
            <button onClick={toggleContacts}>open</button>
          </NavMenu>
        )}

        {!isOpen ? <Bars onClick={toggleNav} /> : <Close onClick={toggleNav} />}
      </Nav>
      {isOpen && screenWidth < 768 && (
        <NavMenuSmall>
          <InnerLinks to='/'>HOME</InnerLinks>
          <InnerLinks to='/menu'>MENU</InnerLinks>
          {/* <InnerLinks to='/contacts'>CONTACTS</InnerLinks> */}
          <button onClick={toggleContacts}>open</button>
        </NavMenuSmall>
      )}
      <Contacts isContactsOpen={isContactsOpen} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
