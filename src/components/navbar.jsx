import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='nabar nabar-light bg-light'>
      <a href='#Counter' className='navbar-brand'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
