// import { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import NavLinks from '../../components/nav-links/nav-links.component';
// import logo from '../../assets/LogoMakr-99xgf9.png';
// const Navigation = () => {
//   const [isTrue, setIsTrue] = useState(false);

//   // const checkIfOpen = (componentToCheck) => {
//   //   if(window.innerWidth > 768)
//   // }
//   useEffect(() => {
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 768) setIsTrue(false);
//     });
//   }, [isTrue]);

//   return (
//     <Fragment>
//       <div className='flex justify-between items-center w-full relative'>
//         <img className='w-50' src={logo} alt='logo' />
//         <div className='navLinks-container hidden md:block '>
//           <NavLinks name='HOME' route='/' />
//           <NavLinks name='MENU' route='/' />
//           <NavLinks name='CONTACTS' route='/' />
//         </div>
//         {isTrue && window.innerWidth < 768 ? (
//           <div className='flex flex-row absolute w-100 h-100 md:hidden '>
//             <NavLinks name='HOME' route='/' />
//             <NavLinks name='MENU' route='/' />
//             <NavLinks name='CONTACTS' route='/' />
//           </div>
//         ) : (
//           ''
//         )}
//         <button onClick={() => setIsTrue(!isTrue)} className='block md:hidden'>
//           X
//         </button>
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;

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
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
      <Nav isOpen={isOpen}>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>

        {(isOpen || screenWidth > 768) && (
          <NavMenu>
            <InnerLinks to='/'>HOME</InnerLinks>
            <InnerLinks to='/menu'>MENU</InnerLinks>
            <InnerLinks to='/contacts'>CONTACTS</InnerLinks>
          </NavMenu>
        )}

        {!isOpen ? <Bars onClick={toggleNav} /> : <Close onClick={toggleNav} />}
      </Nav>
      {isOpen && screenWidth < 768 && (
        <NavMenuSmall>
          <InnerLinks to='/'>HOME</InnerLinks>
          <InnerLinks target='hello' to='/menu'>
            MENU
          </InnerLinks>
          <InnerLinks target='hello' to='/contacts'>
            CONTACTS
          </InnerLinks>
        </NavMenuSmall>
      )}
      <Outlet />
    </>
  );
};

export default Navigation;
