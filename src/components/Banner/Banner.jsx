import { FadeUp } from '../Hero/Hero';
import { motion } from 'framer-motion';
import GirlTyping from "../../assets/hero/GirlTyping.jpeg";
import { FaBookAtlas } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";

function Banner() {
  return (
   <section>
    <div className='container py-14 md:py-24 grid
    grid-cols-1 md:grid-cols-2 gap-8 space-y-6
    md:space-y-0'>
        {/**Banner Image */}
        <div className='flex justify-center items-center'>
            <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut"}}
             src={GirlTyping}
             alt="" 
             className='w-[350px] md:max-w-[450px]
             object-cover rounded-md drop-shadow'
            />
        </div>
        {/**Banner Text */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-12'>
            <motion.h1 
            initial= {{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true}}
            transition={{duration: 0.5 }}
            className="text-3xl md:tect-4xl font-bold !leading-snug">
              The World Leading Online Certificate Platform Powered by Blockchain Technology
            </motion.h1>
            <div className='flex flex-col gap-6'>
              <motion.div 
              variants={FadeUp(0.2)}
              initial= "initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className='flex items-center gap-4 p-6
              bg-[#f4f4f4] rounded-2xl hover:bg-white
              duration-300 hover:shadow-2xl'>
                <FaBookAtlas className='text-2xl' />
                <p className='text-lg'>500+ Certificates</p>
              </motion.div>
              <motion.div 
              variants={FadeUp(0.4)}
              initial= "initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className='flex items-center gap-4 p-6
              bg-[#f4f4f4] rounded-2xl hover:bg-white
              duration-300 hover:shadow-2xl'>
                <SiBlockchaindotcom className='text-2xl' />
                <p className='text-lg'>BlockChain Verification</p>
              </motion.div>
              <motion.div 
              variants={FadeUp(0.6)}
              initial= "initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className='flex items-center gap-4 p-6
              bg-[#f4f4f4] rounded-2xl hover:bg-white
              duration-300 hover:shadow-2xl'>
                <MdVerifiedUser className='text-2xl' />
                <p className='text-lg'>Institution Trusted</p>
              </motion.div>
            </div>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Banner;
