import React from 'react';
// componentes
import TestimonialCarousel from '../components/TestimonialCarousel';
// dados
import { testimonialData } from '../data';
// motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants';


const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section className='bg-testimonial bg-cover bg-no-repeat relative top-[340px] lg:top-[390px] z-10 h-[800px] pt-[60px] md:pt-[120px]'>
      <div className='container mx-auto'>

        {/* texto */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.2, 1.6)} 
          initial="hidden"
          whileInView={'show'}
          className='text-center capitalize flex flex-col items-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <p className='text-white/70 capitalize mb-8'>{subtitle}</p>
          <div className='mb-12'>
            <img src={modelImg} alt=''/>
          </div>
        </motion.div>

        {/* slider */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.4, 1.6)} 
          initial="hidden"
          whileInView={'show'}
          className='flex justify-center items-center'>
          <TestimonialCarousel slider={slider}/>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
