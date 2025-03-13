import { FaBookAtlas } from "react-icons/fa6";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { SiBlockchaindotcom } from "react-icons/si";
import { motion } from 'framer-motion';

const ServicesData = [
  {
    id: 1,
    title: "Course Certification",
    link: "#",
    icon: <FaBookAtlas className='font-bold' />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Institution Registering",
    link: "#",
    icons: <FaSchoolCircleCheck  className='font-bold'/>,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Agent Registering",
    link: "#",
    icon: <HiAcademicCap/>,
    delay:0.4,
  },
  {
    id: 4,
    title: "Support",
    link: "#",
    icon: <MdSupportAgent />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Blockchain Networking",
    link: "#",
    icon: <SiBlockchaindotcom />,
    delay: 0.6,
  },
]

const SlideLeft = (delay) => {
  return{
    initial:{
      opacity: 0,
      x: 50
    },
    animate:{
      opacity:1,
      x:0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      }
    }
  }
}
const Services = () => {
  return (
    <section className='bg-white'>
        <div className='container pg-14 pt-16'>
            <h1 className='text-4xl font-bold text-left pb-10'>
             Services we provide
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3
            md:grid--6 gap-8'>
              {
                ServicesData.map((data) =>(
                  <motion.div 
                  variants={SlideLeft(data.delay)}
                  initial= "initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  key={data.id} className='bg-[#f4f4f4] rounded-2xl flex
                  flex-col gap-4 items-center justify-center p-4
                  py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                    <div className='text-4xl mb-4'>{data.icon}</div>
                    <h1 className='text-lg font-semibold
                    text-center px-3'>{data.title}</h1>
                  </motion.div>
                ))
              }
            </div>
        </div>
    </section>
  );
};

export default Services;
