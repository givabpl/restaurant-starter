import React from 'react';
// dados
import { socialData } from '../data';

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]' >
      {socialData.map((item, index) => {
        return( 
          <a 
            className='border rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all' 
            href={item.href} 
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
