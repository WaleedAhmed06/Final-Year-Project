import { useState } from "react";

function QualifiedUserList() {
  // Example list of all users with qualification status and additional fields
  const users = [
    {
      id: 1,
      name: "Ahmed Ali",
      program: "Computer Science",
      qualified: true,
      fatherName: "Ali Akbar",
      qualifiedDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Fatima Khan",
      program: "Mechanical Engineering",
      qualified: false,
      fatherName: "Shahbaz Khan",
      qualifiedDate: "2024-01-20",
    },
    {
      id: 3,
      name: "Zainab Ahmed",
      program: "Electrical Engineering",
      qualified: true,
      fatherName: "Muhammad Ali",
      qualifiedDate: "2024-01-10",
    },
    {
      id: 4,
      name: "Omar Shah",
      program: "Business Administration",
      qualified: true,
      fatherName: "Abdul Rehman Shah",
      qualifiedDate: "2024-01-12",
    },
    {
      id: 5,
      name: "Sara Qureshi",
      program: "Law",
      qualified: false,
      fatherName: "Nashit Qureshi",
      qualifiedDate: "2024-01-22",
    },
  ];

  // Filter qualified users
  const qualifiedUsers = users.filter((user) => user.qualified);

  // State for search query and the selected user's details
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Filter qualified users based on search query
  const filteredUsers = qualifiedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.program.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle showing complete details for a user
  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-black">Qualified Users</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name or Program"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table for Qualified Users */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="border text-left bg-green-100">
              <th className="px-6 py-3 border border-gray-300">#</th>
              <th className="px-6 py-3 border border-gray-300">Name</th>
              <th className="px-6 py-3 border border-gray-300">Program</th>
              <th className="px-6 py-3 border border-gray-300">Father Name</th>
              <th className="px-6 py-3 border border-gray-300">Qualification Date</th>
              <th className="px-6 py-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <td className="px-6 py-3 text-sm border border-gray-300">{index + 1}</td>
                  <td className="px-6 py-3 text-sm border border-gray-300">{user.name}</td>
                  <td className="px-6 py-3 text-sm border border-gray-300">{user.program}</td>
                  <td className="px-6 py-3 text-sm border border-gray-300">{user.fatherName}</td>
                  <td className="px-6 py-3 text-sm border border-gray-300">{user.qualifiedDate}</td>
                  <td className="px-6 py-3 text-sm border border-gray-300">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleViewDetails(user)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3 text-red-500">
                  No qualified users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Complete Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Program:</strong> {selectedUser.program}
            </p>
            <p>
              <strong>Father's Name:</strong> {selectedUser.fatherName}
            </p>
            <p>
              <strong>Qualification Date:</strong> {selectedUser.qualifiedDate}
            </p>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QualifiedUserList;
