import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../slices/authSlice'
import { useDispatch } from 'react-redux'
import Navbar from '../common/Navbar/Navbar'
import HeroSection from '../sections/Home/HeroSection'
import DataSection from '../sections/Home/DataSection'
import CardSection from '../sections/Home/CardSection'
import About from './About'
import CourseHomeSection from '../sections/Home/CourseHomeSection'
import BecomeInstructor from '../sections/Home/BecomeInstrutor'
import Footer from '../common/Footer/Footer'


const Homepage = () => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='overflow-hidden'>
    <Navbar scrollToAbout={scrollToAbout} />
    <HeroSection />
    <DataSection />
    <CardSection />
    <About reference={aboutRef}/>
    <CourseHomeSection />
    <BecomeInstructor />
    <Footer />
    </div>
  )
}

export default Homepage
