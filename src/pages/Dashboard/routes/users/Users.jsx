<<<<<<< Updated upstream
import { useState, useEffect } from "react";
import { DataTable } from "../../../../R-U_components/Table/data-table";
import SearchBar from "../../../../R-U_components/Searchbar/search-bar";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchCustomer } from "../../../../Redux/CustomerSlice";
import { useDispatch } from 'react-redux';


import avatar from '../../../../assets/avatar.png';

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSection, setActiveSection] = useState("personalUsers");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch(); // ✅ Import and use dispatch
  const customer = useSelector((state) => state.customer.customer); // ✅ Ensure it's accessing the right part of state
  const loading = useSelector((state) => state.customer.loading);
  const error = useSelector((state) => state.customer.error);


  const personalUsers = Array.isArray(customer)
    ? customer.filter((c) => c?.userType === "PERSONAL")
    : [];

  const businessUsers = Array.isArray(customer)
    ? customer.filter((c) => c?.userType === "CORPORATE")
    : [];


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleClick = (section) => {
    setActiveSection(section);
  };


  const columns = [
    {
      key: "firstName",
      title: "Name",
      render: (customer, row) => {
        console.log("Row data:", row, customer); // Debugging to check the structure of row
        return (
          <div className="flex items-center gap-3">
            <img
              src={row?.passportUrl || avatar} // Ensure the URL exists
              alt="Customer Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span>{row?.firstName || "N/A"} {row?.lastName || ""}</span>
          </div>
        );
      },
    },
    
    { key: "email", title: "Email address" },
    { key: "accountNumber", title: "Account Number" },
    { key: "payinaUserName", title: "Username" },
    { key: "phoneNumber", title: "Phone Number" },
  ];

  const filteredData = (activeSection === "personalUsers" ? personalUsers : businessUsers).filter((customer) =>
    customer.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) // Use user.firstName instead of firstName
  );
  

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="font-bold text-3xl">User Management</div>

      {/* Search Input */}
      <SearchBar className="mt-10" onSearch={handleSearch} />

      {/* Section Tabs */}
      <div className="container mx-auto ml-3 flex mt-20 gap-10 text-gray-600">
        {["personalUsers", "businessUsers"].map((section) => (
         <div key={section} className="group cursor-pointer" onClick={() => handleClick(section)}>
         <h1 className={`relative text-lg transition-colors duration-500 
           ${activeSection === section ? "text-[#3A859E] font-bold" : "text-gray-600"}`}>
           {section.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
           <span className={`absolute left-0 right-0 top-8 h-[1px] bg-[#3A859E] transition-all duration-500 
             ${activeSection === section ? "w-full" : "w-0"}`} />
         </h1>
       </div>
       
        ))}
      </div>

      <div className="relative w-full mx-auto">
        <div className="w-full h-0.5 bg-gray-100"></div>
      </div>
       
      {loading ? (
        <p className="text-center mt-10">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-10">{error}</p>
      ) : (
        <DataTable
          columns={columns}
          data={filteredData}
          searchTerm={searchTerm}

          showFooter={true}
        currentPage={currentPage}
        onPageChange={onPageChange}
        actionColumn={{ title: "Actions" }} 
        />
      )}
=======
import React, { useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  

  const fetchAllUsers = async () => {
    setErrorMessage(''); // Clear previous errors
    try {
      const response = await fetch(import.meta.env.VITE_ALL_USERS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', 
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setUsers(data); // Update state with fetched users
      } else {
        throw new Error("Non-JSON response from server.");
      }
    } catch (error) {
      setErrorMessage(`Error fetching users: ${error.message}`);
    }
  };

  return (
    <div className="text-center">
      <div>Users</div>
      <button
        type="submit"
        className="text-[#006181] mt-5 text-sm flex justify-center items-center rounded-md bg-yellow-400 px-3 py-2 font-bold w-[30%] ml-0 !mb-4 hover:cursor-pointer transition"
        onClick={fetchAllUsers}
      >
        All Users
      </button>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="mt-4">
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border-b py-2">
                <strong>Name:</strong> {user.firstName} {user.lastName} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Phone:</strong> {user.phoneNumber} <br />
                <strong>User Type:</strong> {user.userType} <br />
                <strong>Tier Level:</strong> {user.tierLevel}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Users;

