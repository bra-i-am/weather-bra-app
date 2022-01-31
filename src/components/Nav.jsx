import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';

import Logo from '../images/logo.png';

import './Nav.css';

export default function Nav({ onSearch }) {
  return (
    <div className='nav'>
      <NavLink to='/' >
        <div className='logo-container'>
          <img src={Logo} alt="Logo de la página" />
          <span>clim<span className='inside'>app</span></span>
        </div>
      </NavLink>
      <div>
        <SearchBar
          onSearch={onSearch}
        />
        <NavLink id='about' to='/About'>About</NavLink>
      </div>
    </div>
  );
}