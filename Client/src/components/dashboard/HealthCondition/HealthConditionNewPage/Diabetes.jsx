// import { useState } from "react";

// const mockClients = [
//   { id: 1, name: "Ravi Kumar", age: 45, email: "ravi@example.com", status: "Active" },
//   { id: 2, name: "Sneha Mehta", age: 52, email: "sneha@example.com", status: "Under Review" },
//   { id: 3, name: "Arun Patel", age: 38, email: "arun@example.com", status: "Active" },
//   { id: 4, name: "Priya Singh", age: 60, email: "priya@example.com", status: "Inactive" },
//   { id: 5, name: "Rahul Shah", age: 50, email: "rahul@example.com", status: "Active" },
//   { id: 6, name: "Divya Rana", age: 48, email: "divya@example.com", status: "Under Review" },

//   // Additional Clients
//   { id: 7, name: "Karan Malhotra", age: 36, email: "karan@example.com", status: "Active" },
//   { id: 8, name: "Nisha Yadav", age: 42, email: "nisha@example.com", status: "Inactive" },
//   { id: 9, name: "Alok Das", age: 55, email: "alok@example.com", status: "Active" },
//   { id: 10, name: "Isha Verma", age: 30, email: "isha@example.com", status: "Active" },
//   { id: 11, name: "Sameer Joshi", age: 40, email: "sameer@example.com", status: "Under Review" },
//   { id: 12, name: "Preeti Sharma", age: 53, email: "preeti@example.com", status: "Active" },
//   { id: 13, name: "Manoj Reddy", age: 47, email: "manoj@example.com", status: "Inactive" },
//   { id: 14, name: "Anjali Nair", age: 37, email: "anjali@example.com", status: "Active" },
//   { id: 15, name: "Vikram Singh", age: 44, email: "vikram@example.com", status: "Under Review" },
//   { id: 16, name: "Neha Gupta", age: 29, email: "neha@example.com", status: "Active" },
//   { id: 17, name: "Rohit Roy", age: 51, email: "rohit@example.com", status: "Inactive" },
//   { id: 18, name: "Sonal Jain", age: 39, email: "sonal@example.com", status: "Active" },
//   { id: 19, name: "Yash Thakur", age: 32, email: "yash@example.com", status: "Under Review" },
//   { id: 20, name: "Tanya Kapoor", age: 46, email: "tanya@example.com", status: "Active" },
//   { id: 21, name: "Deepak Chawla", age: 54, email: "deepak@example.com", status: "Active" },
//   { id: 22, name: "Ritika Bansal", age: 31, email: "ritika@example.com", status: "Inactive" },
//   { id: 23, name: "Harshita Rao", age: 35, email: "harshita@example.com", status: "Active" },
//   { id: 24, name: "Ajay Bhatt", age: 58, email: "ajay@example.com", status: "Under Review" },
//   { id: 25, name: "Megha Sinha", age: 41, email: "megha@example.com", status: "Active" },
//   { id: 26, name: "Gaurav Mishra", age: 49, email: "gaurav@example.com", status: "Inactive" },
//   { id: 27, name: "Kavya Menon", age: 33, email: "kavya@example.com", status: "Active" },
//   { id: 28, name: "Nitin Bhatia", age: 57, email: "nitin@example.com", status: "Active" },
//   { id: 29, name: "Pooja Rawat", age: 43, email: "pooja@example.com", status: "Under Review" },
//   { id: 30, name: "Arpita Ghosh", age: 39, email: "arpita@example.com", status: "Inactive" },
//   { id: 31, name: "Ramesh Iyer", age: 61, email: "ramesh@example.com", status: "Active" },
//   { id: 32, name: "Surbhi Seth", age: 28, email: "surbhi@example.com", status: "Active" },
//   { id: 33, name: "Devansh Kaul", age: 40, email: "devansh@example.com", status: "Under Review" },
//   { id: 34, name: "Tanvi Kohli", age: 34, email: "tanvi@example.com", status: "Active" },
//   { id: 35, name: "Ashok Shetty", age: 50, email: "ashok@example.com", status: "Inactive" },
//   { id: 36, name: "Bhavna Arora", age: 42, email: "bhavna@example.com", status: "Active" },
//   { id: 37, name: "Zoya Khan", age: 30, email: "zoya@example.com", status: "Under Review" },
//   { id: 38, name: "Siddharth Desai", age: 48, email: "siddharth@example.com", status: "Active" },
//   { id: 39, name: "Anita Pillai", age: 56, email: "anita@example.com", status: "Inactive" },
//   { id: 40, name: "Rajeev Nanda", age: 45, email: "rajeev@example.com", status: "Active" },
//   { id: 41, name: "Shruti Vyas", age: 36, email: "shruti@example.com", status: "Under Review" },
//   { id: 42, name: "Rohini Dey", age: 59, email: "rohini@example.com", status: "Active" },
//   { id: 43, name: "Tarun Sehgal", age: 46, email: "tarun@example.com", status: "Inactive" },
//   { id: 44, name: "Nandini Bose", age: 38, email: "nandini@example.com", status: "Active" },
//   { id: 45, name: "Farhan Ali", age: 53, email: "farhan@example.com", status: "Under Review" },
//   { id: 46, name: "Lavanya Joshi", age: 35, email: "lavanya@example.com", status: "Active" },
// ];


// const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// export default function DiabetesClients() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const perPage = 10;

//   const filteredClients = mockClients
//     .filter((c) =>
//       c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((c) => statusFilter === "All" || c.status === statusFilter);

//   const totalPages = Math.ceil(filteredClients.length / perPage);
//   const displayedClients = filteredClients.slice((currentPage - 1) * perPage, currentPage * perPage);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6 text-red-600">🩸 Diabetes Clients</h1>

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="p-2 border rounded-md w-full md:w-64"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//         <select
//           className="p-2 border rounded-md"
//           value={statusFilter}
//           onChange={(e) => {
//             setStatusFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           {statusOptions.map((status) => (
//             <option key={status} value={status}>{status}</option>
//           ))}
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-xl">
//           <thead className="bg-red-100 text-red-800">
//             <tr>
//               <th className="text-left px-4 py-3">Name</th>
//               <th className="text-left px-4 py-3">Age</th>
//               <th className="text-left px-4 py-3">Email</th>
//               <th className="text-left px-4 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedClients.map((client) => (
//               <tr key={client.id} className="border-t">
//                 <td className="px-4 py-3 font-medium">{client.name}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-sm rounded-full ${
//                       client.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : client.status === "Inactive"
//                         ? "bg-gray-200 text-gray-700"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {client.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {displayedClients.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">No clients found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded-md border ${
//               currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";

// const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// export default function DiabetesClients() {
//   const [clients, setClients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 10;

//   // Fetch clients from backend
//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const query = new URLSearchParams({
//           search: searchTerm,
//           status: statusFilter !== "All" ? statusFilter : "",
//           page: currentPage,
//           limit: perPage,
//         });

//         const res = await fetch(`http://localhost:5000/api/diabetes?${query}`);
//         if (!res.ok) throw new Error("Failed to fetch clients");

//         const data = await res.json();
//         setClients(data.clients || []);
//         setTotalPages(data.totalPages || 1);
//       } catch (err) {
//         console.error("❌ Error fetching clients:", err);
//       }
//     };

//     fetchClients();
//   }, [searchTerm, statusFilter, currentPage]);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6 text-red-600">🩸 Diabetes Clients</h1>

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="p-2 border rounded-md w-full md:w-64"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//         <select
//           className="p-2 border rounded-md"
//           value={statusFilter}
//           onChange={(e) => {
//             setStatusFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           {statusOptions.map((status) => (
//             <option key={status} value={status}>
//               {status}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-xl">
//           <thead className="bg-red-100 text-red-800">
//             <tr>
//               <th className="text-left px-4 py-3">Name</th>
//               <th className="text-left px-4 py-3">Age</th>
//               <th className="text-left px-4 py-3">Email</th>
//               <th className="text-left px-4 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client._id} className="border-t">
//                 <td className="px-4 py-3 font-medium">{client.name}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-sm rounded-full ${
//                       client.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : client.status === "Inactive"
//                         ? "bg-gray-200 text-gray-700"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {client.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {clients.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">
//                   No clients found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded-md border ${
//               currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }






// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// export default function DiabetesClients() {
//   const [clients, setClients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 10;

//   // Password modal state
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const correctPassword = "2821";

//   // Add Client Form State
//   const [newClient, setNewClient] = useState({
//     name: "",
//     age: "",
//     email: "",
//     status: "Active",
//   });

//   // Fetch clients from backend
//   useEffect(() => {
//     fetchClients();
//   }, [searchTerm, statusFilter, currentPage]);

//   const fetchClients = async () => {
//     try {
//       const query = new URLSearchParams({
//         search: searchTerm,
//         status: statusFilter !== "All" ? statusFilter : "",
//         page: currentPage,
//         limit: perPage,
//       });

//       const res = await fetch(`http://localhost:5000/api/diabetes?${query}`);
//       if (!res.ok) throw new Error("Failed to fetch clients");

//       const data = await res.json();
//       setClients(data.clients || []);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       console.error("❌ Error fetching clients:", err);
//     }
//   };

//   // Handle password submit
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (password === correctPassword) {
//       setIsAuthenticated(true);
//       setShowPasswordModal(false);
//       toast.success("🔓 Access Granted");
//     } else {
//       toast.error("❌ Incorrect Password");
//     }
//   };

//   // Handle new client submission
//   const handleAddClient = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/diabetes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newClient),
//       });

//       if (!res.ok) throw new Error("Failed to add client");

//       toast.success("✅ Client Added Successfully!");
//       setNewClient({ name: "", age: "", email: "", status: "Active" });
//       setIsAuthenticated(false); // Lock form again
//       fetchClients(); // Refresh list
//     } catch (err) {
//       toast.error("❌ " + err.message);
//     }
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer />
//       <h1 className="text-2xl font-bold mb-6 text-red-600 flex justify-between items-center">
//         🩸 Diabetes Clients
//         <button
//           onClick={() => setShowPasswordModal(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           ➕ Add Client
//         </button>
//       </h1>

//       {/* Password Modal */}
//       {showPasswordModal && !isAuthenticated && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white p-6 rounded-lg shadow-lg w-80"
//           >
//             <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
//             <form onSubmit={handlePasswordSubmit}>
//               <input
//                 type="password"
//                 className="border w-full px-3 py-2 rounded-md mb-4"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
//               >
//                 Unlock
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       )}

//       {/* Add Client Form */}
//       {isAuthenticated && (
//         <motion.form
//           onSubmit={handleAddClient}
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-100 p-4 rounded-md mb-6"
//         >
//           <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               value={newClient.name}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, name: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={newClient.age}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, age: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={newClient.email}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, email: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <select
//               value={newClient.status}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, status: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//             >
//               {statusOptions.slice(1).map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Save Client
//           </button>
//         </motion.form>
//       )}

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="p-2 border rounded-md w-full md:w-64"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//         <select
//           className="p-2 border rounded-md"
//           value={statusFilter}
//           onChange={(e) => {
//             setStatusFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           {statusOptions.map((status) => (
//             <option key={status} value={status}>
//               {status}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-xl">
//           <thead className="bg-red-100 text-red-800">
//             <tr>
//               <th className="text-left px-4 py-3">Name</th>
//               <th className="text-left px-4 py-3">Age</th>
//               <th className="text-left px-4 py-3">Email</th>
//               <th className="text-left px-4 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client._id} className="border-t">
//                 <td className="px-4 py-3 font-medium">{client.name}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{client.email}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-sm rounded-full ${
//                       client.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : client.status === "Inactive"
//                         ? "bg-gray-200 text-gray-700"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {client.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {clients.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">
//                   No clients found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded-md border ${
//               currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// export default function DiabetesClients() {
//   const [clients, setClients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 10;

//   // Password modal state
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const correctPassword = "2821";

//   // Add Client Form State
//   const [newClient, setNewClient] = useState({
//     name: "",
//     age: "",
//     email: "",
//     status: "Active",
//   });

//   // Fetch clients from backend
//   useEffect(() => {
//     fetchClients();
//   }, [searchTerm, statusFilter, currentPage]);

//   const fetchClients = async () => {
//     try {
//       const query = new URLSearchParams({
//         search: searchTerm,
//         status: statusFilter !== "All" ? statusFilter : "",
//         page: currentPage,
//         limit: perPage,
//       });

//       const res = await fetch(`http://localhost:5000/api/diabetes?${query}`);
//       if (!res.ok) throw new Error("Failed to fetch clients");

//       const data = await res.json();
//       setClients(data.clients || []);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       console.error("❌ Error fetching clients:", err);
//     }
//   };

//   // Handle password submit
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (password === correctPassword) {
//       setIsAuthenticated(true);
//       setShowPasswordModal(false);
//       toast.success("🔓 Access Granted");
//     } else {
//       toast.error("❌ Incorrect Password");
//     }
//   };

//   // Handle new client submission
//   const handleAddClient = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/diabetes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newClient),
//       });

//       if (!res.ok) throw new Error("Failed to add client");

//       toast.success("✅ Client Added Successfully!");
//       setNewClient({ name: "", age: "", email: "", status: "Active" });
//       setIsAuthenticated(false); // Lock form again
//       fetchClients(); // Refresh list
//     } catch (err) {
//       toast.error("❌ " + err.message);
//     }
//   };

//   // Masking helpers
//   const maskName = (name) => {
//     if (!name) return "";
//     return name[0] + "***";
//   };

//   const maskEmail = (email) => {
//     if (!email) return "";
//     const [user, domain] = email.split("@");
//     if (!domain) return "***";
//     return user.length <= 3
//       ? user + "***@" + domain
//       : user.slice(0, 3) + "***@" + domain;
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer />
//       <h1 className="text-2xl font-bold mb-6 text-red-600 flex justify-between items-center">
//         🩸 Diabetes Clients
//         <button
//           onClick={() => setShowPasswordModal(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           ➕ Add Client
//         </button>
//       </h1>

//       {/* Password Modal */}
//       {showPasswordModal && !isAuthenticated && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white p-6 rounded-lg shadow-lg w-80"
//           >
//             <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
//             <form onSubmit={handlePasswordSubmit}>
//               <input
//                 type="password"
//                 className="border w-full px-3 py-2 rounded-md mb-4"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
//               >
//                 Unlock
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       )}

//       {/* Add Client Form */}
//       {isAuthenticated && (
//         <motion.form
//           onSubmit={handleAddClient}
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-100 p-4 rounded-md mb-6"
//         >
//           <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               value={newClient.name}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, name: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <input
//               type="number"
//               placeholder="Age"
//               value={newClient.age}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, age: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={newClient.email}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, email: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//               required
//             />
//             <select
//               value={newClient.status}
//               onChange={(e) =>
//                 setNewClient({ ...newClient, status: e.target.value })
//               }
//               className="border px-3 py-2 rounded-md"
//             >
//               {statusOptions.slice(1).map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Save Client
//           </button>
//         </motion.form>
//       )}

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="p-2 border rounded-md w-full md:w-64"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//         <select
//           className="p-2 border rounded-md"
//           value={statusFilter}
//           onChange={(e) => {
//             setStatusFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           {statusOptions.map((status) => (
//             <option key={status} value={status}>
//               {status}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-xl">
//           <thead className="bg-red-100 text-red-800">
//             <tr>
//               <th className="text-left px-4 py-3">Name</th>
//               <th className="text-left px-4 py-3">Age</th>
//               <th className="text-left px-4 py-3">Email</th>
//               <th className="text-left px-4 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client._id} className="border-t">
//                 <td className="px-4 py-3 font-medium">{maskName(client.name)}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{maskEmail(client.email)}</td>
//                 <td className="px-4 py-3">
//                   <span
//                     className={`px-2 py-1 text-sm rounded-full ${
//                       client.status === "Active"
//                         ? "bg-green-100 text-green-800"
//                         : client.status === "Inactive"
//                         ? "bg-gray-200 text-gray-700"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {client.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {clients.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">
//                   No clients found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded-md border ${
//               currentPage === i + 1 ? "bg-red-500 text-white" : "bg-white"
//             }`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusOptions = ["All", "Active", "Inactive", "Under Review"];

export default function DiabetesClients() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10;

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "2821";

  const [newClient, setNewClient] = useState({
    name: "",
    age: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    fetchClients();
  }, [searchTerm, statusFilter, currentPage]);

  const fetchClients = async () => {
    try {
      const query = new URLSearchParams({
        search: searchTerm,
        status: statusFilter !== "All" ? statusFilter : "",
        page: currentPage,
        limit: perPage,
      });

      const res = await fetch(`http://localhost:5000/api/diabetes?${query}`);
      if (!res.ok) throw new Error("Failed to fetch clients");

      const data = await res.json();
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("❌ Error fetching clients:", err);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      toast.success("🔓 Access Granted");
    } else {
      toast.error("❌ Incorrect Password");
    }
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/diabetes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });

      if (!res.ok) throw new Error("Failed to add client");

      toast.success("✅ Client Added Successfully!");
      setNewClient({ name: "", age: "", email: "", status: "Active" });
      setIsAuthenticated(false);
      fetchClients();
    } catch (err) {
      toast.error("❌ " + err.message);
    }
  };

  const maskName = (name) => (!name ? "" : name[0] + "***");
  const maskEmail = (email) => {
    if (!email) return "";
    const [user, domain] = email.split("@");
    if (!domain) return "***";
    return user.length <= 3
      ? user + "***@" + domain
      : user.slice(0, 3) + "***@" + domain;
  };

  return (
    <div
      className="min-h-screen mt-7 p-8"
      style={{
        background: "linear-gradient(135deg, #d6f5d6, #b9f0b9, #a3e6a3)",
      }}
    >
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6 text-green-700 flex justify-between items-center">
        🩺 Diabetes Clients
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPasswordModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          ➕ Add Client
        </motion.button>
      </h1>

      {showPasswordModal && !isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-4 text-green-700">
              🔐 Enter Password
            </h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className="border w-full px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full"
              >
                Unlock
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {isAuthenticated && (
        <motion.form
          onSubmit={handleAddClient}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            ➕ Add New Client
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={newClient.age}
              onChange={(e) =>
                setNewClient({ ...newClient, age: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) =>
                setNewClient({ ...newClient, email: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <select
              value={newClient.status}
              onChange={(e) =>
                setNewClient({ ...newClient, status: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
            >
              {statusOptions.slice(1).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Save Client
          </button>
        </motion.form>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="p-2 border rounded-md w-full md:w-64"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="p-2 border rounded-md"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Age</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <motion.tr
                key={client._id}
                className="border-t hover:bg-green-50"
                whileHover={{ scale: 1.01 }}
              >
                <td className="px-4 py-3 font-medium">
                  {maskName(client.name)}
                </td>
                <td className="px-4 py-3">{client.age}</td>
                <td className="px-4 py-3">{maskEmail(client.email)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      client.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : client.status === "Inactive"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
              </motion.tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-md border ${
              currentPage === i + 1
                ? "bg-green-500 text-white"
                : "bg-white hover:bg-green-100"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
