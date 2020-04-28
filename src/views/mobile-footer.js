import React from 'react';

// import NavButton from '../components/nav-button';

const buttons = ['about', 'menu', 'contact', 'hours', 'location'];

// const DisplayMobileNavButtons = buttons => buttons.map(button => <NavButton key={button} title={button} />);

const NavBar = () => (
  <nav className="mobile-footer">
    <div className="mobile-footer__buttons">
      {buttons.map((button) => <p key={button} style={{ margin: '0 14px', fontSize: '10px' }}>{button}</p>)}
    </div>
  </nav>
);

export default NavBar;