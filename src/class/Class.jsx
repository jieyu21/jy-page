import React from "react";

const Class = () => {
  const lessons = [
    {
      id: 1,
      day: "31",
      title: "HCI",
      topic: "Topics 6 : Figma",
      time: "11 A.M - 12 P.M.",
      description: "Collaborative Learning\nPrototype, Demonstration Videos, Case Study Analysis",
    },
  ];

  const students = [
    { id: 1, name: "Cheah Pui Shyn", attentive: "HIGH", percentage: "95%" },
    { id: 2, name: "Wong Wei Sheng", attentive: "LOW", percentage: "28%" },
    { id: 3, name: "See Kai Le", attentive: "MEDIUM", percentage: "62%" },
    { id: 4, name: "Tan Zi Xu", attentive: "LOW", percentage: "15%" },
  ];

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50">
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
          <div className="relative flex items-center justify-between w-[111px] h-[53px]">
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
                src="src/assets/doorbell.png"
                alt="Doorbell Icon"
                className="w-full h-full"
              />
            </button>
            <button
              onClick={() => alert("Profile clicked!")}
              className="absolute w-[45px] h-[45px] top-[5px] left-[4px] rounded-full border border-gray-300 overflow-hidden"
            >
              <img
                src="src\assets\pfp.jpg"
                alt="User Profile"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>
      </div>

{/* Main Content */}
<div className="flex w-full h-full p-2 space-x-6">
  {/* Left Section */}
  <div className="w-2/3 bg-gray-50 p-5 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-[#151d48] mb-6">
      Human Computer Interaction
    </h2>
    {/* Grid Section for Details */}
    <div className="grid grid-cols-4 gap-2 mb-6">
      {/* Topic */}
      <div className="relative w-[182px] h-[150px] bg-[#ffe2e5] rounded-2xl">
        <div className="absolute w-10 h-10 bg-[#fa5a7d] rounded-full top-5 left-5 flex items-center justify-center">
          <img
            src="src/assets/book.png"
            alt="Book Icon"
            className="w-6 h-6"
          />
        </div>
        <h3 className="absolute top-20 left-5 text-[#151d48] text-2xl font-semibold">
          Topic 03
        </h3>
        <p className="absolute bottom-5 left-5 text-[#415165] text-base font-medium mt-1">
          Machine Learning
        </p>
      </div>
      {/* Date */}
      <div className="relative w-[182px] h-[150px] bg-[#fff4de] rounded-2xl">
        <div className="absolute w-10 h-10 bg-[#ff947a] rounded-full top-5 left-5 flex items-center justify-center">
          <img
            src="src/assets/calendar.png"
            alt="Calendar Icon"
            className="w-6 h-6"
          />
        </div>
        <h3 className="absolute top-20 left-5 text-[#151d48] text-2xl font-semibold">
          Date
        </h3>
        <p className="absolute bottom-5 left-5 text-[#415165] text-base font-medium mt-1">
          31/12/2024
        </p>
      </div>
      {/* Time */}
      <div className="relative w-[182px] h-[150px] bg-[#dffef3] rounded-2xl">
        <div className="absolute w-10 h-10 bg-[#3cd856] rounded-full top-5 left-5 flex items-center justify-center">
          <img
            src="src/assets/clock.png"
            alt="Clock Icon"
            className="w-6 h-6"
          />
        </div>
        <h3 className="absolute top-20 left-5 text-[#151d48] text-2xl font-semibold">
          Time
        </h3>
        <p className="absolute bottom-5 left-5 text-[#415165] text-base font-medium mt-1">
          11 A.M - 12 P.M.
        </p>
      </div>
      {/* Tutorial */}
      <div className="relative w-[182px] h-[150px] bg-[#e3dbf5] rounded-2xl">
        <div className="absolute w-10 h-10 bg-[#bf83ff] rounded-full top-5 left-5 flex items-center justify-center">
          <img
            src="src/assets/classroom.png"
            alt="Classroom Icon"
            className="w-6 h-6"
          />
        </div>
        <h3 className="absolute top-20 left-5 text-[#151d48] text-2xl font-semibold">
          Tutorial 03
        </h3>
        <p className="absolute bottom-5 left-5 text-[#415165] text-base font-medium mt-1">
          Case Study Analysis
        </p>
      </div>
    </div>

    {/* Real-time Analysis */}
    <h3 className="text-2xl font-semibold text-[#151d48] mb-4">
      Real-time Analysis
    </h3>
    <div className="grid grid-cols-2 gap-6">
      {/* Main Graph */}
      <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
                <div className="h-[260px] bg-gray-100 rounded"></div>
      </div>
      {/* Student's Attention Graph */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-[#151d48] mb-4">
          Student's Attention
        </h4>
        <div className="h-40 bg-gray-100 rounded"></div>
      </div>
      {/* Average Student Attention (Pie Chart Section) */}
      <div className="bg-white p-6 rounded-lg shadow-md h-[240px] flex flex-col">
      <h4 className="text-xl font-semibold text-[#151d48] mb-4 self-start">
      Average Student Attention
        </h4>
        <div className="flex items-center justify-between ">
          {/* Pie Chart */}
          <div className="w-[120px] h-[120px] relative">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle
                cx="18"
                cy="18"
                r="15.91549431"
                fill="transparent"
                stroke="#e6e6e6"
                strokeWidth="2"
              />
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
              <h4 className="text-[#0052b4] text-xl font-bold">70%</h4>
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-start items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#0052b4] rounded-full"></div>
              <span className="text-sm text-[#1c1c1c]">Attentive: 70%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-[#1c1c1c]">Non-Attentive: 30%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-1/3 flex flex-col space-y-6">
    {/* Lesson Planner */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-[#151d48]">Lesson Planner</h3>
        <button className="text-[#0052b4] text-sm font-bold">Add</button>
      </div>
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="bg-blue-50 p-4 mt-4 rounded-lg border border-gray-200"
        >
          <div className="flex items-start space-x-4">
            <div className="w-11 h-11 bg-[#0052b4] text-white flex items-center justify-center rounded-lg font-bold text-sm">
              {lesson.day}
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="text-[#333333] text-[15px] font-bold">
                {lesson.title}
              </h4>
              <p className="text-[#0052b4] text-[10px] font-bold">
                {lesson.topic}
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#0052b4] rounded-full"></div>
                <span className="text-[#8a8a8a] text-[10px] font-bold">
                  {lesson.time}
                </span>
              </div>
              <p className="text-[#102a57] text-[11px] whitespace-pre-line">
                {lesson.description}
              </p>
            </div>
          </div>
        </div>
      ))}
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
</div>
</div>
</div>

  );
};

export default Class;
