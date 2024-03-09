import React, { useEffect, useState } from 'react'
import heroImage from '../../../assets/heroImage.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const [isVisible,setIsVisible] = useState(true)
  useEffect(()=>{
    const handleScroll = () =>{
      const scroll = window.scrollY
      const isVisible = scroll < 400
      setIsVisible(isVisible)
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

  const handleJoinClick = () => {
    toast.success('Navigating to Sign up Page');
    navigate('/signup');
  }

  const navigate = useNavigate()
  return (
    <div className='bg-deep-blue w-screen h-max flex flex-col lg:flex-row px-12 py-12 md:px-16 md:py-16 lg:px-24 lg:py-24 mx-auto gap-8'>
        <motion.div initial={{opacity: 0,scale: 0.5,x:-300}} animate={isVisible ? {opacity: 1,scale: 1,x: 0} : {}} transition={{duration: 0.8}}>
            <br /> 
        <h1 className='text-[white] font-bold text-3xl'>Unlocking Knowledge, Empowering Futures: EDUFREE EdTech - Learn Beyond Boundaries!</h1>
        <div className='text-[white] mt-12'>
            <p>EDUFREE Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste eius cumque? Sit libero, corrupti eveniet explicabo voluptate nam consequatur maiores assumenda maxime ab eum, vero accusantium atque inventore dolorem.</p>
        </div>
        <div className='mt-12 flex gap-10'>
            <button className='border text-[black] bg-dark-yellow font-semibold outline-none sm:py-1 sm:px-3 md:py-1 md:px-4 lg:py-2 lg:px-6 rounded-lg' onClick={handleJoinClick}>Join Now</button>
            <button className='flex flex-row items-center justify-center cursor-pointer text-[white] gap-1' onClick={()=>{navigate('/courses')}}>Explore Courses <IoIosArrowRoundForward size={25} /> </button>
        </div>
        </motion.div>
        <motion.div initial={{opacity: 0,scale: 0.5,x:300}} animate={isVisible ? {opacity: 1,scale: 1,x: 0} : {}} transition={{duration: 0.8}}>
        <img src={heroImage} alt="heroImage" width={750} height={750} className='rounded-lg'/>
        </motion.div>
    </div>
  )
}

export default HeroSection
