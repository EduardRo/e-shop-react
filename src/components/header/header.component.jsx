import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to={'/'} className='logo-container'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        {currentUser ? (
          <div className='option user'>{currentUser.displayName}</div>
        ) : (
          ''
        )}
        <Link to={'/shop'} className='option'>
          SHOP
        </Link>

        <Link to={'/contact'} className='option'>
          Contact
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Logout
          </div>
        ) : (
          <Link to={'/signin'} className='option'>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
