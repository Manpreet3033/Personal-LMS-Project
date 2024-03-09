import React, { useEffect, useState } from "react";
import  { motion } from 'framer-motion'

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 100
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cardSectionData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
    {
      id: 2,
      title: "Data Science",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
    {
      id: 6,
      title: "Photography",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo similique autem qui, molestiae delectus aliquam nobis vitae molestias veniam tempore obcaecati magnam nesciunt aspernatur cum animi. Praesentium ab sint quas?",
    },
  ];
  return (
    <div className="container mx-auto mt-10 translate-x-2 px-10">
      <h1 className="text-center text-4xl font-bold mb-8">Welcome to E-Learning EDUFREE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardSectionData.map((item,index) => (
          <motion.div
            whileHover={{scale: 1.15, transition: {duration: 0.1}}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.20 * index }}
            className="bg-light-blue-200 shadow-sm hover:shadow-2xl hover:transition-all hover:ease-in hover:duration-300 rounded-md p-10"
            key={item.id}
          >
            <div className="flex justify-center relative items-center w-10 h-10 rounded-lg text-[white] bg-deep-blue">
                <h1 className="font-bold">
                {item.id}
                </h1>
            <div className="w-2 h-5 rounded-lg bg-light-yellow absolute left-0 bottom-0" />
            </div>
            <h2 className="text-xl font-semibold my-4">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
