import React, { forwardRef, useEffect, useState } from 'react';
import instructor from  '../../assets/instructor.jpeg'
import { motion } from 'framer-motion'
const About = forwardRef((props,ref) => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(width);
  const [screenHeight, setScreenHeight] = useState(height);
  const [isVisible,setIsVisible] = useState(false)

  useEffect((props)=>{
    const handleScroll = () =>{
      const scroll = window.scrollY;
      const isVisible = scroll > 800 
      setIsVisible(isVisible)
    }
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[screenWidth]);

  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  return (
      <div ref={props.reference} className="container mx-auto mt-20 flex flex-col lg:flex-row justify-between px-10">
      <motion.div initial={{opacity: 0,scale: 0.5, x: -300}} animate={isVisible ? {opacity: 1,scale: 1,x: 0} : {}}
       transition={{duration: 0.8}}
       className='w-[100%] lg:w-[40%]'>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">EDUFREE is a platform dedicated to providing free e-learning resources to help individuals grow their skills and knowledge in various fields. We believe in making education accessible to everyone, regardless of their background or financial status.</p>
      <p className="text-lg mb-4">Our mission is to empower learners worldwide by offering high-quality courses, tutorials, and learning materials across a wide range of subjects, from programming and technology to arts and humanities.</p>
      <p className="text-lg mb-4">Join us on our journey to make learning enjoyable, accessible, and inclusive for all!</p>
      </motion.div>
      <motion.div initial={{opacity: 0, scale: 0.5,x: 300}} animate={isVisible ? {x:0,scale:1,opacity:1} : {}} transition={{duration: 0.8}}>
        <img src={instructor} alt='' width={screenWidth > 1030 ? 550 : "100%"} height={screenHeight > 1000 ? 550 : "100%"} />
      </motion.div>
    </div>
  );
});

export default About;
