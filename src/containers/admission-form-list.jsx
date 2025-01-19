import React from "react";

const AdmissionFormList = () => {
  const data = [
    {
      id: 129175,
      inquiryDate: "09-Dec-2024",
      studentName: "Safia Ahmed",
      status: "No Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (RIS)",
      offerType: "Spring-2025",
      cellNo: "03312321838",
      offerLetterAmount: "52,500",
    },
    {
      id: 129162,
      inquiryDate: "08-Dec-2024",
      studentName: "Rehman",
      status: "Unpaid Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (DFCS)",
      offerType: "Spring-2025",
      cellNo: "03150212162",
      offerLetterAmount: "52,500",
    },
    {
      id: 129162,
      inquiryDate: "08-Dec-2024",
      studentName: "Abdul",
      status: "Unpaid Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (DFCS)",
      offerType: "Spring-2025",
      cellNo: "03150212162",
      offerLetterAmount: "52,500",
    },
    {
      id: 129162,
      inquiryDate: "08-Dec-2024",
      studentName: "Zoya Saeed",
      status: "Unpaid Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (DFCS)",
      offerType: "Spring-2025",
      cellNo: "03150212162",
      offerLetterAmount: "52,500",
    },
    {
      id: 129162,
      inquiryDate: "08-Dec-2024",
      studentName: "Ahmed",
      status: "Unpaid Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (DFCS)",
      offerType: "Spring-2025",
      cellNo: "03150212162",
      offerLetterAmount: "52,500",
    },
    {
      id: 129162,
      inquiryDate: "08-Dec-2024",
      studentName: "Dua Rahim",
      status: "Unpaid Voucher",
      project: "NNKDA",
      faculty: "FEST",
      program: "BS (DFCS)",
      offerType: "Spring-2025",
      cellNo: "03150212162",
      offerLetterAmount: "52,500",
    },
    // Add more rows as needed
  ];

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">App ID</th>
              <th className="border border-gray-300 px-4 py-2">Inquiry Date</th>
              <th className="border border-gray-300 px-4 py-2">Student Name</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Project</th>
              <th className="border border-gray-300 px-4 py-2">Faculty</th>
              <th className="border border-gray-300 px-4 py-2">Program</th>
              <th className="border border-gray-300 px-4 py-2">Offer Type</th>
              <th className="border border-gray-300 px-4 py-2">Cell No</th>
              <th className="border border-gray-300 px-4 py-2">Edit</th>
              <th className="border border-gray-300 px-4 py-2">Offer Letter Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 px-4 py-2">{row.inquiryDate}</td>
                <td className="border border-gray-300 px-4 py-2">{row.studentName}</td>
                <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                <td className="border border-gray-300 px-4 py-2">{row.project}</td>
                <td className="border border-gray-300 px-4 py-2">{row.faculty}</td>
                <td className="border border-gray-300 px-4 py-2">{row.program}</td>
                <td className="border border-gray-300 px-4 py-2">{row.offerType}</td>
                <td className="border border-gray-300 px-4 py-2">{row.cellNo}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                    Edit
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.offerLetterAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionFormList;
