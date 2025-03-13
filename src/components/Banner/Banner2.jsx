import { motion } from 'framer-motion';
import Student from "../../assets/hero/Student.jpeg";
import { Link } from 'react-router-dom';

function Banner2() {
  return (
   <section>
    <div className='container py-14 md:py-24 grid
    grid-cols-1 md:grid-cols-2 gap-8 space-y-6
    md:space-y-0'>
      {/**Banner Text */}
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className='flex flex-col justify-center'>
        <div className='text-center md:text-left
        sapce-y-y4 lg:mac-w-[450px]'>
          <h1 className='text-4xl font-bold !leading-snug'>
             Join Our Community to Start your Journey
           </h1>
            <p className='text-dark2'>
            Become part of a trusted network that values authenticity and security. 
            Join us today to access verified credentials, 
            connect with like-minded professionals, 
            and ensure your achievements are recognized worldwide!
           </p>
          <Link to="/auth"
            className='primary-btn !mt-8'
         >
            Join Now
          </Link>
        </div>
          
          </motion.div>
        {/**Banner Image */}
        <div className='flex justify-center items-center'>
            <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
             src={Student}
             alt="" 
             className='w-[350px] md:max-w-[450px]
             object-cover rounded-md drop-shadow'
            />
        </div>
        
    </div>
   </section>
  )
}

export default Banner2;
