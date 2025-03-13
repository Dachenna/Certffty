import { IoMdMenu } from 'react-icons/io'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id:2,
    title: "Services",
    path: "/skills",
  },
  {
    id:3,
    title: "About Us",
    path: "/about",
  },
  {
    id:4,
    title: "Our Team",
    path: "/team",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
  },
];

function Navbar() {
  return (
    <nav className='relative z-20'>
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-10 flex justify-between items-center">
        {/**Logo Section */}
        <div>
          <h1 className='font-bold text-2xl'>Certffty</h1>
        </div>
        {/**Menu section */}
        <div className="hidden lg:block">
          <ul className='flex items-center gap-3'>
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className='inline-block py-2 px-3 hover:text-secondary relative group'
                  activeclassName='text-secondary'
                  >
                    <div className='w-2 h-2 bg-secondary
                     absolute mr-2 rounded-xl left-1/2 
                     -translate-x-1/2 top-1 bottom-0 group-hover:block hidden'></div>
                     {menu.title}
                  </NavLink>
              </li>
            ))}
            <div className="primary-btn cursor-pointer">
              <Link
                to='/auth'>
              Sign in
              </Link>
            </div>
          </ul>
        </div>
        {/**Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
      {/*Darkmode */}
    </nav>
  )
}

export default Navbar
