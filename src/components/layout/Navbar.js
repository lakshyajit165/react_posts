import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav nav-wrapper blue accent-2">
        <div className="container">
            <Link to="/" className="brand-logo">Reactive Posts!</Link>
            <SignedInLinks /> 
            <SignedOutLinks />
        </div>
    </nav>
  )
}

export default Navbar;
