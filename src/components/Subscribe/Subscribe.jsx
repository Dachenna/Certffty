import { FaBell } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LovelyGirl from "../../assets/hero/LovelyGirl.jpeg"
import { useNavigate } from 'react-router-dom';

const bgStyle= {
    backgroundImage: `url(${LovelyGirl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
};


function Subscribe() {
  const navigate = useNavigate();

  return (
    <section className='bg-[#f7f7f7]'>
      <motion.div 
       initial={{ opacity: 0}}
       whileInView={{ opacity: 1}}
      style={bgStyle} 
      className="container py-24 md:py-48 
      drop-shadow rounded-md">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-cols justify-center bg-[#f7f7f7]/30 
        rounded-lg py-10">
          <div className=' text-center space-y-4 lg:max-w-[430px] mx-auto'>
            <h1 className='text-4xl font-bold !leading-snug'>
              500+ Certificates are issued and verified through us
            </h1>
            <p className='text-xl text-dark font-semibold'>
            Ensure the authenticity of certifications with our blockchain-powered verification system. 
            Secure, transparent, and tamper-proof, our platform guarantees trust in every credential issued.
            </p>
            <button onClick={() =>{navigate('/sign')}}
            className='primary-btn !mt-8 inline-flex 
            items-center gap-4 group:'>
              Subscribe Now
              <FaBell
              className=' group-hover:animate-bounce
              group-hover:text-lg duration-200' />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Subscribe
  