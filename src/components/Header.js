import React, { useState, useEffect } from 'react';
// components
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import LogoWhite from '../assets/img/header/logo-white.png'

// import motion
import { motion } from 'framer-motion';

// import variaveis
import { staggerContainer, fadeIn } from '../variants';

const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92)',
    transition: {
      type: 'spring'
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });


  return (
    <motion.header 
      variants={headerVariants} 
      initial='hidden' 
      animate={isActive ? 'show' : ''} 
      className='bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4'>
        
        <div className='container mx-auto'>
          <div>
            {/* botao menu */}
            <motion.div 
              className={`flex bg-red-400/20 flex-col`} 
              onClick={()=> setNav(!nav)}>
              {/* barra */}
              <div>barra1</div>
              {/* barra */}
              <div>barra2</div>
            </motion.div>

            {/* logo */}
            <div>
              <a href='#'>
                {/* se o header esta ativo, logo 90 x 90 px, caso contrario, 107 x 107 px */}
                <img className={`${isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`} src={LogoWhite} alt=''/>
              </a>
            </div>

            {/* icones  */}
            <div>
              <Socials/>
            </div>

            {/* nav  */}
            <motion.div 
              variants={navVariants} 
              initial='hidden' 
              animate={nav ? 'show' : ''} 
              className='absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
              <Nav/>
            </motion.div>
          </div>
        </div>
    </motion.header>
  )
};

export default Header;
