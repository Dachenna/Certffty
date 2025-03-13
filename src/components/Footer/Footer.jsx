import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';

const navigate = () =>{
    useNavigate()
}
function Footer() {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container">
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-4">
                {/**First Section */}
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-2xl font-bold'>Certffty</h1>
                    <p className='text-dark2 justify-center items-center'>
                     Certffty is a platform that leverages blockchain technology to issue and verify certificates securely and transparently.
                     Whether you're an institution issuing credentials or an individual looking to validate achievements, 
                     we ensure authenticity, trust, and tamper-proof verification.
                     Join us in revolutionizing digital certification
                    </p>
                </div>
                {/**Second Section */}
                <div className="grid grid-cols-2 gap-10">
                    <div className='space-y-4'>
                        <h1 className="text-2xl font-bold">Services</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Course Certification</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Institution Registeration</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Agent Registeration</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Support</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Blockchain Networking</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                <div className='space-y-4'>
                        <h1 className="text-2xl font-bold">Links</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Home</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Services</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>About Us</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Our Team</li>
                                <li className='cursor-pointer
                                 hover:text-secondary duration-200'>Contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/**Third Section */}
                <div className='space-y-4 max-w-[300px]'>
                 <h1 className='text-2xl font-bold'>
                    Get in Touch   
                 </h1>
                 <div className='flex items-center'>
                    <input 
                    type="email"
                    placeholder='Enter your email'
                    className='p-3 rounded-s-xl bg-white w-full
                    py-4 focus:ring-0 focus:outline-none
                    placeholder:text-dark2'/>
                    <button className='bg-primary text-white
                    font-semibold py-4 px-6 rounded-e-xl'
                    onClick={navigate("/auth")}>
                     Go
                    </button>
                 </div>
                 {/**social icons */}
                    <div className='flex space-x-3 px-2'>
                        <a href="wa.me/+2349023561634">
                          <FaWhatsapp className='cursor-pointer
                           hover:text-primary hover:scale-105 duration-200'/>  
                        </a>
                        <a href="#">
                            <FaInstagram className='cursor-pointer
                            hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='cursor-pointer
                            hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaYoutube className='cursor-pointer
                            hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <Link to="/">
                            <FaLinkedin className='cursor-pointer
                            hover:text-primary hover:scale-105 duration-200'/>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  );
};

export default Footer;
