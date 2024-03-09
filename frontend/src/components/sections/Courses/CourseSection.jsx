import React, { useEffect, useState } from "react";
import webDevPicture from "../../../assets/WebDevelopment.jpeg";
import digitalPicture from "../../../assets/DigitalMarketing.jpeg";
import dsaPicture from "../../../assets/DSA.png";
import { FaStar } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { PiPlayCircleLight } from "react-icons/pi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseSection = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);
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
  const categories = [
    {
      id: 1,
      name: "All Courses",
    },
    {
      id: 2,
      name: "Data Structures",
    },
    {
      id: 3,
      name: "Web Dev",
    },
    {
      id: 4,
      name: "Python",
    },
    {
      id: 5,
      name: "Java",
    },
    {
      id: 6,
      name: "ExpressJS",
    },
  ];

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
    {
      id: 4,
      title: "Data Structures and Algorithms",
      image: webDevPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 5,
      title: "Data Structures and Algorithms",
      image: digitalPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 6,
      title: "Data Structures and Algorithms",
      image: dsaPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 7,
      title: "Data Structures and Algorithms",
      image: webDevPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 8,
      title: "Data Structures and Algorithms",
      image: digitalPicture,
      rating: 4.4,
      description:
        "Become a good DSA problem solver and learn Advanced Data Structures.",
      duration: "4-5hrs",
      video: "32",
      students: "1932",
    },
    {
      id: 9,
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

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id === activeCategoryId ? null : id);
  };

  const handlePageClick = (index) => {
    paginate(index + 1);
    setActivePage(index);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="py-16 flex">
        <input
          className="bg-white outline py-3 rounded-md px-5 mx-auto w-[40%]"
          placeholder="Search Courses"
          type="text"
        />
      </div>
      <div className="flex gap-5 justify-center items-center font-bold flex-col md:flex-row lg:flex-row">
        {categories.map((item, idx) => {
          return (
            <div key={idx}>
              <div
                className={activeCategoryId === item.id ? "text-[#0606d7]" : ""}
                onClick={() => handleCategoryClick(item.id)}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="pb-8">
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-30 lg:px-40">
            {currentCourses.map((item, index) => {
              return (
                <Link to={`/courses/${item.id}`} key={index}>
                  <div
                    className="rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300"
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
                      <p className="flex justify-center items-center gap-3">
                        <LuClock size={15} />
                        <span>{item.duration}</span>
                      </p>
                      <p className="flex justify-center items-center gap-3">
                        <PiPlayCircleLight size={20} />
                        <span>{item.video}</span>
                      </p>
                      <p className="flex justify-center items-center gap-3">
                        <MdOutlineSupervisorAccount size={20} />
                        <span>{item.students}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex pb-16 justify-center mt-10">
        {data.length > coursesPerPage &&
          Array.from({ length: Math.ceil(data.length / coursesPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={
                  activePage === index
                    ? " bg-dark-yellow font-bold text-white mx-1 px-3 py-1 rounded-lg border border-gray-300 focus:outline-none"
                    : "font-bold mx-1 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-200 hover:ease-in-out hover:duration-500 focus:outline-none"
                }
              >
                {index + 1}
              </button>
            )
          )}
      </div>
    </>
  );
};

export default CourseSection;
