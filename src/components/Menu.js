import React from 'react';
// dados
import { menuData } from '../data';
// motion
import { motion } from 'framer-motion';
// variantes
import { fadeIn, staggerContainer } from '../variants';

const Menu = () => {
  //dados do menu
  const {title, subtitle, modelImg, menuItems, btnText}  = menuData;
  return (
    <section className='min-h-[780px]'>
      {/* background */}
      <div className='h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      {/* texto */}
      <div className='relative z-10 top-72 lg:top-52'>
        <div className='container mx-auto flex flex-col items-center text-center'>
          <h2 className='h2 capitalize text-white max-w-[400px] text-center'>{title}</h2>
          <p className='text-white/70 cvapitalize mb-8'>{subtitle}</p>
          <div>
            <img src={modelImg} alt=''/>
          </div>
        </div>
      </div>
      {/* menu galeria */}
      <div className='relative top-80 lg:top-96'>
        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className='flex flex-row lg:flex-col h-full '>
                      {/* imagem */}
                      {/* ordem reversa para a primeira e última imagem */}
                      <div className={`w-[45%] md:w-auto ${index === 1 || index === 3 ? 'lg:order-1' : 'order-none'} `}>
                        <img src={image} alt=''/>
                      </div>
                      {/* texto */}
                      <div className='bg-[#fce8d1] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div>
                          <div>{name}</div>
                          <div>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
