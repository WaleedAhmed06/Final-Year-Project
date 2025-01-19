import React from "react";

const GeneralInfo = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">General Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Name
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Father Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Father Name
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Student NIC */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student NIC
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Date of Birth
          </label>
          <input
            type="date"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Student Cell No */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Cell No
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Student Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Email
          </label>
          <input
            type="email"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Applicant ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Applicant ID
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Test Center */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Test Center
          </label>
          <select className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        {/* How did you hear about us */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            How did you hear about us
          </label>
          <select className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Friend</option>
            <option>Website</option>
            <option>Advertisement</option>
          </select>
        </div>

        {/* Province */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Province
          </label>
          <select className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option>Sindh</option>
            <option>Punjab</option>
            <option>KPK</option>
          </select>
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Upload Picture */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Picture
          </label>
          <input
            type="file"
            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-end">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
