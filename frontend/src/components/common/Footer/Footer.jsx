import React from "react";

const Footer = () => {
  return (
    <div className="py-16 h-max relative bg-dark-yellow flex justify-between items-center flex-col md:flex-row lg:flex-row px-10 md:px-30 lg:px-40">
      <div className="text-center py-8 md:text-start lg:text-start w-[40%] flex flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">[EDUFREE]</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
            exercitationem ullam voluptatibus!
          </p>
        </div>
        {/* <div className="px-6 py-1 flex gap-4 flex-col md:flex-row lg:flex-row absolute items-center left-0 right-0 bottom-0 justify-evenly bg-deep-blue text-[white]">
          <div>
            <h1>Email</h1>
            <p>contact@gmail.com</p>
          </div>
          <div>
            <h1>Telephone</h1>
            <p>+91 899999999</p>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 text-center md:text-start lg:text-start md:grid-cols-3 lg:grid-cols-3 gap-7">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Social Media</h1>
          <a href="/" className="cursor-pointer">Instagram</a>
          <a href="/" className="cursor-pointer">LinkedIn</a>
          <a href="/" className="cursor-pointer">Twitter</a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Program</h1>
          <a href="/" className="cursor-pointer">Entrepreneurship</a>
          <a href="/" className="cursor-pointer">Digital Marketing</a>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">Courses</h1>
          <a href="/" className="cursor-pointer">Java</a>
          <a href="/" className="cursor-pointer">Data Structures</a>
          <a href="/" className="cursor-pointer">C++</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
