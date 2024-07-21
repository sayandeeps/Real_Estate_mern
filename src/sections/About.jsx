import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({
    offset: 200,
    duration : 800,
    easing: 'ease-in-sine',
    delay: 100,
  })
},[])

const { darkMode, toggleDarkMode } = useDarkMode();

  return (
  <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}
   w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
   <div>
    <img data-aos="zoom-in" src={aboutimg} alt="about image" 
    className ='rounded-2xl lg:w-[500px] lg:h-[600px]'/>
   </div>
   <div className='flex flex-col justify-center items-start gap-8'>
    <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>WHO WE ARE</h1>
    <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] 
    font-semibold leading-10 dark:text-white'>We help clients buy and sell houses since 1989</h1>
    <p data-aos="zoom-in" data-aos-delay="200" className='text-xl text-gray-600 dark:text-white text-justify'>With over three decades of experience, we pride ourselves on our deep understanding 
    of the real estate market and our commitment to delivering exceptional service. Our team of dedicated professionals works tirelessly to ensure that every client finds their dream home or successfully sells their property. Whether you're a first-time homebuyer or an experienced investor, we provide personalized support and expert guidance throughout the entire process. Trust us to make your real estate journey smooth and successful.</p>
    <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
         dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer
        transform hover:scale-110 transition-transform duration-300'>READ MORE</button>
   </div>
    </section>
  )
}

export default About;

