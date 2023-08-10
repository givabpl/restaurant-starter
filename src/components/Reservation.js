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
    <section className='bg-pink-300 relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        {/* texto */}
        <div>texto</div>
        {/* formulario */}
        <form className='bg-pink-300'>
          {/* datepicker */}
          <div>
            <div>
              <FaCalendar/>
              <div>Escolher Data</div>
            </div>
            <DatePicker 
              className='input'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          {/* timepicker */}
          <div>timepicker</div>
          {/* numero de pessoas */}
          <div>numero de pessoas</div>
        </form>

      </div>
    </section>
  );
};

export default Reservation;
