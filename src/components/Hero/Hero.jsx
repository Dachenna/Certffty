import { IoIosArrowRoundForward } from 'react-icons/io'
import Herojpg from "../../assets/hero/hero.jpeg";
import Blob from "../../assets/hero/blob1.svg";
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Subscribe from '../Subscribe/Subscribe';
import { useNavigate } from 'react-router-dom';

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

function Hero() {

  const navigate = useNavigate();
  return (
    <section className='overflow-x-hidden bg-light '>
      <div className='container grid grid-cols-1
      md:grid-cols-2 min-h-[650px]'>
        {/**Brand Info */}
        <div className='flex flex-col justify-center
        py-14 md:py-0 relative z-20'>
          <div className='text-center md:text-left 
          space-y-10 lg:max-w-[400px]'>
            <motion.h1 
            variants={FadeUp(0.6)}
            initial= "initial"
            animate="animate"
            className='text-3xl lg:text-5xl font-bold
            !leading-snug'>Find your <span
            className='text-secondary'>Certificate</span> for your department
            </motion.h1>
            <motion.div 
            variants={FadeUp(0.8)}
            initial="initial"
            animate= "animate"
            className='flex justify-center
            md:justify-start'>
              <button 
              className='primary-btn flex
              items-center gap-2 group duration-200'
              onClick={() => navigate('/sign')}>
                Get Started
                <IoIosArrowRoundForward className='text-xl
                font-bold
                group-hover:translate-x-2
                group-hover:rotate-90 duration-300' />
              </button>
            </motion.div>
          </div>
        </div>
        {/*Hero Image*/}
        <div className='flex justify-center items-center'>
          <motion.img 
          initial={{ x:50, opacity:0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay:0.4, ease:
            "easeInOut" }}
          src={Herojpg} 
          alt="" 
          className='w-[400px]
          xl:w-[600px] relative z-10 drop-shadow rounded-sm'
         />
         <motion.img 
         initial={{ x: -50, opacity:0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.6, delay:0.2, ease:
           "easeInOut" }}
         src={Blob} 
         alt=""
         className='absolute -bottom-32 w-[800px] md:w-[1500px]
         z-[1] hidden md:block left-0' />
        </div>
      </div>
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
    </section>
  )
};

export default Hero;
