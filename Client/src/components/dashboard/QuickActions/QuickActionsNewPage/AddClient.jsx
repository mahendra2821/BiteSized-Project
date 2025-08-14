// // // // // import { useState } from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";

// // // // // export default function AddClient() {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     plan: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Submitted Client:", formData);
// // // // //     alert("🎉 Client added successfully!");
// // // // //     setFormData({ name: "", email: "", phone: "", plan: "" });
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// // // // //       initial={{ opacity: 0, y: 40 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.6 }}
// // // // //     >
// // // // //       <div className="flex items-center gap-2 mb-4 text-blue-600">
// // // // //         <UserPlus size={24} />
// // // // //         <h2 className="text-2xl font-bold">Add New Client</h2>
// // // // //       </div>
// // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // //         <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // // //           <BadgePlus className="text-gray-400 mr-2" size={18} />
// // // // //           <input
// // // // //             type="text"
// // // // //             name="name"
// // // // //             placeholder="Full Name"
// // // // //             value={formData.name}
// // // // //             onChange={handleChange}
// // // // //             className="w-full outline-none"
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // // //           <Mail className="text-gray-400 mr-2" size={18} />
// // // // //           <input
// // // // //             type="email"
// // // // //             name="email"
// // // // //             placeholder="Email Address"
// // // // //             value={formData.email}
// // // // //             onChange={handleChange}
// // // // //             className="w-full outline-none"
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // // //           <Phone className="text-gray-400 mr-2" size={18} />
// // // // //           <input
// // // // //             type="tel"
// // // // //             name="phone"
// // // // //             placeholder="Phone Number"
// // // // //             value={formData.phone}
// // // // //             onChange={handleChange}
// // // // //             className="w-full outline-none"
// // // // //             required
// // // // //           />
// // // // //         </div>
// // // // //         <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // // //           <input
// // // // //             type="text"
// // // // //             name="plan"
// // // // //             placeholder="Subscribed Plan (e.g. Basic, Premium)"
// // // // //             value={formData.plan}
// // // // //             onChange={handleChange}
// // // // //             className="w-full outline-none"
// // // // //           />
// // // // //         </div>
// // // // //         <motion.button
// // // // //           type="submit"
// // // // //           className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// // // // //           whileTap={{ scale: 0.96 }}
// // // // //         >
// // // // //           ➕ Add Client
// // // // //         </motion.button>
// // // // //       </form>
// // // // //     </motion.div>
// // // // //   );
// // // // // }




// // // // // // Let me know if you want to integrate toast notifications (react-toastify) or connect this to a backend API!




// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // export default function AddClient() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     plan: "",
// // // //   });

// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // // //   const [password, setPassword] = useState("");

// // // //   // Replace with secure method in production!
// // // //   const correctPassword = "1234";

// // // //   const handlePasswordSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (password === correctPassword) {
// // // //       setIsAuthenticated(true);
// // // //       toast.success("✅ Access granted!");
// // // //     } else {
// // // //       toast.error("❌ Incorrect password!");
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/form/clients", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       if (!res.ok) {
// // // //         const data = await res.json();
// // // //         throw new Error(data.message || "Submission failed");
// // // //       }

// // // //       const data = await res.json();
// // // //       toast.success(`🎉 Client ${data.client.name} added!`);
// // // //       setFormData({ name: "", email: "", phone: "", plan: "" });
// // // //     } catch (err) {
// // // //       toast.error("❌ " + err.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       className="max-w-md mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.6 }}
// // // //     >
// // // //       <ToastContainer />

// // // //       {!isAuthenticated ? (
// // // //         <form onSubmit={handlePasswordSubmit} className="space-y-4">
// // // //           <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             className="w-full border rounded-md px-3 py-2 outline-none"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             required
// // // //           />
// // // //           <motion.button
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
// // // //             whileTap={{ scale: 0.96 }}
// // // //           >
// // // //             🔓 Unlock Form
// // // //           </motion.button>
// // // //         </form>
// // // //       ) : (
// // // //         <>
// // // //           <div className="flex items-center gap-2 mb-4 text-blue-600">
// // // //             <UserPlus size={24} />
// // // //             <h2 className="text-2xl font-bold">Add New Client</h2>
// // // //           </div>
// // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <BadgePlus className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 placeholder="Full Name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Mail className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Phone className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <input
// // // //                 type="text"
// // // //                 name="plan"
// // // //                 placeholder="Subscribed Plan (e.g. Basic, Premium)"
// // // //                 value={formData.plan}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //               />
// // // //             </div>
// // // //             <motion.button
// // // //               type="submit"
// // // //               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// // // //               whileTap={{ scale: 0.96 }}
// // // //             >
// // // //               ➕ Add Client
// // // //             </motion.button>
// // // //           </form>
// // // //         </>
// // // //       )}
// // // //     </motion.div>
// // // //   );
// // // // }





// // // // import { useState, useEffect } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // export default function AddClient() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     plan: "",
// // // //   });

// // // //   const [clients, setClients] = useState([]); // ✅ Client list state
// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // // //   const [password, setPassword] = useState("");
// // // //   const correctPassword = "1234";

// // // //   // ✅ Fetch clients
// // // //   const fetchClients = async () => {
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/form/clients");
// // // //       const data = await res.json();
// // // //       setClients(data);
// // // //     } catch (err) {
// // // //       toast.error("❌ Failed to load clients");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (isAuthenticated) fetchClients(); // ✅ Load clients once authenticated
// // // //   }, [isAuthenticated]);

// // // //   const handlePasswordSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (password === correctPassword) {
// // // //       setIsAuthenticated(true);
// // // //       toast.success("✅ Access granted!");
// // // //     } else {
// // // //       toast.error("❌ Incorrect password!");
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/form/clients", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       if (!res.ok) {
// // // //         const data = await res.json();
// // // //         throw new Error(data.message || "Submission failed");
// // // //       }

// // // //       const data = await res.json();
// // // //       toast.success(`🎉 Client ${data.client.name} added!`);
// // // //       setFormData({ name: "", email: "", phone: "", plan: "" });
// // // //       fetchClients(); // ✅ Refresh list
// // // //     } catch (err) {
// // // //       toast.error("❌ " + err.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.6 }}
// // // //     >
// // // //       <ToastContainer />

// // // //       {!isAuthenticated ? (
// // // //         <form onSubmit={handlePasswordSubmit} className="space-y-4">
// // // //           <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             className="w-full border rounded-md px-3 py-2 outline-none"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             required
// // // //           />
// // // //           <motion.button
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
// // // //             whileTap={{ scale: 0.96 }}
// // // //           >
// // // //             🔓 Unlock Form
// // // //           </motion.button>
// // // //         </form>
// // // //       ) : (
// // // //         <>
// // // //           <div className="flex items-center gap-2 mb-4 text-blue-600">
// // // //             <UserPlus size={24} />
// // // //             <h2 className="text-2xl font-bold">Add New Client</h2>
// // // //           </div>
// // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <BadgePlus className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 placeholder="Full Name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Mail className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Phone className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <input
// // // //                 type="text"
// // // //                 name="plan"
// // // //                 placeholder="Subscribed Plan (e.g. Basic, Premium)"
// // // //                 value={formData.plan}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //               />
// // // //             </div>
// // // //             <motion.button
// // // //               type="submit"
// // // //               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// // // //               whileTap={{ scale: 0.96 }}
// // // //             >
// // // //               ➕ Add Client
// // // //             </motion.button>
// // // //           </form>

// // // //           {/* ✅ Client List Display */}
// // // //           <div className="mt-10">
// // // //             <h3 className="text-lg font-semibold mb-2">📋 Client List</h3>
// // // //             {clients.length === 0 ? (
// // // //               <p className="text-gray-500">No clients yet.</p>
// // // //             ) : (
// // // //               <ul className="space-y-2">
// // // //                 {clients.map((client) => (
// // // //                   <li
// // // //                     key={client._id}
// // // //                     className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-gray-50"
// // // //                   >
// // // //                     <div>
// // // //                       <p className="font-medium">{client.name}</p>
// // // //                       <p className="text-sm text-gray-600">{client.email} | {client.phone}</p>
// // // //                     </div>
// // // //                     <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             )}
// // // //           </div>
// // // //         </>
// // // //       )}
// // // //     </motion.div>
// // // //   );
// // // // }




// // // // import { useState, useEffect } from "react";
// // // // import { motion } from "framer-motion";
// // // // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// // // // import { toast, ToastContainer } from "react-toastify";
// // // // import { Bar } from "react-chartjs-2";
// // // // import {
// // // //   Chart as ChartJS,
// // // //   BarElement,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   Tooltip,
// // // //   Legend,
// // // // } from "chart.js";

// // // // import "react-toastify/dist/ReactToastify.css";

// // // // ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // // // export default function AddClient() {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     plan: "",
// // // //   });

// // // //   const [clients, setClients] = useState([]);
// // // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // // //   const [password, setPassword] = useState("");
// // // //   const [filter, setFilter] = useState("all");

// // // //   const correctPassword = "2821";

// // // //   // Fetch clients from backend
// // // //   const fetchClients = async () => {
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/form/clients");
// // // //       const data = await res.json();
// // // //       setClients(data);
// // // //     } catch (err) {
// // // //       toast.error("❌ Failed to load clients");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (isAuthenticated) fetchClients();
// // // //   }, [isAuthenticated]);

// // // //   const handlePasswordSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (password === correctPassword) {
// // // //       setIsAuthenticated(true);
// // // //       toast.success("✅ Access granted!");
// // // //     } else {
// // // //       toast.error("❌ Incorrect password!");
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/form/clients", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       if (!res.ok) {
// // // //         const data = await res.json();
// // // //         throw new Error(data.message || "Submission failed");
// // // //       }

// // // //       const data = await res.json();
// // // //       toast.success(`🎉 Client ${data.client.name} added!`);
// // // //       setFormData({ name: "", email: "", phone: "", plan: "" });
// // // //       fetchClients(); // Refresh list
// // // //     } catch (err) {
// // // //       toast.error("❌ " + err.message);
// // // //     }
// // // //   };

// // // //   // 🔍 Filtering logic
// // // //   const filteredClients = clients.filter((client) =>
// // // //     filter === "all" ? true : client.plan?.toLowerCase() === filter
// // // //   );

// // // //   // 📊 Bar chart data
// // // //   const planCounts = clients.reduce(
// // // //     (acc, client) => {
// // // //       const plan = client.plan?.toLowerCase() || "unknown";
// // // //       acc[plan] = (acc[plan] || 0) + 1;
// // // //       return acc;
// // // //     },
// // // //     { basic: 0, premium: 0, elite: 0 }
// // // //   );

// // // //   const chartData = {
// // // //     labels: ["Basic", "Premium", "Elite"],
// // // //     datasets: [
// // // //       {
// // // //         label: "Client Count",
// // // //         data: [planCounts.basic, planCounts.premium, planCounts.elite],
// // // //         backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
// // // //         borderRadius: 8,
// // // //       },
// // // //     ],
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// // // //       initial={{ opacity: 0, y: 40 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.6 }}
// // // //     >
// // // //       <ToastContainer />

// // // //       {!isAuthenticated ? (
// // // //         <form onSubmit={handlePasswordSubmit} className="space-y-4">
// // // //           <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             className="w-full border rounded-md px-3 py-2 outline-none"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             required
// // // //           />
// // // //           <motion.button
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
// // // //             whileTap={{ scale: 0.96 }}
// // // //           >
// // // //             🔓 Unlock Form
// // // //           </motion.button>
// // // //         </form>
// // // //       ) : (
// // // //         <>
// // // //           <div className="flex items-center gap-2 mb-4 text-blue-600">
// // // //             <UserPlus size={24} />
// // // //             <h2 className="text-2xl font-bold">Add New Client</h2>
// // // //           </div>

// // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <BadgePlus className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 placeholder="Full Name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Mail className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <Phone className="text-gray-400 mr-2" size={18} />
// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // // //               <input
// // // //                 type="text"
// // // //                 name="plan"
// // // //                 placeholder="Subscribed Plan (e.g. Basic, Premium)"
// // // //                 value={formData.plan}
// // // //                 onChange={handleChange}
// // // //                 className="w-full outline-none"
// // // //               />
// // // //             </div>
// // // //             <motion.button
// // // //               type="submit"
// // // //               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// // // //               whileTap={{ scale: 0.96 }}
// // // //             >
// // // //               ➕ Add Client
// // // //             </motion.button>
// // // //           </form>

// // // //           {/* 🔍 Filter Dropdown */}
// // // //           <div className="mt-10 mb-4">
// // // //             <label className="text-sm font-medium mr-2">Filter by Plan:</label>
// // // //             <select
// // // //               value={filter}
// // // //               onChange={(e) => setFilter(e.target.value)}
// // // //               className="border px-3 py-1 rounded-md"
// // // //             >
// // // //               <option value="all">All</option>
// // // //               <option value="basic">Basic</option>
// // // //               <option value="premium">Premium</option>
// // // //               <option value="elite">Elite</option>
// // // //             </select>
// // // //           </div>

// // // //           {/* 📋 Client List */}
// // // //           <div>
// // // //             <h3 className="text-lg font-semibold mb-2">📋 Client List</h3>
// // // //             {filteredClients.length === 0 ? (
// // // //               <p className="text-gray-500">No clients to display.</p>
// // // //             ) : (
// // // //               <ul className="space-y-2">
// // // //                 {filteredClients.map((client) => (
// // // //                   <li
// // // //                     key={client._id}
// // // //                     className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-gray-50"
// // // //                   >
// // // //                     <div>
// // // //                       <p className="font-medium">{client.name}</p>
// // // //                       <p className="text-sm text-gray-600">{client.email} | {client.phone}</p>
// // // //                     </div>
// // // //                     <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
// // // //                   </li>
// // // //                 ))}
// // // //               </ul>
// // // //             )}
// // // //           </div>

// // // //           {/* 📊 Bar Chart */}
// // // //           <div className="mt-10">
// // // //             <h3 className="text-lg font-semibold mb-2">📊 Clients by Plan</h3>
// // // //             <Bar data={chartData} />
// // // //           </div>
// // // //         </>
// // // //       )}
// // // //     </motion.div>
// // // //   );
// // // // }




// // // import { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";
// // // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// // // import { toast, ToastContainer } from "react-toastify";
// // // import { Bar } from "react-chartjs-2";
// // // import {
// // //   Chart as ChartJS,
// // //   BarElement,
// // //   CategoryScale,
// // //   LinearScale,
// // //   Tooltip,
// // //   Legend,
// // // } from "chart.js";

// // // import "react-toastify/dist/ReactToastify.css";

// // // ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // // export default function AddClient() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     plan: "",
// // //   });

// // //   const [clients, setClients] = useState([]);
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [password, setPassword] = useState("");
// // //   const [filter, setFilter] = useState("all");

// // //   const correctPassword = "2821";

// // //   // Fetch clients from backend on component mount
// // //   const fetchClients = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/form/clients");
// // //       const data = await res.json();
// // //       setClients(data);
// // //     } catch (err) {
// // //       toast.error("❌ Failed to load clients");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchClients();
// // //   }, []);

// // //   const handlePasswordSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (password === correctPassword) {
// // //       setIsAuthenticated(true);
// // //       toast.success("✅ Access granted!");
// // //     } else {
// // //       toast.error("❌ Incorrect password!");
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/form/clients", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       if (!res.ok) {
// // //         const data = await res.json();
// // //         throw new Error(data.message || "Submission failed");
// // //       }

// // //       const data = await res.json();
// // //       toast.success(`🎉 Client ${data.client.name} added!`);
// // //       setFormData({ name: "", email: "", phone: "", plan: "" });
// // //       fetchClients(); // Refresh list
// // //     } catch (err) {
// // //       toast.error("❌ " + err.message);
// // //     }
// // //   };

// // //   // Filtering logic
// // //   const filteredClients = clients.filter((client) =>
// // //     filter === "all" ? true : client.plan?.toLowerCase() === filter
// // //   );

// // //   // Bar chart data calculation
// // //   const planCounts = clients.reduce(
// // //     (acc, client) => {
// // //       const plan = client.plan?.toLowerCase() || "unknown";
// // //       acc[plan] = (acc[plan] || 0) + 1;
// // //       return acc;
// // //     },
// // //     { basic: 0, premium: 0, elite: 0 }
// // //   );

// // //   const chartData = {
// // //     labels: ["Basic", "Premium", "Elite"],
// // //     datasets: [
// // //       {
// // //         label: "Client Count",
// // //         data: [planCounts.basic, planCounts.premium, planCounts.elite],
// // //         backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
// // //         borderRadius: 8,
// // //       },
// // //     ],
// // //   };

// // //   return (
// // //     <motion.div
// // //       className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// // //       initial={{ opacity: 0, y: 40 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.6 }}
// // //     >
// // //       <ToastContainer />

// // //       {/* Always show Client List and Chart */}
// // //       <div>
// // //         <h3 className="text-lg font-semibold mb-2">📋 Client List</h3>
// // //         {filteredClients.length === 0 ? (
// // //           <p className="text-gray-500">No clients to display.</p>
// // //         ) : (
// // //           <ul className="space-y-2">
// // //             {filteredClients.map((client) => (
// // //               <li
// // //                 key={client._id}
// // //                 className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-gray-50"
// // //               >
// // //                 <div>
// // //                   <p className="font-medium">{client.name}</p>
// // //                   <p className="text-sm text-gray-600">
// // //                     {client.email} | {client.phone}
// // //                   </p>
// // //                 </div>
// // //                 <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         )}
// // //       </div>

// // //       <div className="mt-10">
// // //         <h3 className="text-lg font-semibold mb-2">📊 Clients by Plan</h3>
// // //         <Bar data={chartData} />
// // //       </div>

// // //       {/* Filter dropdown */}
// // //       <div className="mt-10 mb-4">
// // //         <label className="text-sm font-medium mr-2">Filter by Plan:</label>
// // //         <select
// // //           value={filter}
// // //           onChange={(e) => setFilter(e.target.value)}
// // //           className="border px-3 py-1 rounded-md"
// // //         >
// // //           <option value="all">All</option>
// // //           <option value="basic">Basic</option>
// // //           <option value="premium">Premium</option>
// // //           <option value="elite">Elite</option>
// // //         </select>
// // //       </div>

// // //       {/* Lock Add Client form behind password */}
// // //       {!isAuthenticated ? (
// // //         <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-10">
// // //           <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             className="w-full border rounded-md px-3 py-2 outline-none"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             required
// // //           />
// // //           <motion.button
// // //             type="submit"
// // //             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
// // //             whileTap={{ scale: 0.96 }}
// // //           >
// // //             🔓 Unlock Form
// // //           </motion.button>
// // //         </form>
// // //       ) : (
// // //         <>
// // //           <div className="flex items-center gap-2 mb-4 text-blue-600">
// // //             <UserPlus size={24} />
// // //             <h2 className="text-2xl font-bold">Add New Client</h2>
// // //           </div>

// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // //               <BadgePlus className="text-gray-400 mr-2" size={18} />
// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Full Name"
// // //                 value={formData.name}
// // //                 onChange={handleChange}
// // //                 className="w-full outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // //               <Mail className="text-gray-400 mr-2" size={18} />
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 className="w-full outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // //               <Phone className="text-gray-400 mr-2" size={18} />
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //                 className="w-full outline-none"
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// // //               <input
// // //                 type="text"
// // //                 name="plan"
// // //                 placeholder="Subscribed Plan (e.g. Basic, Premium)"
// // //                 value={formData.plan}
// // //                 onChange={handleChange}
// // //                 className="w-full outline-none"
// // //               />
// // //             </div>
// // //             <motion.button
// // //               type="submit"
// // //               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// // //               whileTap={{ scale: 0.96 }}
// // //             >
// // //               ➕ Add Client
// // //             </motion.button>
// // //           </form>
// // //         </>
// // //       )}
// // //     </motion.div>
// // //   );
// // // }




// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// // import { toast, ToastContainer } from "react-toastify";
// // import { Bar } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   BarElement,
// //   CategoryScale,
// //   LinearScale,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";

// // import "react-toastify/dist/ReactToastify.css";

// // ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // // Mask name: first letter + stars
// // function maskName(name) {
// //   if (!name) return "User";
// //   return name[0] + "*".repeat(Math.max(name.length - 1, 0));
// // }

// // // Mask email: first letter + stars before @, mask domain except TLD
// // function maskEmail(email) {
// //   if (!email) return "";
// //   const [user, domain] = email.split("@");
// //   if (!user || !domain) return "****";
// //   const maskedUser = user[0] + "*".repeat(Math.max(user.length - 1, 0));
// //   const domainParts = domain.split(".");
// //   const maskedDomain = "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
// //   return maskedUser + "@" + maskedDomain;
// // }



// // function maskPhone(phone) {
// //   if (!phone) return "";
// //   const last3 = phone.slice(-3);
// //   const masked = "*".repeat(Math.max(phone.length - 3, 0));
// //   return masked + last3;
// // }

// // export default function AddClient() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     plan: "",
// //   });

// //   const [clients, setClients] = useState([]);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [password, setPassword] = useState("");
// //   const [filter, setFilter] = useState("all");

// //   const correctPassword = "2821";

// //   const fetchClients = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/form/clients");
// //       const data = await res.json();
// //       setClients(data);
// //     } catch (err) {
// //       toast.error("❌ Failed to load clients");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchClients();
// //   }, []);

// //   const handlePasswordSubmit = (e) => {
// //     e.preventDefault();
// //     if (password === correctPassword) {
// //       setIsAuthenticated(true);
// //       toast.success("✅ Access granted!");
// //     } else {
// //       toast.error("❌ Incorrect password!");
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await fetch("http://localhost:5000/api/form/clients", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       if (!res.ok) {
// //         const data = await res.json();
// //         throw new Error(data.message || "Submission failed");
// //       }

// //       const data = await res.json();
// //       toast.success(`🎉 Client ${data.client.name} added!`);
// //       setFormData({ name: "", email: "", phone: "", plan: "" });
// //       fetchClients();
// //     } catch (err) {
// //       toast.error("❌ " + err.message);
// //     }
// //   };

// //   const filteredClients = clients.filter((client) =>
// //     filter === "all" ? true : client.plan?.toLowerCase() === filter
// //   );

// //   const planCounts = clients.reduce(
// //     (acc, client) => {
// //       const plan = client.plan?.toLowerCase() || "unknown";
// //       acc[plan] = (acc[plan] || 0) + 1;
// //       return acc;
// //     },
// //     { basic: 0, premium: 0, elite: 0 }
// //   );

// //   const chartData = {
// //     labels: ["Basic", "Premium", "Elite"],
// //     datasets: [
// //       {
// //         label: "Client Count",
// //         data: [planCounts.basic, planCounts.premium, planCounts.elite],
// //         backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
// //         borderRadius: 8,
// //       },
// //     ],
// //   };

// //   return (
// //     <motion.div
// //       className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
// //       initial={{ opacity: 0, y: 40 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6 }}
// //     >
// //       <ToastContainer />

// //       {/* Client List and Chart */}
// //       <div>
// //         <h3 className="text-lg font-semibold mb-2">📋 Client List</h3>
// //         {filteredClients.length === 0 ? (
// //           <p className="text-gray-500">No clients to display.</p>
// //         ) : (
// //           <ul className="space-y-2">
// //             {filteredClients.map((client) => (
// //               <li
// //                 key={client._id}
// //                 className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-gray-50"
// //               >
// //                 <div>
// //                   <p className="font-medium">{maskName(client.name)}</p>
// //                   <p className="text-sm text-gray-600">
// //                     {maskEmail(client.email)} | {maskPhone(client.phone)}
// //                   </p>
// //                 </div>
// //                 <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>

// //       <div className="mt-10">
// //         <h3 className="text-lg font-semibold mb-2">📊 Clients by Plan</h3>
// //         <Bar data={chartData} />
// //       </div>

// //       {/* Filter dropdown */}
// //       <div className="mt-10 mb-4">
// //         <label className="text-sm font-medium mr-2">Filter by Plan:</label>
// //         <select
// //           value={filter}
// //           onChange={(e) => setFilter(e.target.value)}
// //           className="border px-3 py-1 rounded-md"
// //         >
// //           <option value="all">All</option>
// //           <option value="basic">Basic</option>
// //           <option value="premium">Premium</option>
// //           <option value="elite">Elite</option>
// //         </select>
// //       </div>

// //       {/* Password protected form */}
// //       {!isAuthenticated ? (
// //         <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-10">
// //           <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="w-full border rounded-md px-3 py-2 outline-none"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <motion.button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
// //             whileTap={{ scale: 0.96 }}
// //           >
// //             🔓 Unlock Form
// //           </motion.button>
// //         </form>
// //       ) : (
// //         <>
// //           <div className="flex items-center gap-2 mb-4 text-blue-600">
// //             <UserPlus size={24} />
// //             <h2 className="text-2xl font-bold">Add New Client</h2>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// //               <BadgePlus className="text-gray-400 mr-2" size={18} />
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full outline-none"
// //                 required
// //               />
// //             </div>
// //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// //               <Mail className="text-gray-400 mr-2" size={18} />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full outline-none"
// //                 required
// //               />
// //             </div>
// //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// //               <Phone className="text-gray-400 mr-2" size={18} />
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className="w-full outline-none"
// //                 required
// //               />
// //             </div>
// //             <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
// //               <input
// //                 type="text"
// //                 name="plan"
// //                 placeholder="Subscribed Plan (e.g. Basic, Premium)"
// //                 value={formData.plan}
// //                 onChange={handleChange}
// //                 className="w-full outline-none"
// //               />
// //             </div>
// //             <motion.button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
// //               whileTap={{ scale: 0.96 }}
// //             >
// //               ➕ Add Client
// //             </motion.button>
// //           </form>
// //         </>
// //       )}
// //     </motion.div>
// //   );
// // }





// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "react-toastify/dist/ReactToastify.css";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// // Mask helpers
// function maskName(name) {
//   return name ? name[0] + "*".repeat(name.length - 1) : "User";
// }
// function maskEmail(email) {
//   if (!email) return "";
//   const [user, domain] = email.split("@");
//   const maskedUser = user[0] + "*".repeat(user.length - 1);
//   const domainParts = domain.split(".");
//   return maskedUser + "@" + "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
// }
// function maskPhone(phone) {
//   if (!phone) return "";
//   const last3 = phone.slice(-3);
//   return "*".repeat(phone.length - 3) + last3;
// }

// export default function AddClient() {
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", plan: "" });
//   const [clients, setClients] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [filter, setFilter] = useState("all");
//   const correctPassword = "2821";

//   const fetchClients = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/form/clients");
//       const data = await res.json();
//       setClients(data);
//     } catch {
//       toast.error("❌ Failed to load clients");
//     }
//   };

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (password === correctPassword) {
//       setIsAuthenticated(true);
//       toast.success("✅ Access granted!");
//     } else {
//       toast.error("❌ Incorrect password!");
//     }
//   };

//   const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/form/clients", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (!res.ok) throw new Error("Submission failed");
//       const data = await res.json();
//       toast.success(`🎉 Client ${data.client.name} added!`);
//       setFormData({ name: "", email: "", phone: "", plan: "" });
//       fetchClients();
//     } catch (err) {
//       toast.error("❌ " + err.message);
//     }
//   };

//   const filteredClients = clients.filter((c) => filter === "all" || c.plan?.toLowerCase() === filter);

//   const planCounts = clients.reduce(
//     (acc, c) => {
//       const plan = c.plan?.toLowerCase() || "unknown";
//       acc[plan] = (acc[plan] || 0) + 1;
//       return acc;
//     },
//     { basic: 0, premium: 0, elite: 0 }
//   );

//   const chartData = {
//     labels: ["Basic", "Premium", "Elite"],
//     datasets: [
//       {
//         label: "Client Count",
//         data: [planCounts.basic, planCounts.premium, planCounts.elite],
//         backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
//         borderRadius: 8,
//       },
//     ],
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
//       style={{
//         background: "radial-gradient(circle at top left, #d4fcd4, #f3fff3)",
//       }}
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-2 h-2 bg-green-300 rounded-full absolute"
//             initial={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: 0.6,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.6, 1, 0.6],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         className="max-w-xl w-full relative z-10 p-6 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-lg"
//         style={{
//           background: "rgba(255,255,255,0.75)",
//         }}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <ToastContainer />
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           Client Management
//         </h2>

//         {/* Client List */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">📋 Client List</h3>
//           {filteredClients.length === 0 ? (
//             <p className="text-gray-500">No clients to display.</p>
//           ) : (
//             <ul className="space-y-2">
//               {filteredClients.map((client) => (
//                 <motion.li
//                   key={client._id}
//                   className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-white/70 hover:shadow-md transition"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div>
//                     <p className="font-medium">{maskName(client.name)}</p>
//                     <p className="text-sm text-gray-600">
//                       {maskEmail(client.email)} | {maskPhone(client.phone)}
//                     </p>
//                   </div>
//                   <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
//                 </motion.li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Chart */}
//         <div className="mt-10">
//           <h3 className="text-lg font-semibold mb-2">📊 Clients by Plan</h3>
//           <Bar data={chartData} />
//         </div>

//         {/* Filter */}
//         <div className="mt-10 mb-4">
//           <label className="text-sm font-medium mr-2">Filter by Plan:</label>
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border px-3 py-1 rounded-md"
//           >
//             <option value="all">All</option>
//             <option value="basic">Basic</option>
//             <option value="premium">Premium</option>
//             <option value="elite">Elite</option>
//           </select>
//         </div>

//         {/* Password Form */}
//         {!isAuthenticated ? (
//           <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-10">
//             <h2 className="text-xl font-semibold text-center mb-2">🔒 Enter Password</h2>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border rounded-md px-3 py-2 outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <motion.button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
//               whileTap={{ scale: 0.96 }}
//             >
//               🔓 Unlock Form
//             </motion.button>
//           </form>
//         ) : (
//           <>
//             <div className="flex items-center gap-2 mb-4 text-green-700">
//               <UserPlus size={24} />
//               <h2 className="text-2xl font-bold">Add New Client</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {[
//                 { name: "name", placeholder: "Full Name", icon: <BadgePlus /> },
//                 { name: "email", placeholder: "Email Address", icon: <Mail /> },
//                 { name: "phone", placeholder: "Phone Number", icon: <Phone /> },
//                 { name: "plan", placeholder: "Subscribed Plan (Basic, Premium...)" },
//               ].map((field, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-500 bg-white/70"
//                 >
//                   {field.icon && <span className="text-gray-400 mr-2">{field.icon}</span>}
//                   <input
//                     type={field.name === "email" ? "email" : "text"}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     value={formData[field.name]}
//                     onChange={handleChange}
//                     className="w-full outline-none bg-transparent"
//                     required={field.name !== "plan"}
//                   />
//                 </div>
//               ))}
//               <motion.button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 rounded-md font-semibold shadow hover:bg-green-700 transition"
//                 whileTap={{ scale: 0.96 }}
//               >
//                 ➕ Add Client
//               </motion.button>
//             </form>
//           </>
//         )}
//       </motion.div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Mask helpers
function maskName(name) {
  return name ? name[0] + "*".repeat(name.length - 1) : "User";
}
function maskEmail(email) {
  if (!email) return "";
  const [user, domain] = email.split("@");
  const maskedUser = user[0] + "*".repeat(user.length - 1);
  const domainParts = domain.split(".");
  return maskedUser + "@" + "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
}
function maskPhone(phone) {
  if (!phone) return "";
  const last3 = phone.slice(-3);
  return "*".repeat(phone.length - 3) + last3;
}


export default function AddClient() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", plan: "" });
  const [clients, setClients] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [filter, setFilter] = useState("all");
  const correctPassword = "2821";

  const fetchClients = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/form/clients");
      const data = await res.json();
      setClients(data);
    } catch {
      toast.error("❌ Failed to load clients");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      toast.success("✅ Access granted!");
    } else {
      toast.error("❌ Incorrect password!");
    }
  };

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/form/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();
      toast.success(`🎉 Client ${data.client.name} added!`);
      setFormData({ name: "", email: "", phone: "", plan: "" });
      fetchClients();
    } catch (err) {
      toast.error("❌ " + err.message);
    }
  };

  const filteredClients = clients.filter((c) => filter === "all" || c.plan?.toLowerCase() === filter);

  const planCounts = clients.reduce(
    (acc, c) => {
      const plan = c.plan?.toLowerCase() || "unknown";
      acc[plan] = (acc[plan] || 0) + 1;
      return acc;
    },
    { basic: 0, premium: 0, elite: 0 }
  );

  const chartData = {
    labels: ["Basic", "Premium", "Elite"],
    datasets: [
      {
        label: "Client Count",
        data: [planCounts.basic, planCounts.premium, planCounts.elite],
        backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6 mt-7 relative overflow-hidden"
      style={{ background: "radial-gradient(circle at top left, #d4fcd4, #f3fff3)" }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-green-300 rounded-full absolute"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <ToastContainer />

      <motion.div
        className="max-w-3xl w-full relative z-10 p-6 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-lg mb-6"
        style={{ background: "rgba(255,255,255,0.75)" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Client Management</h2>

        {/* Filter */}
        <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
          <div>
            <label className="text-sm font-medium mr-2">Filter by Plan:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border px-3 py-1 rounded-md"
            >
              <option value="all">All</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="elite">Elite</option>
            </select>
          </div>

          {!isAuthenticated && (
            <form onSubmit={handlePasswordSubmit} className="flex gap-2">
              <input
                type="password"
                placeholder="Password"
                className="border rounded-md px-3 py-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
              >
                🔓 Unlock
              </button>
            </form>
          )}
        </div>

        {/* Client List */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">📋 Client List</h3>
          {filteredClients.length === 0 ? (
            <p className="text-gray-500">No clients to display.</p>
          ) : (
            <ul className="space-y-2">
              {filteredClients.map((client) => (
                <motion.li
                  key={client._id}
                  className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-white/70 hover:shadow-md transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <p className="font-medium">{maskName(client.name)}</p>
                    <p className="text-sm text-gray-600">
                      {maskEmail(client.email)} | {maskPhone(client.phone)}
                    </p>
                  </div>
                  <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Chart */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-green-700">📊 Clients by Plan</h3>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-md">
            <Bar data={chartData} />
          </div>
        </div>

        {/* Add Client Form */}
        {isAuthenticated && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-green-700 mb-4">➕ Add New Client</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "phone", "plan"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-500"
                  required={field !== "plan"}
                />
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md font-semibold shadow hover:bg-green-700 transition"
              >
                Add Client
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
