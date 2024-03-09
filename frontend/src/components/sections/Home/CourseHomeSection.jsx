import React, { useEffect, useState } from "react";
import webDevPicture from "../../../assets/WebDevelopment.jpeg";
import dsaPicture from "../../../assets/DSA.png";
import digitalPicture from "../../../assets/DigitalMarketing.jpeg";
import { FaStar } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { PiPlayCircleLight } from "react-icons/pi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const CourseHomeSection = ({reference}) => {
  const [category, setCategory] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const isVisible = scroll > 1250;
      setIsVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      id: 1,
      title: "Web Development",
      image: webDevPicture,
      rating: 4.6,
      description:
        "Become a good web programmer and learn web development skills.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 2,
      title: "Digital Marketing",
      image: digitalPicture,
      rating: 4.2,
      description:
        "Become a good Digital Marketer and learn digital marketing skills.",
      duration: "6-10hrs",
      video: "32",
      students: "930",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      image: dsaPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
  ];

  const fadeInVariants = {
    initial: {
      opacity: 0, 
      y: -350,
    },
    animate: {
      opacity: 1, 
      y: 0,
    },
  }

  return (
    <>
      <div ref={reference} className="mt-16">
        <div className="flex gap-5 mx-auto px-10 flex-row md:px-20 lg:px-40 justify-between">
          <h1 className="font-bold text-2xl">Courses</h1>
          <div className="flex gap-12 flex-wrap items-center">
            <select
              className="py-2 px-4 rounded-lg"
              id="course"
              defaultValue={category}
              onChange={handleChange}
            >
              <option value="Select">
                Select Category
              </option>

              <option value="Web Development">Web Development</option>
              <option value="Data Structures">Data Structures</option>
            </select>
            <button className="py-2 px-4 bg-dark-yellow rounded-lg">
              Search
            </button>
          </div>
        </div>
        <div className="mt-5 h-0.5 w-full md:w-[80%] mx-auto bg-[#98958E]"></div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-30 lg:px-40">
          {data.map((item, index) => {
            return (
              <Link to={`/courses/${item.id}`}>
              <motion.div
                variants={fadeInVariants}
                initial={"initial"}
                animate={isVisible ? "animate" : "initial"}
                transition={{ duration: 1, delay: 0.25 * index }}
                className="rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300"
                whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
                key={item.id}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    width={screenWidth > 1030 ? 550 : "100%"}
                    height={screenHeight > 1000 ? 550 : "100%"}
                    alt="course"
                  />
                  <div className="flex justify-center items-center gap-2 absolute bottom-[-13px] right-5 px-5 rounded-xl py-1 text-[white] font-bold bg-deep-blue bg-opacity-80">
                    <span>
                      <FaStar color="#FFDB58" />
                    </span>
                    {item.rating}
                  </div>
                </div>
                <div className="mx-auto px-5">
                  <h2 className="font-serif flex justify-center text-xl font-bold my-4">
                    {item.title}
                  </h2>
                  <p className="flex justify-center font-serif font-medium text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-around py-7">
                  <p className="flex justify-center items-center gap-3"><LuClock size={15}/><span>{item.duration}</span></p>
                  <p className="flex justify-center items-center gap-3"><PiPlayCircleLight size={20}/><span>{item.video}</span></p>
                  <p className="flex justify-center items-center gap-3"><MdOutlineSupervisorAccount size={20}/><span>{item.students}</span></p>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseHomeSection;
