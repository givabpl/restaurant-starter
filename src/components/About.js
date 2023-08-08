import React from 'react';
// dados
import { aboutData } from '../data';
// motion
import { motion } from 'framer-motion'
// variantes
import { plateVariants, staggerContainer, fadeIn } from '../variants';

const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className='min-h-[620px]'>
      <div className='container mx-auto min-h-[620px]'>
        {/* wrapper do texto e imagem */}
        <div className='min-h-[620px] flex flex-col lg:flex-row items-center'>
          {/* texto */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            <button className='btn capitalize mx-auto lg:mx-0'>{btnText}</button>
          </div>
          {/* imagem */}
          <div className='-mb-[300px] -mr-[186px] z-10'>
            <img src={image} alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
