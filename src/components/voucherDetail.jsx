import React from "react";

const VoucherDetail = () => {
  const vouchers = [
    {
      voucherNo: "12345",
      accountTitle: "John Doe",
      account: "Savings",
      amount: "$500",
      status: "Pending",
      issueDate: "2024-01-01",
      dueDate: "2024-02-01",
    },
    {
      voucherNo: "67890",
      accountTitle: "Jane Smith",
      account: "Current",
      amount: "$300",
      status: "Paid",
      issueDate: "2024-01-15",
      dueDate: "2024-02-15",
    },
  ];

  const handleEdit = (voucherNo) => {
    console.log("Edit voucher:", voucherNo);
    // Add edit functionality
  };

  const handlePrint = (voucherNo) => {
    console.log("Print voucher:", voucherNo);
    // Add print functionality
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-lg font-bold mb-4">Voucher Detail</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-green-400 text-white">
              <th className="p-3 border">Voucher No</th>
              <th className="p-3 border">Account Title</th>
              <th className="p-3 border">Account</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Issue Date</th>
              <th className="p-3 border">Due Date</th>
              <th className="p-3 border">Edit</th>
              <th className="p-3 border">Print</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map((voucher, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="p-3 border text-center">{voucher.voucherNo}</td>
                <td className="p-3 border text-center">{voucher.accountTitle}</td>
                <td className="p-3 border text-center">{voucher.account}</td>
                <td className="p-3 border text-center">{voucher.amount}</td>
                <td className="p-3 border text-center">{voucher.status}</td>
                <td className="p-3 border text-center">{voucher.issueDate}</td>
                <td className="p-3 border text-center">{voucher.dueDate}</td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => handleEdit(voucher.voucherNo)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => handlePrint(voucher.voucherNo)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherDetail;
