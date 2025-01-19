import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/image/green-logo.png";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    password: "",
    confirmPassword: "",
    programType: "",
    selectedPrograms: "",
    campus: "",
    otherPrograms: [],
  });

  let [programPreference, setProgramPreference] = useState([]);

  const programs = [
    {
      value: "BS Computer Science",
      label:
        "BS Computer Science (minimum 50% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Software Engineering",
      label:
        "BS Software Engineering (minimum 50% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Artificial Intelligence",
      label:
        "BS Artificial Intelligence (minimum 50% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Food Science and Technology",
      label:
        "BS Food Science and Technology (minimum 50% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Biotechnology",
      label:
        "BS Biotechnology (minimum 50% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Digital Systems and Web Technology",
      label:
        "BS Digital Systems and Web Technology (minimum 45% in intermediate - Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Digital Forensics and Cyber Security",
      label:
        "BS Digital Forensics and Cyber Security (minimum 45% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Cloud Applications Development and Operations",
      label:
        "BS Cloud Applications Development and Operations (minimum 45% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Robotics and Intelligent Systems",
      label:
        "BS Robotics and Intelligent Systems (minimum 45% in intermediate - Pre-Eng/ DAE/A-Level)",
    },
    {
      value: "BS Microbiology",
      label: "BS Microbiology (minimum 45% in intermediate - Pre-Med)",
    },
    {
      value: "BE Electrical",
      label:
        "BE Electrical (minimum 60% in intermediate - Pre-Med, Pre-Eng/ DAE/A-Level)",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDel = (item) => {
    setProgramPreference(
      programPreference.filter((preference) => preference !== item)
    );
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse">
        {/* Left Side - Form */}
        <div className="lg:w-1/2 flex items-center justify-center bg-gray-100">
          <form className="w-[90%] mx-auto p-4">
            <div className="text-center">
              <h2 className="text-[20px] font-bold">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-black text-xl pr-2"
                />
                Welcome to Hamdard University Admissions for
              </h2>
              <h3 className="text-xl font-bold text-red-800">Fall-2024</h3>
              <hr className="my-2" />
              <h3 className="text-xl font-bold text-red-8 00">
                Admission Portal
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="karachi"
                    className="mr-2"
                    required
                  />
                  Karachi
                </label>
                <label className="inline-flex items-center ml-5">
                  <input
                    type="radio"
                    name="location"
                    value="karachi"
                    className="mr-2"
                    required
                  />
                  Islamabad
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded p-3 w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Enter Father's Name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="border rounded p-3 w-full"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter New Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded p-3 w-full mt-4"
                  required
                />
              </div>
              <div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded p-3 w-full"
                    required
                  />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border rounded p-3 w-full  mt-4"
                  required
                />
              </div>
              <div>
                <input
                  type="cellno"
                  name="cellno"
                  placeholder="Enter Cell No"
                  value={formData.cellno}
                  onChange={handleChange}
                  className="border rounded p-3 w-full"
                  required
                />
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="border rounded p-3 w-full mt-4"
                  required
                >
                  <option value="">Select Program</option>
                  <option value="bsc">BSc</option>
                  <option value="msc">MSc</option>
                  <option value="mba">MBA</option>
                </select>
              </div>
              <div>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleChange}
                  className="border rounded p-3 w-full"
                  required
                >
                  <option value="">Select Program Type</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
                <select
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  className="border rounded p-3 w-full mt-4"
                  required
                >
                  <option value="">Select Campus</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
            </div>

            <select
              name="campus"
              value={formData.campus}
              onChange={(e) => {
                const selectedProgram = e.target.value;
                if (!programPreference.includes(selectedProgram)) {
                  setProgramPreference([...programPreference, selectedProgram]);
                }
              }}
              className="border rounded p-3 w-full mt-4"
              required
            >
              <option value="">
                Select Other Program Preference (Optional)
              </option>
              {programs.map((program, index) => (
                <option key={index} value={program.value}>
                  {program.label}
                </option>
              ))}
            </select>

            {programPreference.map((item, index) => (
              <div
                key={index}
                className="flex items-center my-2 border border-gray-500"
              >
                <div onClick={() => handleDel(item)}>
                  <FontAwesomeIcon icon={faXmark} className="px-1 cursor-pointer" />
                </div>
                <h3 className="border-l-2 border-gray-400 px-2 p1">{item}</h3>
              </div>
            ))}

            <button
              type="submit"
              className="mt-4 bg-green-500 text-white rounded p-3 w-full"
            >
              Register
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 bg-bg-registerFormImage bg-cover bg-center h-screen">
          <div className="h-screen bg-green-900 bg-opacity-55">
            <div className="flex justify-center py-20">
              <img src={logo} alt="" />
            </div>
            <h3 className="text-right text-white text-2xl font-bold px-6">
              "WE BELIEVE THAT EDUCATION IS FOR EVERYONE"
            </h3>
            <h3 className="text-right text-white text-2xl font-bold px-6">
              "Shaheed Hakeem Mohammed Said"
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
