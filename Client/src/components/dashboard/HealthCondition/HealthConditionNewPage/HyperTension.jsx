// // // import { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// // // export default function HyperTension() {
// // //   const [clients, setClients] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [statusFilter, setStatusFilter] = useState("All");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [totalPages, setTotalPages] = useState(1);
// // //   const perPage = 9;

// // //   // Password modal state
// // //   const [showPasswordModal, setShowPasswordModal] = useState(false);
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [password, setPassword] = useState("");
// // //   const correctPassword = "2821";

// // //   // Add Client Form State
// // //   const [newClient, setNewClient] = useState({
// // //     name: "",
// // //     age: "",
// // //     email: "",
// // //     status: "Active",
// // //   });

// // //   // Fetch clients from backend
// // //   useEffect(() => {
// // //     fetchClients();
// // //   }, [searchTerm, statusFilter, currentPage]);

// // //   const fetchClients = async () => {
// // //     try {
// // //       const query = new URLSearchParams({
// // //         search: searchTerm,
// // //         status: statusFilter !== "All" ? statusFilter : "",
// // //         page: currentPage,
// // //         limit: perPage,
// // //       });

// // //       const res = await fetch(`http://localhost:5000/api/hypertension/?${query}`);
// // //       if (!res.ok) throw new Error("Failed to fetch clients");

// // //       const data = await res.json();

// // //       // Expecting: { clients: [...], totalPages: number }
// // //       setClients(data.clients || []);
// // //       setTotalPages(data.totalPages || 1);
// // //     } catch (err) {
// // //       console.error("❌ Error fetching clients:", err);
// // //       toast.error("Failed to load clients");
// // //     }
// // //   };

// // //   // Handle password submit
// // //   const handlePasswordSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (password === correctPassword) {
// // //       setIsAuthenticated(true);
// // //       setShowPasswordModal(false);
// // //       toast.success("🔓 Access Granted");
// // //     } else {
// // //       toast.error("❌ Incorrect Password");
// // //     }
// // //   };

// // //   // Handle new client submission
// // //   const handleAddClient = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/hypertension", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(newClient),
// // //       });

// // //       if (!res.ok) throw new Error("Failed to add client");

// // //       toast.success("✅ Client Added Successfully!");
// // //       setNewClient({ name: "", age: "", email: "", status: "Active" });
// // //       setIsAuthenticated(false);
// // //       fetchClients();
// // //     } catch (err) {
// // //       toast.error("❌ " + err.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-8">
// // //       <ToastContainer />
// // //       <h1 className="text-2xl font-bold mb-6 text-blue-600 flex justify-between items-center">
// // //         🫀 Hypertension Clients
// // //         <button
// // //           onClick={() => setShowPasswordModal(true)}
// // //           className="bg-blue-500 text-white px-4 py-2 rounded-md"
// // //         >
// // //           ➕ Add Client
// // //         </button>
// // //       </h1>

// // //       {/* Password Modal */}
// // //       {showPasswordModal && !isAuthenticated && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // //           <motion.div
// // //             initial={{ scale: 0.8, opacity: 0 }}
// // //             animate={{ scale: 1, opacity: 1 }}
// // //             className="bg-white p-6 rounded-lg shadow-lg w-80"
// // //           >
// // //             <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
// // //             <form onSubmit={handlePasswordSubmit}>
// // //               <input
// // //                 type="password"
// // //                 className="border w-full px-3 py-2 rounded-md mb-4"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 required
// // //               />
// // //               <button
// // //                 type="submit"
// // //                 className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
// // //               >
// // //                 Unlock
// // //               </button>
// // //             </form>
// // //           </motion.div>
// // //         </div>
// // //       )}

// // //       {/* Add Client Form */}
// // //       {isAuthenticated && (
// // //         <motion.form
// // //           onSubmit={handleAddClient}
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="bg-gray-100 p-4 rounded-md mb-6"
// // //         >
// // //           <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Name"
// // //               value={newClient.name}
// // //               onChange={(e) =>
// // //                 setNewClient({ ...newClient, name: e.target.value })
// // //               }
// // //               className="border px-3 py-2 rounded-md"
// // //               required
// // //             />
// // //             <input
// // //               type="number"
// // //               placeholder="Age"
// // //               value={newClient.age}
// // //               onChange={(e) =>
// // //                 setNewClient({ ...newClient, age: e.target.value })
// // //               }
// // //               className="border px-3 py-2 rounded-md"
// // //               required
// // //             />
// // //             <input
// // //               type="email"
// // //               placeholder="Email"
// // //               value={newClient.email}
// // //               onChange={(e) =>
// // //                 setNewClient({ ...newClient, email: e.target.value })
// // //               }
// // //               className="border px-3 py-2 rounded-md"
// // //               required
// // //             />
// // //             <select
// // //               value={newClient.status}
// // //               onChange={(e) =>
// // //                 setNewClient({ ...newClient, status: e.target.value })
// // //               }
// // //               className="border px-3 py-2 rounded-md"
// // //             >
// // //               {statusOptions.slice(1).map((status) => (
// // //                 <option key={status} value={status}>
// // //                   {status}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
// // //           >
// // //             Save Client
// // //           </button>
// // //         </motion.form>
// // //       )}

// // //       {/* Filters */}
// // //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by name or email"
// // //           className="p-2 border rounded-md w-full md:w-64"
// // //           value={searchTerm}
// // //           onChange={(e) => {
// // //             setSearchTerm(e.target.value);
// // //             setCurrentPage(1);
// // //           }}
// // //         />
// // //         <select
// // //           className="p-2 border rounded-md"
// // //           value={statusFilter}
// // //           onChange={(e) => {
// // //             setStatusFilter(e.target.value);
// // //             setCurrentPage(1);
// // //           }}
// // //         >
// // //           {statusOptions.map((status) => (
// // //             <option key={status} value={status}>
// // //               {status}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {/* Table */}
// // //       <div className="overflow-x-auto">
// // //         <table className="min-w-full bg-white shadow rounded-xl">
// // //           <thead className="bg-blue-100 text-blue-800">
// // //             <tr>
// // //               <th className="text-left px-4 py-3">Name</th>
// // //               <th className="text-left px-4 py-3">Age</th>
// // //               <th className="text-left px-4 py-3">Email</th>
// // //               <th className="text-left px-4 py-3">Status</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {clients.map((client) => (
// // //               <tr key={client._id} className="border-t">
// // //                 <td className="px-4 py-3 font-medium">{client.name}</td>
// // //                 <td className="px-4 py-3">{client.age}</td>
// // //                 <td className="px-4 py-3">{client.email}</td>
// // //                 <td className="px-4 py-3">
// // //                   <span
// // //                     className={`px-2 py-1 text-sm rounded-full ${
// // //                       client.status === "Active"
// // //                         ? "bg-green-100 text-green-800"
// // //                         : client.status === "Inactive"
// // //                         ? "bg-gray-200 text-gray-700"
// // //                         : "bg-yellow-100 text-yellow-800"
// // //                     }`}
// // //                   >
// // //                     {client.status}
// // //                   </span>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //             {clients.length === 0 && (
// // //               <tr>
// // //                 <td colSpan="4" className="text-center py-6 text-gray-500">
// // //                   No clients found.
// // //                 </td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       {/* Pagination */}
// // //       <div className="flex justify-center mt-6 gap-2">
// // //         {Array.from({ length: totalPages }, (_, i) => (
// // //           <button
// // //             key={i}
// // //             className={`px-3 py-1 rounded-md border ${
// // //               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
// // //             }`}
// // //             onClick={() => setCurrentPage(i + 1)}
// // //           >
// // //             {i + 1}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// // export default function HyperTension() {
// //   const [clients, setClients] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("All");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const perPage = 9;

// //   // Password modal state
// //   const [showPasswordModal, setShowPasswordModal] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [password, setPassword] = useState("");
// //   const correctPassword = "2821";

// //   // Add Client Form State
// //   const [newClient, setNewClient] = useState({
// //     name: "",
// //     age: "",
// //     email: "",
// //     status: "Active",
// //   });

// //   // Fetch clients from backend
// //   useEffect(() => {
// //     fetchClients();
// //   }, [searchTerm, statusFilter, currentPage]);

// //   const fetchClients = async () => {
// //     try {
// //       const query = new URLSearchParams({
// //         search: searchTerm,
// //         status: statusFilter !== "All" ? statusFilter : "",
// //         page: currentPage,
// //         limit: perPage,
// //       });

// //       const res = await fetch(`http://localhost:5000/api/hypertension/?${query}`);
// //       if (!res.ok) throw new Error("Failed to fetch clients");

// //       const data = await res.json();

// //       // Expecting: { clients: [...], totalPages: number }
// //       setClients(data.clients || []);
// //       setTotalPages(data.totalPages || 1);
// //     } catch (err) {
// //       console.error("❌ Error fetching clients:", err);
// //       toast.error("Failed to load clients");
// //     }
// //   };

// //   // Handle password submit
// //   const handlePasswordSubmit = (e) => {
// //     e.preventDefault();
// //     if (password === correctPassword) {
// //       setIsAuthenticated(true);
// //       setShowPasswordModal(false);
// //       toast.success("🔓 Access Granted");
// //     } else {
// //       toast.error("❌ Incorrect Password");
// //     }
// //   };

// //   // Handle new client submission
// //   const handleAddClient = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch("http://localhost:5000/api/hypertension", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(newClient),
// //       });

// //       if (!res.ok) throw new Error("Failed to add client");

// //       toast.success("✅ Client Added Successfully!");
// //       setNewClient({ name: "", age: "", email: "", status: "Active" });
// //       setIsAuthenticated(false);
// //       fetchClients();
// //     } catch (err) {
// //       toast.error("❌ " + err.message);
// //     }
// //   };

// //   return (
// //     <div className="p-8">
// //       <ToastContainer />
// //       <h1 className="text-2xl font-bold mb-6 text-blue-600 flex justify-between items-center">
// //         🫀 Hypertension Clients
// //         <button
// //           onClick={() => setShowPasswordModal(true)}
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md"
// //         >
// //           ➕ Add Client
// //         </button>
// //       </h1>

// //       {/* Password Modal */}
// //       {showPasswordModal && !isAuthenticated && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //           <motion.div
// //             initial={{ scale: 0.8, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             className="bg-white p-6 rounded-lg shadow-lg w-80"
// //           >
// //             <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
// //             <form onSubmit={handlePasswordSubmit}>
// //               <input
// //                 type="password"
// //                 className="border w-full px-3 py-2 rounded-md mb-4"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //               <button
// //                 type="submit"
// //                 className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
// //               >
// //                 Unlock
// //               </button>
// //             </form>
// //           </motion.div>
// //         </div>
// //       )}

// //       {/* Add Client Form */}
// //       {isAuthenticated && (
// //         <motion.form
// //           onSubmit={handleAddClient}
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-gray-100 p-4 rounded-md mb-6"
// //         >
// //           <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               value={newClient.name}
// //               onChange={(e) =>
// //                 setNewClient({ ...newClient, name: e.target.value })
// //               }
// //               className="border px-3 py-2 rounded-md"
// //               required
// //             />
// //             <input
// //               type="number"
// //               placeholder="Age"
// //               value={newClient.age}
// //               onChange={(e) =>
// //                 setNewClient({ ...newClient, age: e.target.value })
// //               }
// //               className="border px-3 py-2 rounded-md"
// //               required
// //             />
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={newClient.email}
// //               onChange={(e) =>
// //                 setNewClient({ ...newClient, email: e.target.value })
// //               }
// //               className="border px-3 py-2 rounded-md"
// //               required
// //             />
// //             <select
// //               value={newClient.status}
// //               onChange={(e) =>
// //                 setNewClient({ ...newClient, status: e.target.value })
// //               }
// //               className="border px-3 py-2 rounded-md"
// //             >
// //               {statusOptions.slice(1).map((status) => (
// //                 <option key={status} value={status}>
// //                   {status}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //           <button
// //             type="submit"
// //             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
// //           >
// //             Save Client
// //           </button>
// //         </motion.form>
// //       )}

// //       {/* Filters */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
// //         <input
// //           type="text"
// //           placeholder="Search by name or email"
// //           className="p-2 border rounded-md w-full md:w-64"
// //           value={searchTerm}
// //           onChange={(e) => {
// //             setSearchTerm(e.target.value);
// //             setCurrentPage(1);
// //           }}
// //         />
// //         <select
// //           className="p-2 border rounded-md"
// //           value={statusFilter}
// //           onChange={(e) => {
// //             setStatusFilter(e.target.value);
// //             setCurrentPage(1);
// //           }}
// //         >
// //           {statusOptions.map((status) => (
// //             <option key={status} value={status}>
// //               {status}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Table */}
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white shadow rounded-xl">
// //           <thead className="bg-blue-100 text-blue-800">
// //             <tr>
// //               <th className="text-left px-4 py-3">Name</th>
// //               <th className="text-left px-4 py-3">Age</th>
// //               <th className="text-left px-4 py-3">Email</th>
// //               <th className="text-left px-4 py-3">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {clients.map((client) => (
// //               <tr key={client._id} className="border-t">
// //                 <td className="px-4 py-3 font-medium">**</td> {/* Masked Name */}
// //                 <td className="px-4 py-3">{client.age}</td>
// //                 <td className="px-4 py-3">**</td> {/* Masked Email */}
// //                 <td className="px-4 py-3">
// //                   <span
// //                     className={`px-2 py-1 text-sm rounded-full ${
// //                       client.status === "Active"
// //                         ? "bg-green-100 text-green-800"
// //                         : client.status === "Inactive"
// //                         ? "bg-gray-200 text-gray-700"
// //                         : "bg-yellow-100 text-yellow-800"
// //                     }`}
// //                   >
// //                     {client.status}
// //                   </span>
// //                 </td>
// //               </tr>
// //             ))}
// //             {clients.length === 0 && (
// //               <tr>
// //                 <td colSpan="4" className="text-center py-6 text-gray-500">
// //                   No clients found.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Pagination */}
// //       <div className="flex justify-center mt-6 gap-2">
// //         {Array.from({ length: totalPages }, (_, i) => (
// //           <button
// //             key={i}
// //             className={`px-3 py-1 rounded-md border ${
// //               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
// //             }`}
// //             onClick={() => setCurrentPage(i + 1)}
// //           >
// //             {i + 1}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// // Helper to partially mask a string (show first 2 chars + ***)
// const maskString = (str) => {
//   if (!str) return "";
//   return str.length <= 2 ? str + "***" : str.slice(0, 2) + "***";
// };

// export default function HyperTension() {
//   const [clients, setClients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 9;

//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const correctPassword = "2821";

//   const [newClient, setNewClient] = useState({
//     name: "",
//     age: "",
//     email: "",
//     status: "Active",
//   });

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

//       const res = await fetch(`http://localhost:5000/api/hypertension/?${query}`);
//       if (!res.ok) throw new Error("Failed to fetch clients");

//       const data = await res.json();
//       setClients(data.clients || []);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       console.error("❌ Error fetching clients:", err);
//       toast.error("Failed to load clients");
//     }
//   };

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

//   const handleAddClient = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/hypertension", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newClient),
//       });

//       if (!res.ok) throw new Error("Failed to add client");

//       toast.success("✅ Client Added Successfully!");
//       setNewClient({ name: "", age: "", email: "", status: "Active" });
//       setIsAuthenticated(false);
//       fetchClients();
//     } catch (err) {
//       toast.error("❌ " + err.message);
//     }
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer />
//       <h1 className="text-2xl font-bold mb-6 text-blue-600 flex justify-between items-center">
//         🫀 Hypertension Clients
//         <button
//           onClick={() => setShowPasswordModal(true)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           ➕ Add Client
//         </button>
//       </h1>

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

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded-xl">
//           <thead className="bg-blue-100 text-blue-800">
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
//                 <td className="px-4 py-3 font-medium">{maskString(client.name)}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{maskString(client.email)}</td>
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

//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded-md border ${
//               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
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
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// Helper to partially mask a string
const maskString = (str) => {
  if (!str) return "";
  return str.length <= 2 ? str + "***" : str.slice(0, 2) + "***";
};

export default function HyperTension() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 9;

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

      const res = await fetch(`http://localhost:5000/api/hypertension/?${query}`);
      if (!res.ok) throw new Error("Failed to fetch clients");

      const data = await res.json();
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("❌ Error fetching clients:", err);
      toast.error("Failed to load clients");
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
      const res = await fetch("http://localhost:5000/api/hypertension", {
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

  return (
    <div className="p-8 mt-7 min-h-screen relative">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at top left, #a7f3d0, #6ee7b7, #34d399)'
,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6 text-blue-900 flex justify-between items-center">
        🫀 Hypertension Clients
        <motion.button
          onClick={() => setShowPasswordModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow"
        >
          ➕ Add Client
        </motion.button>
      </h1>

      <AnimatePresence>
        {showPasswordModal && !isAuthenticated && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg w-80"
            >
              <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  className="border w-full px-3 py-2 rounded-md mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Unlock
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAuthenticated && (
          <motion.form
            onSubmit={handleAddClient}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white bg-opacity-70 backdrop-blur-md p-4 rounded-md mb-6 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow"
            >
              Save Client
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

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
        <table className="min-w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Age</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {clients.map((client) => (
                <motion.tr
                  key={client._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border-t hover:bg-blue-50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">
                    {maskString(client.name)}
                  </td>
                  <td className="px-4 py-3">{client.age}</td>
                  <td className="px-4 py-3">{maskString(client.email)}</td>
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
            </AnimatePresence>

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
            className={`px-3 py-1 rounded-md border ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
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
