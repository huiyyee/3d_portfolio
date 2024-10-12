import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'//use to navigate to other parts of the pages 
import { styles } from './styles';
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  const [active,setActive] = useState('')
  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex 
      justify-between items-center max-w-7xl mx-auto">
        <Link
          to = "/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" 
            style={{ maxWidth: '150px', maxHeight: '150px' }}

          />
          <p className="text-white text-[18px] font-bold cursor-pointer">HY <span className="sm:block hidden">| Personal Portfolio</span> </p>
        </Link>
        <ul className="list-none hidden sm:flex 
        flex-row "

      </div>
    </nav>
  )
}

export default Navbar