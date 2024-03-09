import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import InstructorStudentData from "./InstructorStudentData";

const DashBoard = () => {
  return (
    <div className="flex flex-col items-center sm:px-10 md:px-15 lg:px-40 w-full lg:w-screen h-screen overflow-x-hidden">
      <div className="flex justify-center text-center">
        <h1 className="py-6 text-xl md:text-2xl lg:text-3xl font-bold">
          Instructor Dashboard
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full lg:flex-row gap-10 items-center">
        <div className="flex flex-col text-center w-full md:w-1/2 lg:w-8/12">
          <LineChart />
          <h1 className="py-4 font-bold text-2xl">Sales Data</h1>
        </div>
        <div className="flex justify-center flex-col items-center w-full md:w-1/2 lg:w-8/12">
          <PieChart />
          <h1 className="py-4 font-bold text-2xl">Users Data</h1>
        </div>
      </div>
      <InstructorStudentData />
    </div>
  );
};

export default DashBoard;
