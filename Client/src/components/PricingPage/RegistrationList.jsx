// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "axios";

// // // // // // // // // export default function RegistrationList() {
// // // // // // // // //   const [registrations, setRegistrations] = useState([]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     axios.get("http://localhost:5000/api/registrations")
// // // // // // // // //       .then(res => setRegistrations(res.data))
// // // // // // // // //       .catch(err => console.error(err));
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <section className="p-8">
// // // // // // // // //       <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
// // // // // // // // //       <table className="border w-full">
// // // // // // // // //         <thead>
// // // // // // // // //           <tr className="bg-gray-100">
// // // // // // // // //             <th className="border p-2">Name</th>
// // // // // // // // //             <th className="border p-2">Email</th>
// // // // // // // // //             <th className="border p-2">Phone</th>
// // // // // // // // //           </tr>
// // // // // // // // //         </thead>
// // // // // // // // //         <tbody>
// // // // // // // // //           {registrations.map((reg, index) => (
// // // // // // // // //             <tr key={index}>
// // // // // // // // //               <td className="border p-2">{reg.name}</td>
// // // // // // // // //               <td className="border p-2">{reg.email}</td>
// // // // // // // // //               <td className="border p-2">{reg.phone}</td>
// // // // // // // // //             </tr>
// // // // // // // // //           ))}
// // // // // // // // //         </tbody>
// // // // // // // // //       </table>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // // // RegistrationList.jsx
// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import emailjs from "@emailjs/browser";

// // // // // // // // // export default function RegistrationList() {
// // // // // // // // //   const [registrations, setRegistrations] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // // // // // //   // Change to your secure admin password
// // // // // // // // //   const adminPassword = "1234";

// // // // // // // // //   // Your admin email (where notifications are sent)
// // // // // // // // //   const adminEmail = "youradmin@email.com";

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchFromAPI();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchFromAPI = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // // // // // // //       const apiData = await res.json();

// // // // // // // // //       // Merge with localStorage data
// // // // // // // // //       const savedData = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // // // // // // //       const merged = apiData.map((user) => ({
// // // // // // // // //         id: user.id,
// // // // // // // // //         name: user.name,
// // // // // // // // //         email: user.email,
// // // // // // // // //         phone: user.phone,
// // // // // // // // //         planName: savedData[user.id]?.planName || "Basic Plan",
// // // // // // // // //         paymentStatus: savedData[user.id]?.paymentStatus || "Pending",
// // // // // // // // //       }));

// // // // // // // // //       setRegistrations(merged);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const saveToLocalStorage = (data) => {
// // // // // // // // //     const storageData = {};
// // // // // // // // //     data.forEach((item) => {
// // // // // // // // //       storageData[item.id] = {
// // // // // // // // //         planName: item.planName,
// // // // // // // // //         paymentStatus: item.paymentStatus,
// // // // // // // // //       };
// // // // // // // // //     });
// // // // // // // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // // // // // // //   };

// // // // // // // // //   const changeStatus = async (reg, status) => {
// // // // // // // // //     if (!isAdmin) return;

// // // // // // // // //     try {
// // // // // // // // //       setLoading(true);

// // // // // // // // //       // Update only the clicked record
// // // // // // // // //       const updatedList = registrations.map((r) =>
// // // // // // // // //         r.id === reg.id ? { ...r, paymentStatus: status } : r
// // // // // // // // //       );
// // // // // // // // //       setRegistrations(updatedList);

// // // // // // // // //       // Save to localStorage
// // // // // // // // //       saveToLocalStorage(updatedList);

// // // // // // // // //       // Send email to admin
// // // // // // // // //       await emailjs.send(
// // // // // // // // //         "service_4fag1fc", // your EmailJS service ID
// // // // // // // // //         "template_kcmknfc", // your EmailJS template ID
// // // // // // // // //         {
// // // // // // // // //           to_email: adminEmail,
// // // // // // // // //           user_name: reg.name,
// // // // // // // // //           user_email: reg.email,
// // // // // // // // //           plan_name: reg.planName,
// // // // // // // // //           status: status,
// // // // // // // // //         },
// // // // // // // // //         "rosi3VkNC9rRXTHQj" // your EmailJS public key
// // // // // // // // //       );

// // // // // // // // //       alert(`Status updated to "${status}" for ${reg.name} and email sent to admin`);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("Error:", err);
// // // // // // // // //       alert("Failed to update status or send email");
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleAdminLogin = () => {
// // // // // // // // //     const pass = prompt("Enter admin password:");
// // // // // // // // //     if (pass === adminPassword) {
// // // // // // // // //       setIsAdmin(true);
// // // // // // // // //     } else {
// // // // // // // // //       alert("Incorrect password!");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section className="p-8">
// // // // // // // // //       <h2 className="text-2xl font-bold mb-4 flex justify-between items-center">
// // // // // // // // //         Registered Users
// // // // // // // // //         {!isAdmin && (
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleAdminLogin}
// // // // // // // // //             className="bg-blue-600 text-white px-3 py-1 rounded"
// // // // // // // // //           >
// // // // // // // // //             Admin Login
// // // // // // // // //           </button>
// // // // // // // // //         )}
// // // // // // // // //       </h2>

// // // // // // // // //       <div className="overflow-x-auto">
// // // // // // // // //         <table className="min-w-full border">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr className="bg-gray-100">
// // // // // // // // //               <th className="p-2 border">Name</th>
// // // // // // // // //               <th className="p-2 border">Email</th>
// // // // // // // // //               <th className="p-2 border">Phone</th>
// // // // // // // // //               <th className="p-2 border">Plan</th>
// // // // // // // // //               <th className="p-2 border">Status</th>
// // // // // // // // //               <th className="p-2 border">Actions</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>

// // // // // // // // //           <tbody>
// // // // // // // // //             {registrations.map((reg) => (
// // // // // // // // //               <tr key={reg.id} className="text-sm">
// // // // // // // // //                 <td className="p-2 border">{reg.name}</td>
// // // // // // // // //                 <td className="p-2 border">{reg.email}</td>
// // // // // // // // //                 <td className="p-2 border">{reg.phone}</td>
// // // // // // // // //                 <td className="p-2 border">{reg.planName}</td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   <span
// // // // // // // // //                     className={`px-2 py-1 rounded text-white ${
// // // // // // // // //                       reg.paymentStatus === "Done"
// // // // // // // // //                         ? "bg-green-600"
// // // // // // // // //                         : reg.paymentStatus === "Processing"
// // // // // // // // //                         ? "bg-yellow-500"
// // // // // // // // //                         : reg.paymentStatus === "Not Completed"
// // // // // // // // //                         ? "bg-red-600"
// // // // // // // // //                         : "bg-gray-400"
// // // // // // // // //                     }`}
// // // // // // // // //                   >
// // // // // // // // //                     {reg.paymentStatus}
// // // // // // // // //                   </span>
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="p-2 border">
// // // // // // // // //                   {isAdmin ? (
// // // // // // // // //                     <div className="flex gap-2">
// // // // // // // // //                       <button
// // // // // // // // //                         disabled={loading}
// // // // // // // // //                         onClick={() => changeStatus(reg, "Done")}
// // // // // // // // //                         className="bg-green-600 text-white px-2 py-1 rounded"
// // // // // // // // //                       >
// // // // // // // // //                         Done
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         disabled={loading}
// // // // // // // // //                         onClick={() => changeStatus(reg, "Processing")}
// // // // // // // // //                         className="bg-yellow-500 text-white px-2 py-1 rounded"
// // // // // // // // //                       >
// // // // // // // // //                         Processing
// // // // // // // // //                       </button>
// // // // // // // // //                       <button
// // // // // // // // //                         disabled={loading}
// // // // // // // // //                         onClick={() => changeStatus(reg, "Not Completed")}
// // // // // // // // //                         className="bg-red-600 text-white px-2 py-1 rounded"
// // // // // // // // //                       >
// // // // // // // // //                         Not Completed
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   ) : (
// // // // // // // // //                     reg.paymentStatus
// // // // // // // // //                   )}
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //             ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }




// // // // // // // // // RegistrationList.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import emailjs from "@emailjs/browser";

// // // // // // // // /**
// // // // // // // //  * Requirements:
// // // // // // // //  * 1) npm install @emailjs/browser
// // // // // // // //  * 2) Create EmailJS service & template, then fill SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY below
// // // // // // // //  * 3) Backend endpoint (GET) http://localhost:5000/api/registrations should return an array of users
// // // // // // // //  *    each user must include either "_id" or "id" (this component handles both).
// // // // // // // //  */

// // // // // // // // /* ========== CONFIG - replace with your EmailJS values ========== */
// // // // // // // // const SERVICE_ID = "service_4fag1fc";       // e.g. "service_abc123"
// // // // // // // // const TEMPLATE_ID = "template_kcmknfc";     // e.g. "template_xyz789"
// // // // // // // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";       // e.g. "user_AbC123"
// // // // // // // // /* ================================================================= */







// // // // // // // // const ADMIN_PASSWORD = "2821"; // change if you want different admin password

// // // // // // // // export default function RegistrationList() {
// // // // // // // //   const [registrations, setRegistrations] = useState([]);
// // // // // // // //   const [loadingUid, setLoadingUid] = useState(null); // uid of row currently processing
// // // // // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchFromAPI();
// // // // // // // //   }, []);

// // // // // // // //   // Fetch users from API and merge with localStorage saved plan/status
// // // // // // // //   const fetchFromAPI = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // // // // // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // // // // // // //       const apiData = await res.json();

// // // // // // // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // // // // // //       // normalise and merge: ensure a unique uid for each record
// // // // // // // //       const merged = apiData.map((user, idx) => {
// // // // // // // //         const uid = user._id || user.id || `local-${idx}`;
// // // // // // // //         return {
// // // // // // // //           uid,
// // // // // // // //           name: user.name || "",
// // // // // // // //           email: user.email || "",
// // // // // // // //           phone: user.phone || "",
// // // // // // // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // // // // // // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // // // // // // //         };
// // // // // // // //       });

// // // // // // // //       setRegistrations(merged);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("fetchFromAPI error:", err);
// // // // // // // //       // fallback: load empty
// // // // // // // //       setRegistrations([]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Save only the plan/status mapping keyed by uid
// // // // // // // //   const saveToLocalStorage = (list) => {
// // // // // // // //     const storageData = {};
// // // // // // // //     list.forEach((item) => {
// // // // // // // //       storageData[item.uid] = {
// // // // // // // //         planName: item.planName,
// // // // // // // //         paymentStatus: item.paymentStatus,
// // // // // // // //       };
// // // // // // // //     });
// // // // // // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // // // // // //   };

// // // // // // // //   // Change status for only one row and send email to that user's email
// // // // // // // //   const changeStatus = async (uid, status) => {
// // // // // // // //     if (!isAdmin) {
// // // // // // // //       alert("Admin required to change status");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       setLoadingUid(uid);

// // // // // // // //       // update only the clicked row in state
// // // // // // // //       const updated = registrations.map((r) =>
// // // // // // // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // // // // // // //       );
// // // // // // // //       setRegistrations(updated);

// // // // // // // //       // persist locally
// // // // // // // //       saveToLocalStorage(updated);

// // // // // // // //       // find the updated record (to send email)
// // // // // // // //       const target = updated.find((r) => r.uid === uid);
// // // // // // // //       if (!target?.email) {
// // // // // // // //         alert("User has no email; cannot send notification.");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       // send email via EmailJS to the USER (target.email)
// // // // // // // //       // Template should use variables: user_name, user_email, plan_name, status
// // // // // // // //       await emailjs.send(
// // // // // // // //         SERVICE_ID,
// // // // // // // //         TEMPLATE_ID,
// // // // // // // //         {
// // // // // // // //           user_name: target.name,
// // // // // // // //           user_email: target.email,
// // // // // // // //           plan_name: target.planName,
// // // // // // // //           status: status,
// // // // // // // //         },
// // // // // // // //         PUBLIC_KEY
// // // // // // // //       );

// // // // // // // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("changeStatus error:", err);
// // // // // // // //       alert("Failed to update status or send email. Check console for details.");
// // // // // // // //     } finally {
// // // // // // // //       setLoadingUid(null);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleAdminLogin = () => {
// // // // // // // //     const pass = prompt("Enter admin password:");
// // // // // // // //     if (pass === ADMIN_PASSWORD) {
// // // // // // // //       setIsAdmin(true);
// // // // // // // //       alert("Admin unlocked");
// // // // // // // //     } else {
// // // // // // // //       alert("Incorrect password");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section className="p-8">
// // // // // // // //       <div className="flex items-center justify-between mb-6">
// // // // // // // //         <h2 className="text-2xl font-bold">Registered Users</h2>
// // // // // // // //         {!isAdmin ? (
// // // // // // // //           <button
// // // // // // // //             onClick={handleAdminLogin}
// // // // // // // //             className="bg-blue-600 text-white px-3 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Admin Login
// // // // // // // //           </button>
// // // // // // // //         ) : (
// // // // // // // //           <span className="text-sm px-3 py-2 rounded bg-green-100 text-green-800">Admin mode</span>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       <div className="overflow-x-auto">
// // // // // // // //         <table className="min-w-full border">
// // // // // // // //           <thead>
// // // // // // // //             <tr className="bg-gray-100">
// // // // // // // //               <th className="p-2 border">Name</th>
// // // // // // // //               <th className="p-2 border">Email</th>
// // // // // // // //               <th className="p-2 border">Phone</th>
// // // // // // // //               <th className="p-2 border">Plan</th>
// // // // // // // //               <th className="p-2 border">Status</th>
// // // // // // // //               <th className="p-2 border">Actions</th>
// // // // // // // //             </tr>
// // // // // // // //           </thead>
// // // // // // // //           <tbody>
// // // // // // // //             {registrations.length === 0 && (
// // // // // // // //               <tr>
// // // // // // // //                 <td colSpan={6} className="p-4 text-center text-gray-500">
// // // // // // // //                   No registrations found.
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //             )}

// // // // // // // //             {registrations.map((reg) => (
// // // // // // // //               <tr key={reg.uid} className="text-sm">
// // // // // // // //                 <td className="p-2 border">{reg.name}</td>
// // // // // // // //                 <td className="p-2 border">{reg.email}</td>
// // // // // // // //                 <td className="p-2 border">{reg.phone}</td>
// // // // // // // //                 <td className="p-2 border">{reg.planName}</td>
// // // // // // // //                 <td className="p-2 border">
// // // // // // // //                   <span
// // // // // // // //                     className={`px-2 py-1 rounded text-white ${
// // // // // // // //                       reg.paymentStatus === "Done"
// // // // // // // //                         ? "bg-green-600"
// // // // // // // //                         : reg.paymentStatus === "Processing"
// // // // // // // //                         ? "bg-yellow-500"
// // // // // // // //                         : reg.paymentStatus === "Not Completed"
// // // // // // // //                         ? "bg-red-600"
// // // // // // // //                         : "bg-gray-400"
// // // // // // // //                     }`}
// // // // // // // //                   >
// // // // // // // //                     {reg.paymentStatus}
// // // // // // // //                   </span>
// // // // // // // //                 </td>
// // // // // // // //                 <td className="p-2 border">
// // // // // // // //                   {isAdmin ? (
// // // // // // // //                     <div className="flex gap-2">
// // // // // // // //                       <button
// // // // // // // //                         disabled={loadingUid !== null}
// // // // // // // //                         onClick={() => changeStatus(reg.uid, "Done")}
// // // // // // // //                         className="bg-green-600 text-white px-2 py-1 rounded"
// // // // // // // //                       >
// // // // // // // //                         {loadingUid === reg.uid ? "..." : "Done"}
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         disabled={loadingUid !== null}
// // // // // // // //                         onClick={() => changeStatus(reg.uid, "Processing")}
// // // // // // // //                         className="bg-yellow-500 text-white px-2 py-1 rounded"
// // // // // // // //                       >
// // // // // // // //                         {loadingUid === reg.uid ? "..." : "Processing"}
// // // // // // // //                       </button>
// // // // // // // //                       <button
// // // // // // // //                         disabled={loadingUid !== null}
// // // // // // // //                         onClick={() => changeStatus(reg.uid, "Not Completed")}
// // // // // // // //                         className="bg-red-600 text-white px-2 py-1 rounded"
// // // // // // // //                       >
// // // // // // // //                         {loadingUid === reg.uid ? "..." : "Not Completed"}
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   ) : (
// // // // // // // //                     <span className="text-gray-600">—</span>
// // // // // // // //                   )}
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //             ))}
// // // // // // // //           </tbody>
// // // // // // // //         </table>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }






// // // // // // // // RegistrationList.jsx
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import emailjs from "@emailjs/browser";

// // // // // // // /* ========== CONFIG - replace with your EmailJS values ========== */
// // // // // // // const SERVICE_ID = "service_4fag1fc"; // your EmailJS service ID
// // // // // // // const TEMPLATE_ID = "template_kcmknfc"; // your EmailJS template ID
// // // // // // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj"; // your EmailJS public key
// // // // // // // /* ================================================================= */

// // // // // // // const ADMIN_PASSWORD = "2821"; // change if you want a different admin password

// // // // // // // export default function RegistrationList() {
// // // // // // //   const [registrations, setRegistrations] = useState([]);
// // // // // // //   const [loadingUid, setLoadingUid] = useState(null); // uid of row currently processing
// // // // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     fetchFromAPI();
// // // // // // //   }, []);

// // // // // // //   const fetchFromAPI = async () => {
// // // // // // //     try {
// // // // // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // // // // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // // // // // //       const apiData = await res.json();
// // // // // // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // // // // //       const merged = apiData.map((user, idx) => {
// // // // // // //         const uid = user._id || user.id || `local-${idx}`;
// // // // // // //         return {
// // // // // // //           uid,
// // // // // // //           name: user.name || "",
// // // // // // //           email: user.email || "",
// // // // // // //           phone: user.phone || "",
// // // // // // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // // // // // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // // // // // //         };
// // // // // // //       });

// // // // // // //       setRegistrations(merged);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("fetchFromAPI error:", err);
// // // // // // //       setRegistrations([]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const saveToLocalStorage = (list) => {
// // // // // // //     const storageData = {};
// // // // // // //     list.forEach((item) => {
// // // // // // //       storageData[item.uid] = {
// // // // // // //         planName: item.planName,
// // // // // // //         paymentStatus: item.paymentStatus,
// // // // // // //       };
// // // // // // //     });
// // // // // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // // // // //   };

// // // // // // //   const changeStatus = async (uid, status) => {
// // // // // // //     if (!isAdmin) {
// // // // // // //       alert("Admin required to change status");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       setLoadingUid(uid);

// // // // // // //       const updated = registrations.map((r) =>
// // // // // // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // // // // // //       );
// // // // // // //       setRegistrations(updated);
// // // // // // //       saveToLocalStorage(updated);

// // // // // // //       const target = updated.find((r) => r.uid === uid);
// // // // // // //       if (!target?.email) {
// // // // // // //         alert("User has no email; cannot send notification.");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       await emailjs.send(
// // // // // // //         SERVICE_ID,
// // // // // // //         TEMPLATE_ID,
// // // // // // //         {
// // // // // // //           user_name: target.name,
// // // // // // //           user_email: target.email,
// // // // // // //           plan_name: target.planName,
// // // // // // //           status: status,
// // // // // // //         },
// // // // // // //         PUBLIC_KEY
// // // // // // //       );

// // // // // // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("changeStatus error:", err);
// // // // // // //       alert("Failed to update status or send email. Check console for details.");
// // // // // // //     } finally {
// // // // // // //       setLoadingUid(null);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleAdminLogin = () => {
// // // // // // //     const pass = prompt("Enter admin password:");
// // // // // // //     if (pass === ADMIN_PASSWORD) {
// // // // // // //       setIsAdmin(true);
// // // // // // //       alert("Admin unlocked");
// // // // // // //     } else {
// // // // // // //       alert("Incorrect password");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section className="p-4 sm:p-8">
// // // // // // //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// // // // // // //         <h2 className="text-2xl font-bold mb-3 sm:mb-0">Registered Users</h2>
// // // // // // //         {!isAdmin ? (
// // // // // // //           <button
// // // // // // //             onClick={handleAdminLogin}
// // // // // // //             className="bg-blue-600 text-white px-3 py-2 rounded"
// // // // // // //           >
// // // // // // //             Admin Login
// // // // // // //           </button>
// // // // // // //         ) : (
// // // // // // //           <span className="text-sm px-3 py-2 rounded bg-green-100 text-green-800">
// // // // // // //             Admin mode
// // // // // // //           </span>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       <div className="overflow-x-auto">
// // // // // // //         <table className="min-w-full border rounded-lg overflow-hidden">
// // // // // // //           <thead className="bg-gray-100">
// // // // // // //             <tr>
// // // // // // //               <th className="p-2 border text-left">Name</th>
// // // // // // //               <th className="p-2 border text-left">Email</th>
// // // // // // //               <th className="p-2 border text-left">Phone</th>
// // // // // // //               <th className="p-2 border text-left">Plan</th>
// // // // // // //               <th className="p-2 border text-left">Status</th>
// // // // // // //               <th className="p-2 border text-left">Actions</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {registrations.length === 0 && (
// // // // // // //               <tr>
// // // // // // //                 <td colSpan={6} className="p-4 text-center text-gray-500">
// // // // // // //                   No registrations found.
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             )}

// // // // // // //             {registrations.map((reg) => {
// // // // // // //               const badgeClass = `inline-block mt-1 px-2 py-1 rounded text-white text-xs font-semibold ${
// // // // // // //                 reg.paymentStatus === "Done"
// // // // // // //                   ? "bg-green-600"
// // // // // // //                   : reg.paymentStatus === "Processing"
// // // // // // //                   ? "bg-yellow-500"
// // // // // // //                   : reg.paymentStatus === "Not Completed"
// // // // // // //                   ? "bg-red-600"
// // // // // // //                   : "bg-gray-400"
// // // // // // //               }`;

// // // // // // //               return (
// // // // // // //                 <tr key={reg.uid} className="text-sm hover:bg-gray-50">
// // // // // // //                   <td className="p-2 border">{reg.name}</td>
// // // // // // //                   <td className="p-2 border break-all">{reg.email}</td>
// // // // // // //                   <td className="p-2 border">{reg.phone}</td>
// // // // // // //                   <td className="p-2 border">{reg.planName}</td>
// // // // // // //                   <td className="p-2 border">
// // // // // // //                     <p className={badgeClass}>{reg.paymentStatus}</p>
// // // // // // //                   </td>
// // // // // // //                   <td className="p-2 border">
// // // // // // //                     {isAdmin ? (
// // // // // // //                       <div className="flex flex-col sm:flex-row gap-2">
// // // // // // //                         {["Done", "Processing", "Not Completed"].map((status) => (
// // // // // // //                           <button
// // // // // // //                             key={status}
// // // // // // //                             disabled={loadingUid !== null}
// // // // // // //                             onClick={() => changeStatus(reg.uid, status)}
// // // // // // //                             className={`px-3 py-1 rounded text-white text-xs font-semibold transition transform hover:scale-105 ${
// // // // // // //                               status === "Done"
// // // // // // //                                 ? "bg-green-600 hover:bg-green-700"
// // // // // // //                                 : status === "Processing"
// // // // // // //                                 ? "bg-yellow-500 hover:bg-yellow-600"
// // // // // // //                                 : "bg-red-600 hover:bg-red-700"
// // // // // // //                             }`}
// // // // // // //                           >
// // // // // // //                             {loadingUid === reg.uid ? "..." : status}
// // // // // // //                           </button>
// // // // // // //                         ))}
// // // // // // //                       </div>
// // // // // // //                     ) : (
// // // // // // //                       <span className="text-gray-600">—</span>
// // // // // // //                     )}
// // // // // // //                   </td>
// // // // // // //                 </tr>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }















// // // // // // // RegistrationListCard.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import emailjs from "@emailjs/browser";

// // // // // // /* ========== CONFIG - replace with your EmailJS values ========== */
// // // // // // const SERVICE_ID = "service_4fag1fc";
// // // // // // const TEMPLATE_ID = "template_kcmknfc";
// // // // // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";
// // // // // // /* ================================================================= */

// // // // // // const ADMIN_PASSWORD = "2821";

// // // // // // export default function RegistrationListCard() {
// // // // // //   const [registrations, setRegistrations] = useState([]);
// // // // // //   const [loadingUid, setLoadingUid] = useState(null);
// // // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     fetchFromAPI();
// // // // // //   }, []);

// // // // // //   const fetchFromAPI = async () => {
// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // // // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // // // // //       const apiData = await res.json();
// // // // // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // // // //       const merged = apiData.map((user, idx) => {
// // // // // //         const uid = user._id || user.id || `local-${idx}`;
// // // // // //         return {
// // // // // //           uid,
// // // // // //           name: user.name || "",
// // // // // //           email: user.email || "",
// // // // // //           phone: user.phone || "",
// // // // // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // // // // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // // // // //         };
// // // // // //       });

// // // // // //       setRegistrations(merged);
// // // // // //     } catch (err) {
// // // // // //       console.error("fetchFromAPI error:", err);
// // // // // //       setRegistrations([]);
// // // // // //     }
// // // // // //   };

// // // // // //   const saveToLocalStorage = (list) => {
// // // // // //     const storageData = {};
// // // // // //     list.forEach((item) => {
// // // // // //       storageData[item.uid] = {
// // // // // //         planName: item.planName,
// // // // // //         paymentStatus: item.paymentStatus,
// // // // // //       };
// // // // // //     });
// // // // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // // // //   };

// // // // // //   const changeStatus = async (uid, status) => {
// // // // // //     if (!isAdmin) {
// // // // // //       alert("Admin required to change status");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       setLoadingUid(uid);

// // // // // //       const updated = registrations.map((r) =>
// // // // // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // // // // //       );
// // // // // //       setRegistrations(updated);
// // // // // //       saveToLocalStorage(updated);

// // // // // //       const target = updated.find((r) => r.uid === uid);
// // // // // //       if (!target?.email) return alert("User has no email; cannot send notification.");

// // // // // //       await emailjs.send(
// // // // // //         SERVICE_ID,
// // // // // //         TEMPLATE_ID,
// // // // // //         {
// // // // // //           user_name: target.name,
// // // // // //           user_email: target.email,
// // // // // //           plan_name: target.planName,
// // // // // //           status: status,
// // // // // //         },
// // // // // //         PUBLIC_KEY
// // // // // //       );

// // // // // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // // // // //     } catch (err) {
// // // // // //       console.error("changeStatus error:", err);
// // // // // //       alert("Failed to update status or send email.");
// // // // // //     } finally {
// // // // // //       setLoadingUid(null);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleAdminLogin = () => {
// // // // // //     const pass = prompt("Enter admin password:");
// // // // // //     if (pass === ADMIN_PASSWORD) {
// // // // // //       setIsAdmin(true);
// // // // // //       alert("Admin unlocked");
// // // // // //     } else {
// // // // // //       alert("Incorrect password");
// // // // // //     }
// // // // // //   };

// // // // // //   const getStatusColor = (status) => {
// // // // // //     switch (status) {
// // // // // //       case "Done":
// // // // // //         return "bg-green-600";
// // // // // //       case "Processing":
// // // // // //         return "bg-yellow-500";
// // // // // //       case "Not Completed":
// // // // // //         return "bg-red-600";
// // // // // //       default:
// // // // // //         return "bg-gray-400";
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="p-4 sm:p-8">
// // // // // //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// // // // // //         <h2 className="text-2xl font-bold mb-3 sm:mb-0">Registered Users</h2>
// // // // // //         {!isAdmin ? (
// // // // // //           <button
// // // // // //             onClick={handleAdminLogin}
// // // // // //             className="bg-blue-600 text-white px-3 py-2 rounded"
// // // // // //           >
// // // // // //             Admin Login
// // // // // //           </button>
// // // // // //         ) : (
// // // // // //           <span className="text-sm px-3 py-2 rounded bg-green-100 text-green-800">
// // // // // //             Admin mode
// // // // // //           </span>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // // //         {registrations.length === 0 && (
// // // // // //           <p className="col-span-full text-center text-gray-500">No registrations found.</p>
// // // // // //         )}

// // // // // //         {registrations.map((reg) => (
// // // // // //           <div
// // // // // //             key={reg.uid}
// // // // // //             className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
// // // // // //           >
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-semibold text-gray-800">{reg.name}</h3>
// // // // // //               <p className="text-sm text-gray-500 break-all">{reg.email}</p>
// // // // // //               <p className="text-sm text-gray-500">{reg.phone}</p>
// // // // // //               <p className="mt-2 text-sm font-medium">{reg.planName}</p>
// // // // // //             </div>

// // // // // //             <div className="mt-3 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
// // // // // //               <span
// // // // // //                 className={`px-3 py-1 rounded text-white text-xs font-semibold ${getStatusColor(
// // // // // //                   reg.paymentStatus
// // // // // //                 )}`}
// // // // // //               >
// // // // // //                 {reg.paymentStatus}
// // // // // //               </span>

// // // // // //               {isAdmin && (
// // // // // //                 <div className="flex gap-2 flex-wrap">
// // // // // //                   {["Done", "Processing", "Not Completed"].map((status) => (
// // // // // //                     <button
// // // // // //                       key={status}
// // // // // //                       disabled={loadingUid !== null}
// // // // // //                       onClick={() => changeStatus(reg.uid, status)}
// // // // // //                       className={`px-3 py-1 rounded text-white text-xs font-semibold transition transform hover:scale-105 ${
// // // // // //                         status === "Done"
// // // // // //                           ? "bg-green-600 hover:bg-green-700"
// // // // // //                           : status === "Processing"
// // // // // //                           ? "bg-yellow-500 hover:bg-yellow-600"
// // // // // //                           : "bg-red-600 hover:bg-red-700"
// // // // // //                       }`}
// // // // // //                     >
// // // // // //                       {loadingUid === reg.uid ? "..." : status}
// // // // // //                     </button>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }









// // // // // // RegistrationListVibrant.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import emailjs from "@emailjs/browser";

// // // // // const SERVICE_ID = "service_4fag1fc";
// // // // // const TEMPLATE_ID = "template_kcmknfc";
// // // // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";

// // // // // const ADMIN_PASSWORD = "2821";

// // // // // export default function RegistrationListVibrant() {
// // // // //   const [registrations, setRegistrations] = useState([]);
// // // // //   const [loadingUid, setLoadingUid] = useState(null);
// // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // //   useEffect(() => {
// // // // //     fetchFromAPI();
// // // // //   }, []);

// // // // //   const fetchFromAPI = async () => {
// // // // //     try {
// // // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // // // //       const apiData = await res.json();
// // // // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // // //       const merged = apiData.map((user, idx) => {
// // // // //         const uid = user._id || user.id || `local-${idx}`;
// // // // //         return {
// // // // //           uid,
// // // // //           name: user.name || "",
// // // // //           email: user.email || "",
// // // // //           phone: user.phone || "",
// // // // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // // // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // // // //         };
// // // // //       });

// // // // //       setRegistrations(merged);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       setRegistrations([]);
// // // // //     }
// // // // //   };

// // // // //   const saveToLocalStorage = (list) => {
// // // // //     const storageData = {};
// // // // //     list.forEach((item) => {
// // // // //       storageData[item.uid] = {
// // // // //         planName: item.planName,
// // // // //         paymentStatus: item.paymentStatus,
// // // // //       };
// // // // //     });
// // // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // // //   };

// // // // //   const changeStatus = async (uid, status) => {
// // // // //     if (!isAdmin) return alert("Admin required to change status");

// // // // //     try {
// // // // //       setLoadingUid(uid);

// // // // //       const updated = registrations.map((r) =>
// // // // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // // // //       );
// // // // //       setRegistrations(updated);
// // // // //       saveToLocalStorage(updated);

// // // // //       const target = updated.find((r) => r.uid === uid);
// // // // //       if (!target?.email) return alert("User has no email; cannot send notification.");

// // // // //       await emailjs.send(
// // // // //         SERVICE_ID,
// // // // //         TEMPLATE_ID,
// // // // //         {
// // // // //           user_name: target.name,
// // // // //           user_email: target.email,
// // // // //           plan_name: target.planName,
// // // // //           status: status,
// // // // //         },
// // // // //         PUBLIC_KEY
// // // // //       );

// // // // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       alert("Failed to update status or send email.");
// // // // //     } finally {
// // // // //       setLoadingUid(null);
// // // // //     }
// // // // //   };

// // // // //   const handleAdminLogin = () => {
// // // // //     const pass = prompt("Enter admin password:");
// // // // //     if (pass === ADMIN_PASSWORD) {
// // // // //       setIsAdmin(true);
// // // // //       alert("Admin unlocked");
// // // // //     } else {
// // // // //       alert("Incorrect password");
// // // // //     }
// // // // //   };

// // // // //   const getStatusColor = (status) => {
// // // // //     switch (status) {
// // // // //       case "Done":
// // // // //         return "bg-gradient-to-r from-green-400 to-green-600";
// // // // //       case "Processing":
// // // // //         return "bg-gradient-to-r from-yellow-400 to-yellow-600";
// // // // //       case "Not Completed":
// // // // //         return "bg-gradient-to-r from-red-400 to-red-600";
// // // // //       default:
// // // // //         return "bg-gray-400";
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section className="min-h-screen p-6 bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100">
// // // // //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// // // // //         <h2 className="text-3xl font-extrabold text-gray-800 mb-3 sm:mb-0 drop-shadow-lg">
// // // // //           Registered Users
// // // // //         </h2>
// // // // //         {!isAdmin ? (
// // // // //           <button
// // // // //             onClick={handleAdminLogin}
// // // // //             className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
// // // // //           >
// // // // //             Admin Login
// // // // //           </button>
// // // // //         ) : (
// // // // //           <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-800 shadow-sm">
// // // // //             Admin mode
// // // // //           </span>
// // // // //         )}
// // // // //       </div>

// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {registrations.length === 0 && (
// // // // //           <p className="col-span-full text-center text-gray-600 font-semibold">
// // // // //             No registrations found.
// // // // //           </p>
// // // // //         )}

// // // // //         {registrations.map((reg) => (
// // // // //           <div
// // // // //             key={reg.uid}
// // // // //             className="bg-white rounded-2xl shadow-xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
// // // // //           >
// // // // //             <div>
// // // // //               <h3 className="text-xl font-bold text-gray-900">{reg.name}</h3>
// // // // //               <p className="text-sm text-gray-600 break-all">{reg.email}</p>
// // // // //               <p className="text-sm text-gray-600">{reg.phone}</p>
// // // // //               <p className="mt-2 font-semibold text-indigo-600">{reg.planName}</p>
// // // // //             </div>

// // // // //             <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
// // // // //               <span
// // // // //                 className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
// // // // //                   reg.paymentStatus
// // // // //                 )}`}
// // // // //               >
// // // // //                 {reg.paymentStatus}
// // // // //               </span>

// // // // //               {isAdmin && (
// // // // //                 <div className="flex gap-2 flex-wrap">
// // // // //                   {["Done", "Processing", "Not Completed"].map((status) => (
// // // // //                     <button
// // // // //                       key={status}
// // // // //                       disabled={loadingUid !== null}
// // // // //                       onClick={() => changeStatus(reg.uid, status)}
// // // // //                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
// // // // //                         status === "Done"
// // // // //                           ? "bg-green-500 hover:bg-green-600"
// // // // //                           : status === "Processing"
// // // // //                           ? "bg-yellow-500 hover:bg-yellow-600"
// // // // //                           : "bg-red-500 hover:bg-red-600"
// // // // //                       }`}
// // // // //                     >
// // // // //                       {loadingUid === reg.uid ? "..." : status}
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }





// // // // // RegistrationListGreen.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import emailjs from "@emailjs/browser";

// // // // const SERVICE_ID = "service_4fag1fc";
// // // // const TEMPLATE_ID = "template_kcmknfc";
// // // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";

// // // // const ADMIN_PASSWORD = "2821";

// // // // export default function RegistrationListGreen() {
// // // //   const [registrations, setRegistrations] = useState([]);
// // // //   const [loadingUid, setLoadingUid] = useState(null);
// // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // //   useEffect(() => {
// // // //     fetchFromAPI();
// // // //   }, []);

// // // //   const fetchFromAPI = async () => {
// // // //     try {
// // // //       const res = await fetch("http://localhost:5000/api/registrations");
// // // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // // //       const apiData = await res.json();
// // // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // // //       const merged = apiData.map((user, idx) => {
// // // //         const uid = user._id || user.id || `local-${idx}`;
// // // //         return {
// // // //           uid,
// // // //           name: user.name || "",
// // // //           email: user.email || "",
// // // //           phone: user.phone || "",
// // // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // // //         };
// // // //       });

// // // //       setRegistrations(merged);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setRegistrations([]);
// // // //     }
// // // //   };

// // // //   const saveToLocalStorage = (list) => {
// // // //     const storageData = {};
// // // //     list.forEach((item) => {
// // // //       storageData[item.uid] = {
// // // //         planName: item.planName,
// // // //         paymentStatus: item.paymentStatus,
// // // //       };
// // // //     });
// // // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // // //   };

// // // //   const changeStatus = async (uid, status) => {
// // // //     if (!isAdmin) return alert("Admin required to change status");

// // // //     try {
// // // //       setLoadingUid(uid);

// // // //       const updated = registrations.map((r) =>
// // // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // // //       );
// // // //       setRegistrations(updated);
// // // //       saveToLocalStorage(updated);

// // // //       const target = updated.find((r) => r.uid === uid);
// // // //       if (!target?.email) return alert("User has no email; cannot send notification.");

// // // //       await emailjs.send(
// // // //         SERVICE_ID,
// // // //         TEMPLATE_ID,
// // // //         {
// // // //           user_name: target.name,
// // // //           user_email: target.email,
// // // //           plan_name: target.planName,
// // // //           status: status,
// // // //         },
// // // //         PUBLIC_KEY
// // // //       );

// // // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert("Failed to update status or send email.");
// // // //     } finally {
// // // //       setLoadingUid(null);
// // // //     }
// // // //   };

// // // //   const handleAdminLogin = () => {
// // // //     const pass = prompt("Enter admin password:");
// // // //     if (pass === ADMIN_PASSWORD) {
// // // //       setIsAdmin(true);
// // // //       alert("Admin unlocked");
// // // //     } else {
// // // //       alert("Incorrect password");
// // // //     }
// // // //   };

// // // //   const getStatusColor = (status) => {
// // // //     switch (status) {
// // // //       case "Done":
// // // //         return "bg-gradient-to-r from-green-500 to-green-700";
// // // //       case "Processing":
// // // //         return "bg-gradient-to-r from-yellow-400 to-yellow-600";
// // // //       case "Not Completed":
// // // //         return "bg-gradient-to-r from-red-400 to-red-600";
// // // //       default:
// // // //         return "bg-gray-400";
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="min-h-screen p-6 bg-gradient-radial from-green-200 via-green-100 to-green-300">
// // // //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// // // //         <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
// // // //           Registered Users
// // // //         </h2>
// // // //         {!isAdmin ? (
// // // //           <button
// // // //             onClick={handleAdminLogin}
// // // //             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
// // // //           >
// // // //             Admin Login
// // // //           </button>
// // // //         ) : (
// // // //           <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
// // // //             Admin mode
// // // //           </span>
// // // //         )}
// // // //       </div>

// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {registrations.length === 0 && (
// // // //           <p className="col-span-full text-center text-green-900 font-semibold">
// // // //             No registrations found.
// // // //           </p>
// // // //         )}

// // // //         {registrations.map((reg) => (
// // // //           <div
// // // //             key={reg.uid}
// // // //             className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
// // // //           >
// // // //             <div>
// // // //               <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
// // // //               <p className="text-sm text-green-700 break-all">{reg.email}</p>
// // // //               <p className="text-sm text-green-700">{reg.phone}</p>
// // // //               <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
// // // //             </div>

// // // //             <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
// // // //               <span
// // // //                 className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
// // // //                   reg.paymentStatus
// // // //                 )}`}
// // // //               >
// // // //                 {reg.paymentStatus}
// // // //               </span>

// // // //               {isAdmin && (
// // // //                 <div className="flex gap-2 flex-wrap">
// // // //                   {["Done", "Processing", "Not Completed"].map((status) => (
// // // //                     <button
// // // //                       key={status}
// // // //                       disabled={loadingUid !== null}
// // // //                       onClick={() => changeStatus(reg.uid, status)}
// // // //                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
// // // //                         status === "Done"
// // // //                           ? "bg-green-500 hover:bg-green-600"
// // // //                           : status === "Processing"
// // // //                           ? "bg-yellow-500 hover:bg-yellow-600"
// // // //                           : "bg-red-500 hover:bg-red-600"
// // // //                       }`}
// // // //                     >
// // // //                       {loadingUid === reg.uid ? "..." : status}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }





// // // // RegistrationListGreenPaginated.jsx
// // // import React, { useEffect, useState } from "react";
// // // import emailjs from "@emailjs/browser";
// // // import Confetti from "react-confetti";

// // // /* EmailJS config */
// // // const SERVICE_ID = "service_4fag1fc";
// // // const TEMPLATE_ID = "template_kcmknfc";
// // // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";

// // // const ADMIN_PASSWORD = "2821";

// // // export default function RegistrationListGreenPaginated() {
// // //   const [registrations, setRegistrations] = useState([]);
// // //   const [loadingUid, setLoadingUid] = useState(null);
// // //   const [isAdmin, setIsAdmin] = useState(false);
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [showConfettiUid, setShowConfettiUid] = useState(null);

// // //   const ITEMS_PER_PAGE = 6;

// // //   useEffect(() => {
// // //     fetchFromAPI();
// // //   }, []);

// // //   const fetchFromAPI = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/registrations");
// // //       if (!res.ok) throw new Error("Failed to fetch registrations");
// // //       const apiData = await res.json();
// // //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// // //       const merged = apiData.map((user, idx) => {
// // //         const uid = user._id || user.id || `local-${idx}`;
// // //         return {
// // //           uid,
// // //           name: user.name || "",
// // //           email: user.email || "",
// // //           phone: user.phone || "",
// // //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// // //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// // //         };
// // //       });

// // //       setRegistrations(merged);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setRegistrations([]);
// // //     }
// // //   };

// // //   const saveToLocalStorage = (list) => {
// // //     const storageData = {};
// // //     list.forEach((item) => {
// // //       storageData[item.uid] = {
// // //         planName: item.planName,
// // //         paymentStatus: item.paymentStatus,
// // //       };
// // //     });
// // //     localStorage.setItem("registrations", JSON.stringify(storageData));
// // //   };

// // //   const changeStatus = async (uid, status) => {
// // //     if (!isAdmin) return alert("Admin required to change status");

// // //     try {
// // //       setLoadingUid(uid);

// // //       const updated = registrations.map((r) =>
// // //         r.uid === uid ? { ...r, paymentStatus: status } : r
// // //       );
// // //       setRegistrations(updated);
// // //       saveToLocalStorage(updated);

// // //       const target = updated.find((r) => r.uid === uid);
// // //       if (!target?.email) return alert("User has no email; cannot send notification.");

// // //       await emailjs.send(
// // //         SERVICE_ID,
// // //         TEMPLATE_ID,
// // //         {
// // //           user_name: target.name,
// // //           user_email: target.email,
// // //           plan_name: target.planName,
// // //           status: status,
// // //         },
// // //         PUBLIC_KEY
// // //       );

// // //       if (status === "Done") {
// // //         setShowConfettiUid(uid);
// // //         setTimeout(() => setShowConfettiUid(null), 3000);
// // //       }

// // //       alert(`Status set to "${status}" for ${target.name}. Email sent to ${target.email}`);
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Failed to update status or send email.");
// // //     } finally {
// // //       setLoadingUid(null);
// // //     }
// // //   };

// // //   const handleAdminLogin = () => {
// // //     const pass = prompt("Enter admin password:");
// // //     if (pass === ADMIN_PASSWORD) {
// // //       setIsAdmin(true);
// // //       alert("Admin unlocked");
// // //     } else {
// // //       alert("Incorrect password");
// // //     }
// // //   };

// // //   const getStatusColor = (status) => {
// // //     switch (status) {
// // //       case "Done":
// // //         return "bg-gradient-to-r from-green-500 to-green-700";
// // //       case "Processing":
// // //         return "bg-gradient-to-r from-yellow-400 to-yellow-600";
// // //       case "Not Completed":
// // //         return "bg-gradient-to-r from-red-400 to-red-600";
// // //       default:
// // //         return "bg-gray-400";
// // //     }
// // //   };

// // //   const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
// // //   const currentData = registrations.slice(
// // //     (currentPage - 1) * ITEMS_PER_PAGE,
// // //     currentPage * ITEMS_PER_PAGE
// // //   );

// // //   return (
// // //     <section className="min-h-screen p-6 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
// // //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// // //         <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
// // //           Registered Users
// // //         </h2>
// // //         {!isAdmin ? (
// // //           <button
// // //             onClick={handleAdminLogin}
// // //             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
// // //           >
// // //             Admin Login
// // //           </button>
// // //         ) : (
// // //           <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
// // //             Admin mode
// // //           </span>
// // //         )}
// // //       </div>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {currentData.length === 0 && (
// // //           <p className="col-span-full text-center text-green-900 font-semibold">
// // //             No registrations found.
// // //           </p>
// // //         )}

// // //         {currentData.map((reg) => (
// // //           <div
// // //             key={reg.uid}
// // //             className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
// // //           >
// // //             {showConfettiUid === reg.uid && <Confetti numberOfPieces={100} recycle={false} />}

// // //             <div>
// // //               <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
// // //               <p className="text-sm text-green-700 break-all">{reg.email}</p>
// // //               <p className="text-sm text-green-700">{reg.phone}</p>
// // //               <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
// // //             </div>

// // //             <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
// // //               <span
// // //                 className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
// // //                   reg.paymentStatus
// // //                 )}`}
// // //               >
// // //                 {reg.paymentStatus}
// // //               </span>

// // //               {isAdmin && (
// // //                 <div className="flex gap-2 flex-wrap">
// // //                   {["Done", "Processing", "Not Completed"].map((status) => (
// // //                     <button
// // //                       key={status}
// // //                       disabled={loadingUid !== null}
// // //                       onClick={() => changeStatus(reg.uid, status)}
// // //                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
// // //                         status === "Done"
// // //                           ? "bg-green-500 hover:bg-green-600"
// // //                           : status === "Processing"
// // //                           ? "bg-yellow-500 hover:bg-yellow-600"
// // //                           : "bg-red-500 hover:bg-red-600"
// // //                       }`}
// // //                     >
// // //                       {loadingUid === reg.uid ? "..." : status}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Pagination */}
// // //       {totalPages > 1 && (
// // //         <div className="flex justify-center mt-8 gap-2 flex-wrap">
// // //           {Array.from({ length: totalPages }, (_, i) => (
// // //             <button
// // //               key={i + 1}
// // //               onClick={() => setCurrentPage(i + 1)}
// // //               className={`px-3 py-1 rounded-full font-semibold ${
// // //                 currentPage === i + 1
// // //                   ? "bg-green-700 text-white shadow-lg"
// // //                   : "bg-green-200 text-green-900 hover:bg-green-300"
// // //               } transition`}
// // //             >
// // //               {i + 1}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // }



// // import React, { useEffect, useState } from "react";
// // import emailjs from "@emailjs/browser";
// // import Confetti from "react-confetti";

// // const SERVICE_ID = "service_4fag1fc";
// // const TEMPLATE_ID = "template_kcmknfc";
// // const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";
// // const ADMIN_PASSWORD = "2821";

// // export default function RegistrationListGreenPaginated({ currentUser }) {
// //   const [registrations, setRegistrations] = useState([]);
// //   const [loadingUid, setLoadingUid] = useState(null);
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [showConfettiUid, setShowConfettiUid] = useState(null);

// //   const ITEMS_PER_PAGE = 6;

// //   useEffect(() => {
// //     fetchFromAPI();
// //   }, []);

// //   const fetchFromAPI = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/registrations");
// //       if (!res.ok) throw new Error("Failed to fetch registrations");
// //       const apiData = await res.json();
// //       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

// //       const merged = apiData.map((user, idx) => {
// //         const uid = user._id || user.id || `local-${idx}`;
// //         return {
// //           uid,
// //           name: user.name || "",
// //           email: user.email || "",
// //           phone: user.phone || "",
// //           planName: saved[uid]?.planName || user.planName || "Basic Plan",
// //           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
// //         };
// //       });

// //       // Mask other users' info
// //       const userEmail = currentUser?.email;
// //       const filtered = merged.map((reg) => {
// //         if (reg.email === userEmail) return reg;
// //         return {
// //           ...reg,
// //           name: "*****",
// //           email: "*****",
// //           phone: "*****",
// //           planName: "*****",
// //           paymentStatus: "*****",
// //         };
// //       });

// //       setRegistrations(filtered);
// //     } catch (err) {
// //       console.error(err);
// //       setRegistrations([]);
// //     }
// //   };

// //   const saveToLocalStorage = (list) => {
// //     const storageData = {};
// //     list.forEach((item) => {
// //       storageData[item.uid] = {
// //         planName: item.planName,
// //         paymentStatus: item.paymentStatus,
// //       };
// //     });
// //     localStorage.setItem("registrations", JSON.stringify(storageData));
// //   };

// //   const changeStatus = async (uid, status) => {
// //     if (!isAdmin) return alert("Admin required to change status");

// //     try {
// //       setLoadingUid(uid);
// //       const updated = registrations.map((r) =>
// //         r.uid === uid ? { ...r, paymentStatus: status } : r
// //       );
// //       setRegistrations(updated);
// //       saveToLocalStorage(updated);

// //       const target = updated.find((r) => r.uid === uid);
// //       if (!target?.email || target.email === "*****") return;

// //       await emailjs.send(
// //         SERVICE_ID,
// //         TEMPLATE_ID,
// //         {
// //           user_name: target.name,
// //           user_email: target.email,
// //           plan_name: target.planName,
// //           status: status,
// //         },
// //         PUBLIC_KEY
// //       );

// //       if (status === "Done") {
// //         setShowConfettiUid(uid);
// //         setTimeout(() => setShowConfettiUid(null), 3000);
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update status or send email.");
// //     } finally {
// //       setLoadingUid(null);
// //     }
// //   };

// //   const handleAdminLogin = () => {
// //     const pass = prompt("Enter admin password:");
// //     if (pass === ADMIN_PASSWORD) {
// //       setIsAdmin(true);
// //       alert("Admin unlocked");
// //     } else {
// //       alert("Incorrect password");
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Done":
// //         return "bg-gradient-to-r from-green-500 to-green-700";
// //       case "Processing":
// //         return "bg-gradient-to-r from-yellow-400 to-yellow-600";
// //       case "Not Completed":
// //         return "bg-gradient-to-r from-red-400 to-red-600";
// //       default:
// //         return "bg-gray-400";
// //     }
// //   };

// //   const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
// //   const currentData = registrations.slice(
// //     (currentPage - 1) * ITEMS_PER_PAGE,
// //     currentPage * ITEMS_PER_PAGE
// //   );

// //   return (
// //     <section className="min-h-screen p-6 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
// //       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
// //         <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
// //           Registered Users
// //         </h2>
// //         {!isAdmin ? (
// //           <button
// //             onClick={handleAdminLogin}
// //             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
// //           >
// //             Admin Login
// //           </button>
// //         ) : (
// //           <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
// //             Admin mode
// //           </span>
// //         )}
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {currentData.map((reg) => (
// //           <div
// //             key={reg.uid}
// //             className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
// //           >
// //             {showConfettiUid === reg.uid && <Confetti numberOfPieces={100} recycle={false} />}
// //             <div>
// //               <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
// //               <p className="text-sm text-green-700 break-all">{reg.email}</p>
// //               <p className="text-sm text-green-700">{reg.phone}</p>
// //               <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
// //             </div>

// //             <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
// //               <span
// //                 className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
// //                   reg.paymentStatus
// //                 )}`}
// //               >
// //                 {reg.paymentStatus}
// //               </span>

// //               {isAdmin && (
// //                 <div className="flex gap-2 flex-wrap">
// //                   {["Done", "Processing", "Not Completed"].map((status) => (
// //                     <button
// //                       key={status}
// //                       disabled={loadingUid !== null}
// //                       onClick={() => changeStatus(reg.uid, status)}
// //                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
// //                         status === "Done"
// //                           ? "bg-green-500 hover:bg-green-600"
// //                           : status === "Processing"
// //                           ? "bg-yellow-500 hover:bg-yellow-600"
// //                           : "bg-red-500 hover:bg-red-600"
// //                       }`}
// //                     >
// //                       {loadingUid === reg.uid ? "..." : status}
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       {totalPages > 1 && (
// //         <div className="flex justify-center mt-8 gap-2 flex-wrap">
// //           {Array.from({ length: totalPages }, (_, i) => (
// //             <button
// //               key={i + 1}
// //               onClick={() => setCurrentPage(i + 1)}
// //               className={`px-3 py-1 rounded-full font-semibold ${
// //                 currentPage === i + 1
// //                   ? "bg-green-700 text-white shadow-lg"
// //                   : "bg-green-200 text-green-900 hover:bg-green-300"
// //               } transition`}
// //             >
// //               {i + 1}
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </section>
// //   );
// // }






// import React, { useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";
// import Confetti from "react-confetti";

// const SERVICE_ID = "service_4fag1fc";
// const TEMPLATE_ID = "template_kcmknfc";
// const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";
// const ADMIN_PASSWORD = "2821";

// export default function RegistrationListGreenPaginated({ currentUser }) {
//   const [registrations, setRegistrations] = useState([]);
//   const [loadingUid, setLoadingUid] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showConfettiUid, setShowConfettiUid] = useState(null);

//   const ITEMS_PER_PAGE = 6;

//   useEffect(() => {
//     fetchFromAPI();
//   }, []);

//   const fetchFromAPI = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/registrations");
//       if (!res.ok) throw new Error("Failed to fetch registrations");
//       const apiData = await res.json();
//       const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

//       const merged = apiData.map((user, idx) => {
//         const uid = user._id || user.id || `local-${idx}`;
//         return {
//           uid,
//           name: user.name || "",
//           email: user.email || "",
//           phone: user.phone || "",
//           planName: saved[uid]?.planName || user.planName || "Basic Plan",
//           paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
//         };
//       });

//       // Partial masking for other users
//       const userEmail = currentUser?.email;
//       const maskString = (str, visible = 3) => {
//         if (!str) return "";
//         const first = str.slice(0, visible);
//         const masked = "*".repeat(Math.max(str.length - visible, 0));
//         return first + masked;
//       };

//       const filtered = merged.map((reg) => {
//         if (reg.email === userEmail) return reg;
//         return {
//           ...reg,
//           name: maskString(reg.name, 3),
//           email: maskString(reg.email, 4),
//           phone: maskString(reg.phone, 3),
//           planName: maskString(reg.planName, 3),
//           paymentStatus: reg.paymentStatus, // still show status
//         };
//       });

//       setRegistrations(filtered);
//     } catch (err) {
//       console.error(err);
//       setRegistrations([]);
//     }
//   };

//   const saveToLocalStorage = (list) => {
//     const storageData = {};
//     list.forEach((item) => {
//       storageData[item.uid] = {
//         planName: item.planName,
//         paymentStatus: item.paymentStatus,
//       };
//     });
//     localStorage.setItem("registrations", JSON.stringify(storageData));
//   };

//   const changeStatus = async (uid, status) => {
//     if (!isAdmin) return alert("Admin required to change status");

//     try {
//       setLoadingUid(uid);
//       const updated = registrations.map((r) =>
//         r.uid === uid ? { ...r, paymentStatus: status } : r
//       );
//       setRegistrations(updated);
//       saveToLocalStorage(updated);

//       const target = updated.find((r) => r.uid === uid);
//       if (!target?.email || target.email.includes("*")) return;

//       await emailjs.send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         {
//           user_name: target.name,
//           user_email: target.email,
//           plan_name: target.planName,
//           status: status,
//         },
//         PUBLIC_KEY
//       );

//       if (status === "Done") {
//         setShowConfettiUid(uid);
//         setTimeout(() => setShowConfettiUid(null), 3000);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update status or send email.");
//     } finally {
//       setLoadingUid(null);
//     }
//   };

//   const handleAdminLogin = () => {
//     const pass = prompt("Enter admin password:");
//     if (pass === ADMIN_PASSWORD) {
//       setIsAdmin(true);
//       alert("Admin unlocked");
//     } else {
//       alert("Incorrect password");
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Done":
//         return "bg-gradient-to-r from-green-500 to-green-700";
//       case "Processing":
//         return "bg-gradient-to-r from-yellow-400 to-yellow-600";
//       case "Not Completed":
//         return "bg-gradient-to-r from-red-400 to-red-600";
//       default:
//         return "bg-gray-400";
//     }
//   };

//   const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
//   const currentData = registrations.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <section className="min-h-screen p-6 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
//       <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
//         <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
//           Registered Users
//         </h2>
//         {!isAdmin ? (
//           <button
//             onClick={handleAdminLogin}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//           >
//             Admin Login
//           </button>
//         ) : (
//           <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
//             Admin mode
//           </span>
//         )}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentData.map((reg) => (
//           <div
//             key={reg.uid}
//             className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
//           >
//             {showConfettiUid === reg.uid && <Confetti numberOfPieces={100} recycle={false} />}
//             <div>
//               <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
//               <p className="text-sm text-green-700 break-all">{reg.email}</p>
//               <p className="text-sm text-green-700">{reg.phone}</p>
//               <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
//             </div>

//             <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
//               <span
//                 className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
//                   reg.paymentStatus
//                 )}`}
//               >
//                 {reg.paymentStatus}
//               </span>

//               {isAdmin && (
//                 <div className="flex gap-2 flex-wrap">
//                   {["Done", "Processing", "Not Completed"].map((status) => (
//                     <button
//                       key={status}
//                       disabled={loadingUid !== null}
//                       onClick={() => changeStatus(reg.uid, status)}
//                       className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
//                         status === "Done"
//                           ? "bg-green-500 hover:bg-green-600"
//                           : status === "Processing"
//                           ? "bg-yellow-500 hover:bg-yellow-600"
//                           : "bg-red-500 hover:bg-red-600"
//                       }`}
//                     >
//                       {loadingUid === reg.uid ? "..." : status}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-8 gap-2 flex-wrap">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded-full font-semibold ${
//                 currentPage === i + 1
//                   ? "bg-green-700 text-white shadow-lg"
//                   : "bg-green-200 text-green-900 hover:bg-green-300"
//               } transition`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }



import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

const SERVICE_ID = "service_4fag1fc";
const TEMPLATE_ID = "template_kcmknfc";
const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";
const ADMIN_PASSWORD = "2821";

export default function RegistrationList({ currentUser }) {
  const [registrations, setRegistrations] = useState([]);
  const [loadingUid, setLoadingUid] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfettiUid, setShowConfettiUid] = useState(null);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    fetchFromAPI();
  }, []);

  const fetchFromAPI = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/registrations");
      if (!res.ok) throw new Error("Failed to fetch registrations");
      const apiData = await res.json();
      const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

      const merged = apiData.map((user, idx) => {
        const uid = user._id || user.id || `local-${idx}`;
        return {
          uid,
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          planName: saved[uid]?.planName || user.planName || "Basic Plan",
          paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
        };
      });

      const userEmail = currentUser?.email;

      // Mask other users only for normal users
      const maskString = (str, visible = 3) => {
        if (!str) return "";
        const first = str.slice(0, visible);
        const masked = "*".repeat(Math.max(str.length - visible, 0));
        return first + masked;
      };

      const filtered = merged.map((reg) => {
        if (isAdmin || reg.email === userEmail) return reg; // full view for admin or self
        return {
          ...reg,
          name: maskString(reg.name, 3),
          email: maskString(reg.email, 4),
          phone: maskString(reg.phone, 3),
          planName: (reg.planName),
        };
      });

      setRegistrations(filtered);
    } catch (err) {
      console.error(err);
      setRegistrations([]);
    }
  };

  useEffect(() => {
    // Reapply masking when admin toggles
    fetchFromAPI();
  }, [isAdmin]);

  const saveToLocalStorage = (list) => {
    const storageData = {};
    list.forEach((item) => {
      storageData[item.uid] = {
        planName: item.planName,
        paymentStatus: item.paymentStatus,
      };
    });
    localStorage.setItem("registrations", JSON.stringify(storageData));
  };

  const changeStatus = async (uid, status) => {
    if (!isAdmin) return alert("Admin required to change status");

    try {
      setLoadingUid(uid);
      const updated = registrations.map((r) =>
        r.uid === uid ? { ...r, paymentStatus: status } : r
      );
      setRegistrations(updated);
      saveToLocalStorage(updated);

      const target = updated.find((r) => r.uid === uid);
      if (!target?.email || target.email.includes("*")) return;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: target.name,
          user_email: target.email,
          plan_name: target.planName,
          status: status,
        },
        PUBLIC_KEY
      );

      if (status === "Done") {
        setShowConfettiUid(uid);
        setTimeout(() => setShowConfettiUid(null), 3000);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update status or send email.");
    } finally {
      setLoadingUid(null);
    }
  };

  const handleAdminLogin = () => {
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASSWORD) {
      setIsAdmin(true);
      alert("Admin unlocked");
    } else {
      alert("Incorrect password");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
        return "bg-gradient-to-r from-green-500 to-green-700";
      case "Processing":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "Not Completed":
        return "bg-gradient-to-r from-red-400 to-red-600";
      default:
        return "bg-gray-400";
    }
  };

  const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
  const currentData = registrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="min-h-screen md:mt-0 p-6 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
          Registered Users
        </h2>
        {!isAdmin ? (
          <button
            onClick={handleAdminLogin}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Admin Login
          </button>
        ) : (
          <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
            Admin mode
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((reg) => (
          <div
            key={reg.uid}
            className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
          >
            {showConfettiUid === reg.uid && <Confetti numberOfPieces={100} recycle={false} />}
            <div>
              <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
              <p className="text-sm text-green-700 break-all">{reg.email}</p>
              <p className="text-sm text-green-700">{reg.phone}</p>
              <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
              <span
                className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
                  reg.paymentStatus
                )}`}
              >
                {reg.paymentStatus}
              </span>

              {isAdmin && (
                <div className="flex gap-2 flex-wrap">
                  {["Done", "Processing", "Not Completed"].map((status) => (
                    <button
                      key={status}
                      disabled={loadingUid !== null}
                      onClick={() => changeStatus(reg.uid, status)}
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
                        status === "Done"
                          ? "bg-green-500 hover:bg-green-600"
                          : status === "Processing"
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {loadingUid === reg.uid ? "..." : status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full font-semibold ${
                currentPage === i + 1
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-green-200 text-green-900 hover:bg-green-300"
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

