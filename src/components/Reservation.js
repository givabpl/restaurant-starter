import React, { useState } from 'react';
// dados
import { reservationData } from '../data';
// datepicker
import DatePicker from 'react-datepicker';
// datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// timepicker
import TimePicker from 'react-time-picker';
// timepicker css
import '../timepicker.css';
// icones
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn, staggerContainer } from '../variants';

const Reservation = () => {
  // dados 
  const { title, subtitle, modelImg, btnText } = reservationData;
  // data
  const [startDate, setStartDate] = useState(new Date());
  // relogio
  const [value, setValue] = useState('10:00');

  return (
    <section className='relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        {/* texto */}
        <motion.div 
          variants={staggerContainer}
          initial='hidden'
          whileInView={"show"}
          className='text-center'
        >
          {/* titulo */}
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* subtitulo */}
          <motion.p 
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'>
            {subtitle}
          </motion.p>
          {/* modelo */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt=''/>
          </motion.div>
        </motion.div>
        {/* formulario */}
        <motion.form
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={"show"}
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Escolher Data</div>
              </div>
              <DatePicker 
                className='input'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Escolher Horário</div>
              </div>
              <TimePicker 
                className='input' 
                clearIcon={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>

            {/* numero de pessoas */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                  <FaUsers />
                  <div>Número de pessoas</div>
              </div>
              <input className='input' type='text' placeholder='1'/>
            </div>
          </div>
          {/* botão */}
          <div className='max-w-[316px] mx-auto flex justify-center'>
            <button className='btn capitalize w-full lg:w-auto'>{btnText}</button>
          </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Reservation;
