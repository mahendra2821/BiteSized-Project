// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// // export default function GeneralWellness() {
// //   const [clients, setClients] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [statusFilter, setStatusFilter] = useState("All");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const perPage = 6;

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

// //       const res = await fetch(`http://localhost:5000/api/general-wellness?${query}`);
// //       if (!res.ok) throw new Error("Failed to fetch clients");

// //       const data = await res.json();
// //       setClients(data.clients || []);
// //       setTotalPages(data.totalPages || 1);
// //     } catch (err) {
// //       console.error("❌ Error fetching clients:", err);
// //     }
// //   };

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

// //   const handleAddClient = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch("http://localhost:5000/api/general-wellness", {
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

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this client?")) return;

// //     try {
// //       const res = await fetch(`http://localhost:5000/api/general-wellness/${id}`, {
// //         method: "DELETE",
// //       });

// //       if (!res.ok) throw new Error("Failed to delete client");

// //       toast.success("🗑️ Client Deleted");
// //       fetchClients();
// //     } catch (err) {
// //       toast.error("❌ " + err.message);
// //     }
// //   };

// //   return (
// //     <div className="p-8">
// //       <ToastContainer />
// //       <h1 className="text-2xl font-bold mb-6 text-green-600 flex justify-between items-center">
// //         🌿 General Wellness Clients
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

// //       {/* Controls */}
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
// //           <thead className="bg-green-100 text-green-800">
// //             <tr>
// //               <th className="text-left px-4 py-3">Name</th>
// //               <th className="text-left px-4 py-3">Age</th>
// //               <th className="text-left px-4 py-3">Email</th>
// //               <th className="text-left px-4 py-3">Status</th>
// //               <th className="text-left px-4 py-3">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {clients.map((client) => (
// //               <tr key={client._id} className="border-t">
// //                 <td className="px-4 py-3 font-medium">{client.name}</td>
// //                 <td className="px-4 py-3">{client.age}</td>
// //                 <td className="px-4 py-3">{client.email}</td>
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
// //                 <td className="px-4 py-3">
// //                   <button
// //                     onClick={() => handleDelete(client._id)}
// //                     className="bg-red-500 text-white px-3 py-1 rounded"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //             {clients.length === 0 && (
// //               <tr>
// //                 <td colSpan="5" className="text-center py-6 text-gray-500">
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
// //               currentPage === i + 1 ? "bg-green-500 text-white" : "bg-white"
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

// // Mask name: first 2 letters + ***
// const maskName = (str) => {
//   if (!str) return "";
//   return str.length <= 2 ? str + "***" : str.slice(0, 2) + "***";
// };

// // Mask email: first 3 letters + ***@gmail.com
// const maskEmailDomain = (email) => {
//   if (!email) return "";
//   const [user] = email.split("@");
//   if (user.length <= 3) return user + "***@gmail.com";
//   return user.slice(0, 3) + "***@gmail.com";
// };

// export default function GeneralWellness() {
//   const [clients, setClients] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 6;

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

//       const res = await fetch(`http://localhost:5000/api/general-wellness?${query}`);
//       if (!res.ok) throw new Error("Failed to fetch clients");

//       const data = await res.json();
//       setClients(data.clients || []);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       console.error("❌ Error fetching clients:", err);
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
//       const res = await fetch("http://localhost:5000/api/general-wellness", {
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

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this client?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/general-wellness/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Failed to delete client");

//       toast.success("🗑️ Client Deleted");
//       fetchClients();
//     } catch (err) {
//       toast.error("❌ " + err.message);
//     }
//   };

//   return (
//     <div className="p-8">
//       <ToastContainer />
//       <h1 className="text-2xl font-bold mb-6 text-green-600 flex justify-between items-center">
//         🌿 General Wellness Clients
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
//           <thead className="bg-green-100 text-green-800">
//             <tr>
//               <th className="text-left px-4 py-3">Name</th>
//               <th className="text-left px-4 py-3">Age</th>
//               <th className="text-left px-4 py-3">Email</th>
//               <th className="text-left px-4 py-3">Status</th>
//               <th className="text-left px-4 py-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client._id} className="border-t">
//                 <td className="px-4 py-3 font-medium">{maskName(client.name)}</td>
//                 <td className="px-4 py-3">{client.age}</td>
//                 <td className="px-4 py-3">{maskEmailDomain(client.email)}</td>
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
//                 <td className="px-4 py-3">
                
//                 </td>
//               </tr>
//             ))}
//             {clients.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-gray-500">
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
//               currentPage === i + 1 ? "bg-green-500 text-white" : "bg-white"
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

const maskName = (str) => (!str ? "" : str.length <= 2 ? str + "***" : str.slice(0, 2) + "***");
const maskEmailDomain = (email) => {
  if (!email) return "";
  const [user] = email.split("@");
  return user.length <= 3 ? user + "***@gmail.com" : user.slice(0, 3) + "***@gmail.com";
};

export default function GeneralWellness() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 6;

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "2821";

  const [newClient, setNewClient] = useState({ name: "", age: "", email: "", status: "Active" });

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

      const res = await fetch(`http://localhost:5000/api/general-wellness?${query}`);
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
      const res = await fetch("http://localhost:5000/api/general-wellness", {
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
    <div className="relative min-h-screen p-8 overflow-hidden mt-7">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-emerald-100 to-lime-200 animate-gradient-x" />

      <div className="relative z-10">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-6 text-green-800 flex justify-between items-center drop-shadow-sm">
          🌿 General Wellness Clients
          <button
            onClick={() => setShowPasswordModal(true)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            ➕ Add Client
          </button>
        </h1>

        {/* Password Modal */}
        <AnimatePresence>
          {showPasswordModal && !isAuthenticated && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-80"
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
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600 transition"
                  >
                    Unlock
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Client Form */}
        {isAuthenticated && (
          <motion.form
            onSubmit={handleAddClient}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-lg p-6 rounded-xl mb-6 shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={newClient.age}
                onChange={(e) => setNewClient({ ...newClient, age: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <select
                value={newClient.status}
                onChange={(e) => setNewClient({ ...newClient, status: e.target.value })}
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
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Save Client
            </button>
          </motion.form>
        )}

        {/* Controls */}
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Age</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {clients.map((client) => (
                  <motion.tr
                    key={client._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border-t hover:bg-green-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">{maskName(client.name)}</td>
                    <td className="px-4 py-3">{client.age}</td>
                    <td className="px-4 py-3">{maskEmailDomain(client.email)}</td>
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
                    <td className="px-4 py-3"></td>
                  </motion.tr>
                ))}
              </AnimatePresence>
              {clients.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No clients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1 ? "bg-green-500 text-white" : "bg-white"
              } hover:scale-105 transition`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
