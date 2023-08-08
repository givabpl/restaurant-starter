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
    <section className='min-h-[560px]'>
      <div className='container mx-auto min-h-[560px]'>
        {/* wrapper do texto e imagem */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
          className='min-h-[560px] flex flex-col lg:flex-row items-center'>
          {/* texto */}
          <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            <button className='btn capitalize mx-auto lg:mx-0'>{btnText}</button>
          </motion.div>
          {/* imagem */}
          <motion.div 
          variants={plateVariants}
            className='-mb-[300px] z-10'>
            <img className='' src={image} alt=''/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
