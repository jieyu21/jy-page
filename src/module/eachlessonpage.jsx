import React from "react";
import pfp from "../assets/pfp.jpg";
import doorbell from "../assets/doorbell.png";

import { useNavigate } from "react-router-dom";

const Lesson1 = () => {
  const navigate = useNavigate();
  const lessons = [
    {
      id: 1,
      title: "HCI",
      topic: "Topic 4: Machine Learning",
      time: "11 A.M - 12 P.M.",
      day: "31",
      description: "Flipped Classroom, Demonstration Videos, Case Study Analysis",
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-white border-b border-gray-200 px-6 py-4 w-full">
        <h1 className="text-2xl font-semibold text-[#151d48]">Module</h1>
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search modules, students..."
            className="w-[40%] py-2 px-4 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Profile Section */}
          <div className="relative flex items-center justify-between w-[111px] h-[53px]">
            {/* Black Background Circles */}
            <div className="absolute w-[53px] h-[53px] bg-[#120008] rounded-full" style={{ left: "0", top: "0" }}></div>
            <div className="absolute w-[53px] h-[53px] bg-[#120008] rounded-full" style={{ left: "58px", top: "0" }}></div>
            <div
              className="absolute h-[25px] bg-[#120008]"
              style={{
                width: "53px",
                left: "29px",
                top: "14px",
              }}
            ></div>
            <button
              onClick={() => alert("Doorbell clicked!")}
              className="absolute w-[30px] h-[31px] top-[11px] left-[70px] bg-transparent"
            >
              <img
                src={doorbell}
                alt="Doorbell Icon"
                className="w-full h-full"
              />
            </button>
            <button
              onClick={() => alert("Profile clicked!")}
              className="absolute w-[45px] h-[45px] top-[5px] left-[4px] rounded-full border border-gray-300 overflow-hidden"
            >
              <img
                src={pfp}
                alt="User Profile"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full h-full mt-1">
        {/* Main Content */}
        <div className="flex-1 bg-white p-4">
          <h2 className="text-2xl font-semibold text-[#151d48] mb-4">
            Human Computer Interaction
          </h2>

          {/* Lesson Cards */}
          <div className="relative w-full">
            {/* See All Button */}
            <div className="flex justify-end items-center mb-2">
              <button
                onClick={() => alert("See All Lessons clicked!")}
                className="text-sm text-[#0052b4] font-semibold"
              >
                See All
              </button>
            </div>

            {/* Scrollable Lesson Cards */}
            <div className="flex items-center">
              <div
                id="lessonScroll"
                className="flex overflow-x-auto gap-6 scrollbar-hide p-1"
              >
                {[1, 2, 3, 4, 5, 6].map((lesson) => (
                  <button
                    key={lesson}
                    onClick={() => navigate(`/lesson/${lesson}`)} // Navigate dynamically
                    className={`flex justify-center items-center p-2 rounded-lg shadow-lg ${
                      lesson === 1
                        ? "bg-[#102a57] opacity-100"
                        : "bg-[#f8f8f8] opacity-60"
                    }`}
                    style={{
                      minWidth: "140px",
                      height: "60px",
                    }}
                  >
                    <p
                      className={`text-lg font-semibold ${
                        lesson === 1 ? "text-white" : "text-[#151d48]"
                      }`}
                    >
                      {`Lesson ${lesson}`}
                    </p>
                  </button>
                ))}
              </div>

              {/* Arrow Button */}
              <button
                onClick={() => {
                  const container = document.getElementById("lessonScroll");
                  container.scrollLeft += container.offsetWidth / 2; // Scrolls to the next set of lessons
                }}
                className="ml-2 p-2 rounded-full shadow-lg bg-[#e5ecf6] hover:bg-[#e3f5ff] text-[#0052b4] font-bold"
              >
                &gt;
              </button>
            </div>
          </div>

      {/* Charts and Data */}
      <div className="grid grid-cols-12 gap-6">
      {/* Histogram */}
      <div className="col-span-7 bg-[#f7f9fb] p-6 rounded-2xl shadow-lg mt-4">
      <h3 className="text-sm font-semibold text-[#1c1c1c] mb-4">Histogram</h3>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <span>Chart Placeholder</span>
        </div>
      </div>

{/* Most Attentive, Least Attentive, and Average Student Attention */}
<div className="col-span-5 grid grid-rows-2 gap-6 mt-4">
  {/* Top Row: Most and Least Attentive */}
  <div className="grid grid-cols-2 gap-1">
    {/* Most Attentive Students */}
    <div
      className="rounded-2xl shadow-lg p-4"
      style={{
        backgroundImage: `url('/src/assets/bluebg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className="text-sm font-semibold text-[#1c1c1c] mb-3">
        Most Attentive Students
      </h3>
      <ol className="list-decimal ml-4 text-m text-[#444a6d]">
        <li>Cheah Pui Shyn</li>
        <li>See Kai Le</li>
        <li>Chan Jie Yu</li>
      </ol>
    </div>

    {/* Least Attentive Students */}
    <div
      className="rounded-2xl shadow-lg p-4"
      style={{
        backgroundImage: `url('/src/assets/redbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className="text-sm font-semibold text-[#1c1c1c] mb-3">
        Least Attentive Students
      </h3>
      <ol className="list-decimal ml-4 text-m text-[#444a6d]">
        <li>Wong Wei Sheng</li>
        <li>Tan Zi Xu</li>
        <li>Sean Tee</li>
      </ol>
    </div>
  </div>

  {/* Bottom Row: Average Student Attention */}
  <div className="bg-[#f7f9fb] p-6 rounded-2xl shadow-lg flex items-center gap-6">
    {/* Pie Chart */}
    <div className="w-[100px] h-[100px] relative">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        {/* Background Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="transparent"
          stroke="#e6e6e6"
          strokeWidth="2"
        />
        {/* Progress Circle */}
        <circle
          cx="18"
          cy="18"
          r="15.91549431"
          fill="transparent"
          stroke="#0052b4"
          strokeWidth="2"
          strokeDasharray="70 30"
          strokeDashoffset="25"
        />
      </svg>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center">
        <h4 className="text-[#95a4fc] text-xl font-bold">70%</h4>
      </div>
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center items-start gap-4">
      <h3 className="text-sm font-semibold text-[#1c1c1c]">
        Average Student Attention
      </h3>
      {/* Attentive Section */}
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0052b4] rounded-full"></div>
          <span className="text-xs text-[#1c1c1c]">Attentive</span>
        </div>
        <span className="text-xs text-[#1c1c1c]">70%</span>
      </div>
      {/* Non-Attentive Section */}
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <span className="text-xs text-[#1c1c1c]">Non-Attentive</span>
        </div>
        <span className="text-xs text-[#1c1c1c]">30%</span>
      </div>
    </div>
  </div>
</div>


{/* Student List */}
<div className="col-span-7 bg-[#f7f9fb] p-6 rounded-2xl shadow-lg">
  <h3 className="text-lg font-semibold text-[#151d48] mb-4">Student List</h3>
  <table className="w-full border-collapse">
    {/* Table Header */}
    <thead>
      <tr className="border-b border-gray-300">
        <th className="py-3 px-4 text-left text-sm font-medium text-[#96a5b8]">ID</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-[#96a5b8]">Name</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-[#96a5b8]">Attentive</th>
        <th className="py-3 px-4 text-left text-sm font-medium text-[#96a5b8]">Attention %</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody>
      {[
        { id: 1, name: "Cheah Pui Shyn", attentive: "HIGH", percentage: "95%" },
        { id: 2, name: "Wong Wei Sheng", attentive: "LOW", percentage: "28%" },
        { id: 3, name: "See Kai Le", attentive: "MEDIUM", percentage: "62%" },
        { id: 4, name: "Tan Zi Xu", attentive: "LOW", percentage: "15%" },
      ].map((student) => (
        <tr
          key={student.id}
          className="hover:bg-gray-100 border-b border-gray-200 last:border-none"
        >
          {/* Student ID */}
          <td className="py-3 px-4 text-sm font-medium text-[#96a5b8]">
            {student.id}
          </td>

          {/* Student Name */}
          <td className="py-3 px-4 text-sm font-semibold text-[#444a6d]">
            {student.name}
          </td>

          {/* Attentive */}
          <td className="py-3 px-4">
            <span
              className={`text-sm font-medium px-2 py-1 rounded-lg ${
                student.attentive === "HIGH"
                  ? "bg-[#e5f3ff] text-[#0052b4] border border-[#0052b4]"
                  : student.attentive === "MEDIUM"
                  ? "bg-[#dffef3] text-[#00e48f] border border-[#00e48f]"
                  : "bg-[#fff4e5] text-[#ff8900] border border-[#ff8900]"
              }`}
            >
              {student.attentive}
            </span>
          </td>

          {/* Attention Percentage */}
          <td className="py-3 px-4">
            <span
              className={`text-sm font-medium px-2 py-1 rounded-lg ${
                student.attentive === "HIGH"
                  ? "bg-[#e5f3ff] text-[#0052b4] border border-[#0052b4]"
                  : student.attentive === "MEDIUM"
                  ? "bg-[#dffef3] text-[#00e48f] border border-[#00e48f]"
                  : "bg-[#fff4e5] text-[#ff8900] border border-[#ff8900]"
              }`}
            >
              {student.percentage}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


   {/* Average Class Attention */}
   <div className="col-span-5 bg-[#f7f9fb] p-6 rounded-2xl shadow-lg">
        <h3 className="text-sm font-semibold text-[#1c1c1c] mb-4">
          Average Class Attention
        </h3>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <span>Chart Placeholder</span>
        </div>
      </div>
    </div>
  </div>


        {/* Right Sidebar - Lesson 1 Planner */}
        <div className="w-[30%] bg-white border-l border-gray-200 p-3">
          <div className="bg-white rounded-lg shadow-lg p-3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#151d48]">
                Lesson 1 Planner
              </h3>
              <button
                onClick={() => navigate("/planning")} // Navigate to the Planning page
                className="text-[#0052b4] text-sm font-bold"
              >
                View
              </button>
            </div>
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-blue-50 rounded-lg p-4 mb-2 border border-gray-200 flex"
              >
                <div className="w-11 h-8 bg-[#0052b4] text-white rounded-lg flex items-center justify-center font-medium text-sm">
                  {lesson.day}
                </div>
                <div className="ml-4">
                  <h4 className="text-[#333333] text-[15px] font-bold">
                    {lesson.title}
                    </h4>
            <p className="text-[#0052b4] text-[10px] font-bold">{lesson.topic}</p>
            <div className="flex items-center text-[#8a8a8a] text-[10px] font-bold my-1">
              <div className="w-1.5 h-1.5 bg-[#0052b4] rounded-full mr-2"></div>
              <span>{lesson.time}</span>
            </div>
            <p className="text-[#102a57] text-[11px]">{lesson.description}</p>
          </div>
        </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Lesson1;
