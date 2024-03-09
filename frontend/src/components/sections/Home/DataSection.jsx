import React, { useEffect, useState } from 'react'
import { IoMdCube } from "react-icons/io";
import { FaToolbox, FaBolt } from "react-icons/fa";
import { AiFillApi, AiFillSlackCircle } from "react-icons/ai";
import './DataSection.css'
import { motion } from 'framer-motion';

const DataSection = () => {

    const [isVisible,setIsVisible] = useState(true)
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = () =>{
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[])
    useEffect(()=>{
        const handleScroll = () =>{
            const scroll = window.scrollY
            const isVisible = screenWidth > 900 ? scroll < 600 : scroll < 1050
            setIsVisible(isVisible)
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[screenWidth])

    const data = [
        {
            number: "21,000+",
            name: "Students",
        },
        {
            number: "100+",
            name: "Instructors",
        },
        {
            number: "150+",
            name: "Courses",
        }
    ]

    const data2 = [
        {
            name: "LOREM",
            icon: <FaToolbox size={20}/>,
        },
        {
            name: "DITLANCE",
            icon: <AiFillApi size={20}/>,
        },
        {
            name: "OWTHEST",
            icon: <IoMdCube size={20}/>,
        },
        {
            name: "NEOVASI",
            icon: <AiFillSlackCircle size={20}/>,
        },
        {
            name: "ONAGO",
            icon: <FaBolt size={20}/>,
        }
    ]

    return (
        <div className='bg-light-blue w-screen py-10 h-max flex flex-col lg:flex-row justify-evenly items-center mx-auto'>
            <motion.div initial={{opacity: 0,scale: 0.5,x:-300}} animate={isVisible ? {opacity: 1,scale: 1,x: 0} : {}} transition={{duration: 0.8}} className='lg:flex'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col items-center justify-between p-4 lg:mr-8'>
                        <div className='data flex flex-col items-center justify-between'>
                            <h1 className='font-bold text-3xl'>{item.number}</h1>
                            <h4 className='font-medium'>{item.name}</h4>
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div initial={{opacity: 0,scale: 0.5,x:300}} animate={isVisible ? {opacity: 1,scale: 1,x: 0} : {}} transition={{duration: 0.8}} className='flex lg:flex-row flex-col lg:ml-6'>
                {data2.map((item, index) => (
                    <div key={index} className='flex items-center justify-center gap-3 mb-5 mx-auto'>
                        {item.icon}
                        <h3 className='font-bold text-xl'>{item.name}</h3>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default DataSection
