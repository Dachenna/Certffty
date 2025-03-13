// Desc: DarkMode component
import React from 'react';
import LightButton from '../assets/website/lightbutton.jpg';
import DarkButton from  '../assets/website/Darkmode.jpg';

const DarkMode = () => {
  const [ theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme"): "light"
  )

  const element = document.documentElement;

  React.useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else{
      setTheme("light");
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme]); // Correct usage

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    newTheme === "dark" ? element.classList.add("dark") : element.classList.remove("dark");
  };
  
  return (
    <div className='relative'>
      <img
      src={LightButton}
      alt='lightmode'
      className={`w-15  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 absolute right-0 z-10  bg-transparent ${theme === "dark"? "opacity-0" : "opacity-100"} rounded-full`}
      onClick={toggleTheme}
      />
      <img src={DarkButton} 
      alt=''
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)
      transition-all duration-300] rounded-full '
      onClick={toggleTheme}
      />
    </div>
  );
};
export default DarkMode;
