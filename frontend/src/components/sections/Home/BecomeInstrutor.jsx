import React, { useEffect, useState } from "react";
import instructorImage from "../../../assets/instructor.jpeg";
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast"
import { motion } from 'framer-motion'
const BecomeInstructor = () => {
  const [isVisible,setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    toast.success("Navigating to Sign up Page")
    navigate("/signup")
  }

  useEffect(()=>{
    const handleScroll = () => {
      const scroll = window.scrollY;
      const isVisible = scroll > 1900;
      setIsVisible(isVisible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  return (
    <div className="mt-28  mx-auto bg-deep-blue">
      <div className="h-auto py-24 flex justify-center items-center flex-col lg:flex-row lg:px-32 gap-16">
      <motion.div initial={{opacity: 0, x: -300}} animate={isVisible ? {opacity: 1, x: 0} : {}} transition={{duration: 0.8}} className="px-10">
        <img src={instructorImage} height={1050} width={1050} alt="Instructor" />
      </motion.div>
      <motion.div initial={{opacity: 0,x: 300}}animate={isVisible ? {opacity: 1, x: 0} : {}} transition={{duration: 0.8}} className="flex justify-center items-center sm:text-center flex-col gap-10 px-10 text-[white]">
        <h1 className="font-extrabold text-2xl">Become an Instructor</h1>
        <p>
          Instructors from around the world teach millions of students on
          EduHub. We provide the tools and skills to teach what you love.
        </p>
        <div>
        <button className="flex gap-1 px-3 py-2 md:px-6 md:py-3 md:gap-3 justify-center items-center lg:gap-3 bg-dark-yellow text-[black] font-bold lg:px-6 lg:py-3 rounded-md" onClick={handleClick}>Start Teaching Today<span><FaArrowRight /></span></button>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
