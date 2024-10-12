import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'//use to navigate to other parts of the pages 
import { styles } from './styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex 
      justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10"/>
        </Link>

        <div className="hidden sm:flex">
          {navLinks.map(link => (
            <Link key={link.id} to={link.to} className={styles.navLink}>
              {link.text}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center">
          <button className={styles.navToggle} onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menu} alt="Menu" className="w-6 h-6"/>
          </button>
        </div>

        <div className={`sm:hidden ${menuOpen? styles.menuOpen : ''}`}>
          <ul className={styles.menu}>
            {navLinks.map(link => (
              <li key={link.id}>
                <Link to={link.

      </div>
    </nav>
  )
}

export default Navbar