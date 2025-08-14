// // // // // // import TotalClients from "./TotalClients";
// // // // // // // import ActivePlans from "./ActivePlans";
// // // // // // import RevenueStat from "./RevenueStat";
// // // // // // import AvgProgress from "./AvgProgress";

// // // // // // export default function StatsGrid() {
// // // // // //   return (
// // // // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // //       <TotalClients value={47} change="+12% from last month" />
// // // // // //       {/* <ActivePlans value={42} change="+8% from last month" /> */}
// // // // // //       <RevenueStat value={2840} change="+15% from last month" />
// // // // // //       <AvgProgress value={78} change="+5% from last month" />
// // // // // //     </div>
// // // // // //   );

// // // // // // }



// // // // // // import { useEffect, useState } from "react";
// // // // // // import TotalClients from "./TotalClients";
// // // // // // import RevenueStat from "./RevenueStat";
// // // // // // import AvgProgress from "./AvgProgress";
// // // // // // import { fetchClients } from "../../api";
// // // // // // // Adjust the import path as needed

// // // // // // export default function StatsGrid() {
// // // // // //   const [totalClients, setTotalClients] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     const loadTotalClients = async () => {
// // // // // //       try {
// // // // // //         const res = await fetchClients({ page: 1, limit: 1 }); 
// // // // // //         setTotalClients(res.data.total); // ✅ API should return total count
// // // // // //       } catch (err) {
// // // // // //         console.error("Failed to load total clients", err);
// // // // // //       }
// // // // // //     };
// // // // // //     loadTotalClients();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // //       <TotalClients value={totalClients} change="+12% from last month" />
// // // // // //       <RevenueStat value={2840} change="+15% from last month" />
// // // // // //       <AvgProgress value={78} change="+5% from last month" />
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // import { useEffect, useState } from "react";
// // // // import TotalClients from "./TotalClients";
// // // // import RevenueStat from "./RevenueStat";
// // // // import AvgProgress from "./AvgProgress";
// // // // import { fetchClients } from "../../api"; // Adjust path if needed
// // // // import { toast } from "react-toastify";
// // // // import ThisMonth from "../ClientManagement/ThisMonth";

// // // // export default function StatsGrid() {
// // // //   const [totalClients, setTotalClients] = useState(0);
// // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // //   useEffect(() => {
// // // //     const loadTotalClients = async () => {
// // // //       try {
// // // //         const res = await fetchClients({ page: 1, limit: 1 });
// // // //         setTotalClients(res.data.total);
// // // //       } catch (err) {
// // // //         console.error("Failed to load total clients", err);
// // // //       }
// // // //     };
// // // //     loadTotalClients();
// // // //   }, []);

// // // //   const requestPassword = () => {
// // // //     const entered = prompt("Enter admin password:");
// // // //     if (entered === "2821") {
// // // //       setIsAdmin(true);
// // // //       toast.success("Admin access granted");
// // // //     } else {
// // // //       toast.error("Incorrect password");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //       <TotalClients value={totalClients} change="+12% from last month" />

// // // //       {!isAdmin ? (
// // // //         <button
// // // //           onClick={requestPassword}
// // // //           className="bg-gray-400 text-white px-4 py-2 rounded font-bold"
// // // //         >
// // // //           🔒 Unlock Revenue
// // // //         </button>
// // // //       ) : (
// // // //         <RevenueStat value={2840} change="+15% from last month" />
// // // //       )}

// // // //       <AvgProgress value={78} change="+5% from last month" />
      

// // // //     </div>

// // // //   );
// // // // }

// // // // // import { useEffect, useState } from "react";
// // // // // import TotalClients from "./TotalClients";
// // // // // import RevenueStat from "./RevenueStat";
// // // // // import AvgProgress from "./AvgProgress";
// // // // // import ThisMonth from "../ClientManagement/ThisMonth"; // Assuming this is your stat component
// // // // // import { fetchClients } from "../../api"; // Adjust path if needed
// // // // // import { toast } from "react-toastify";

// // // // // export default function StatsGrid() {
// // // // //   const [totalClients, setTotalClients] = useState(0);
// // // // //   const [isAdmin, setIsAdmin] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const loadTotalClients = async () => {
// // // // //       try {
// // // // //         const res = await fetchClients({ page: 1, limit: 1 });
// // // // //         setTotalClients(res.data.total);
// // // // //       } catch (err) {
// // // // //         console.error("Failed to load total clients", err);
// // // // //       }
// // // // //     };
// // // // //     loadTotalClients();
// // // // //   }, []);

// // // // //   const requestPassword = () => {
// // // // //     const entered = prompt("Enter admin password:");
// // // // //     if (entered === "2821") {
// // // // //       setIsAdmin(true);
// // // // //       toast.success("Admin access granted");
// // // // //     } else {
// // // // //       toast.error("Incorrect password");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
// // // // //       <TotalClients value={totalClients} change="+12% from last month" />

// // // // //       {!isAdmin ? (
// // // // //         <button
// // // // //           onClick={requestPassword}
// // // // //           className="bg-gray-400 text-white px-4 py-2 rounded font-bold"
// // // // //         >
// // // // //           🔒 Unlock Revenue
// // // // //         </button>
// // // // //       ) : (
// // // // //         <RevenueStat value={2840} change="+15% from last month" />
// // // // //       )}

// // // // //       <AvgProgress value={78} change="+5% from last month" />
      
// // // // //       <ThisMonth />
// // // // //     </div>
// // // // //   );
// // // // // }




// // // import { useEffect, useState } from "react";
// // // import TotalClients from "./TotalClients";
// // // import RevenueStat from "./RevenueStat";
// // // import AvgProgress from "./AvgProgress";
// // // import { fetchClients } from "../../api";
// // // import { toast } from "react-toastify";
// // // import ThisMonth from "../ClientManagement/ThisMonth";

// // // export default function StatsGrid() {
// // //   const [totalClients, setTotalClients] = useState(0);
// // //   const [isAdmin, setIsAdmin] = useState(false);

// // //   useEffect(() => {
// // //     const loadTotalClients = async () => {
// // //       try {
// // //         const res = await fetchClients({ page: 1, limit: 1 });
// // //         setTotalClients(res.data.total);
// // //       } catch (err) {
// // //         console.error("Failed to load total clients", err);
// // //       }
// // //     };
// // //     loadTotalClients();
// // //   }, []);

// // //   const requestPassword = () => {
// // //     const entered = prompt("Enter admin password:");
// // //     if (entered === "2821") {
// // //       setIsAdmin(true);
// // //       toast.success("Admin access granted");
// // //     } else {
// // //       toast.error("Incorrect password");
// // //     }
// // //   };

// // //   return (
// // //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
// // //       <StatCard gradient="from-green-400 via-emerald-300 to-green-500">
// // //         <TotalClients value={totalClients} change="+12% from last month" />
// // //       </StatCard>

// // //       <StatCard gradient="from-yellow-400 via-orange-300 to-yellow-500">
// // //         {!isAdmin ? (
// // //           <button
// // //             onClick={requestPassword}
// // //             className="w-full py-6 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
// // //           >
// // //             🔒 Unlock Revenue
// // //           </button>
// // //         ) : (
// // //           <RevenueStat value={2840} change="+15% from last month" />
// // //         )}
// // //       </StatCard>

// // //       <StatCard gradient="from-blue-400 via-sky-300 to-blue-500">
// // //         <AvgProgress value={78} change="+5% from last month" />
// // //       </StatCard>
// // //     </div>
// // //   );
// // // }

// // // function StatCard({ children, gradient }) {
// // //   return (
// // //     <div
// // //       className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
// // //     >
// // //       {/* Gradient background */}
// // //       <div
// // //         className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
// // //       />
// // //       {/* Inner glass panel */}
// // //       <div className="relative z-10 bg-white/60 backdrop-blur-lg p-4 md:p-6 h-full flex items-center justify-center text-center rounded-2xl border border-white/30 group-hover:scale-105 transition-transform duration-300">
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import { useEffect, useState } from "react";
// // import TotalClients from "./TotalClients";
// // import RevenueStat from "./RevenueStat";
// // import AvgProgress from "./AvgProgress";
// // import { fetchClients } from "../../api";
// // import { toast } from "react-toastify";

// // export default function StatsGrid() {
// //   const [totalClients, setTotalClients] = useState(0);
// //   const [isAdmin, setIsAdmin] = useState(false);

// //   useEffect(() => {
// //     const loadTotalClients = async () => {
// //       try {
// //         const res = await fetchClients({ page: 1, limit: 1 });
// //         setTotalClients(res.data.total);
// //       } catch (err) {
// //         console.error("Failed to load total clients", err);
// //       }
// //     };
// //     loadTotalClients();
// //   }, []);

// //   const requestPassword = () => {
// //     const entered = prompt("Enter admin password:");
// //     if (entered === "2821") {
// //       setIsAdmin(true);
// //       toast.success("Admin access granted");
// //     } else {
// //       toast.error("Incorrect password");
// //     }
// //   };

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
// //       <StatCard gradient="from-green-400 via-emerald-300 to-green-500">
// //         <TotalClients value={totalClients} change="+12% from last month" />
// //       </StatCard>

// //       <StatCard gradient="from-lime-400 via-green-300 to-emerald-400">
// //         {!isAdmin ? (
// //           <button
// //             onClick={requestPassword}
// //             className="w-full py-6 text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
// //           >
// //             🔒 Unlock Revenue
// //           </button>
// //         ) : (
// //           <RevenueStat value={2840} change="+15% from last month" />
// //         )}
// //       </StatCard>

// //       <StatCard gradient="from-emerald-400 via-green-300 to-lime-400">
// //         <AvgProgress value={78} change="+5% from last month" />
// //       </StatCard>
// //     </div>
// //   );
// // }

// // function StatCard({ children, gradient }) {
// //   return (
// //     <div
// //       className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
// //     >
// //       {/* Gradient background */}
// //       <div
// //         className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-300`}
// //       />
// //       {/* Inner glass panel */}
// //       <div className="relative z-10 bg-white/70 backdrop-blur-md p-5 md:p-6 h-full flex items-center justify-center text-center rounded-2xl border border-white/40 group-hover:scale-105 transition-transform duration-300">
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }



// import { useEffect, useState } from "react";
// import TotalClients from "./TotalClients";
// import RevenueStat from "./RevenueStat";
// import AvgProgress from "./AvgProgress";
// import { fetchClients } from "../../api";
// import { toast } from "react-toastify";
// import { Lock, Unlock } from "lucide-react";

// export default function StatsGrid() {
//   const [totalClients, setTotalClients] = useState(0);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const loadTotalClients = async () => {
//       try {
//         const res = await fetchClients({ page: 1, limit: 1 });
//         setTotalClients(res.data.total);
//       } catch (err) {
//         console.error("Failed to load total clients", err);
//       }
//     };
//     loadTotalClients();
//   }, []);

//   const requestPassword = () => {
//     const entered = prompt("Enter admin password:");
//     if (entered === "2821") {
//       setIsAdmin(true);
//       toast.success("Admin access granted");
//     } else {
//       toast.error("Incorrect password");
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//       <StatCard gradient="from-green-400 via-emerald-300 to-green-500">
//         <TotalClients value={totalClients} change="+12% from last month" />
//       </StatCard>

//       <StatCard gradient="from-lime-400 via-green-300 to-emerald-400">
//         {!isAdmin ? (
//           <button
//             onClick={requestPassword}
//             className="w-full py-6 text-lg font-bold flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             <Lock className="w-5 h-5" /> Unlock Revenue
//           </button>
//         ) : (
//           <div className="flex flex-col items-center gap-2">
//             <Unlock className="w-6 h-6 text-green-700" />
//             <RevenueStat value={2840} change="+15% from last month" />
//           </div>
//         )}
//       </StatCard>

//       <StatCard gradient="from-emerald-400 via-green-300 to-lime-400">
//         <AvgProgress value={78} change="+5% from last month" />
//       </StatCard>
//     </div>
//   );
// }

// function StatCard({ children, gradient }) {
//   return (
//     <div className="relative rounded-2xl overflow-hidden group p-[2px] bg-gradient-to-br animate-gradient-x from-green-400 via-emerald-300 to-green-500">
//       {/* Inner card */}
//       <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl h-full flex flex-col items-center justify-center p-5 md:p-6 text-center border border-white/40 transition-transform duration-300 group-hover:scale-[1.03] shadow-lg">
        
//         {/* Shine effect */}
//         <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
//         </div>

//         {children}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import TotalClients from "./TotalClients";
import RevenueStat from "./RevenueStat";
import AvgProgress from "./AvgProgress";
import { fetchClients } from "../../api";
import { toast } from "react-toastify";
import { Lock, Unlock } from "lucide-react";

export default function StatsGrid() {
  const [totalClients, setTotalClients] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadTotalClients = async () => {
      try {
        const res = await fetchClients({ page: 1, limit: 1 });
        setTotalClients(res.data.total);
      } catch (err) {
        console.error("Failed to load total clients", err);
      }
    };
    loadTotalClients();
  }, []);

  const requestPassword = () => {
    const entered = prompt("Enter admin password:");
    if (entered === "2821") {
      setIsAdmin(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Incorrect password");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      <StatCard gradient="from-green-400 via-emerald-300 to-green-500">
        <TotalClients value={totalClients} change="+12% from last month" />
      </StatCard>

      <StatCard gradient="from-lime-400 via-green-300 to-emerald-400">
        {!isAdmin ? (
          <button
            onClick={requestPassword}
            className="w-full py-3 text-sm font-bold flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <Lock className="w-4 h-4" /> Unlock Revenue
          </button>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <Unlock className="w-5 h-5 text-green-700" />
            <RevenueStat value={2840} change="+15% from last month" />
          </div>
        )}
      </StatCard>

      <StatCard gradient="from-emerald-400 via-green-300 to-lime-400">
        <AvgProgress value={78} change="+5% from last month" />
      </StatCard>
    </div>
  );
}

function StatCard({ children, gradient }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group p-[1.5px]">
      {/* Gradient border */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 blur-sm group-hover:blur-md transition-all duration-500`}
      ></div>

      {/* Inner glass panel */}
      <div className="relative bg-white/60 backdrop-blur-lg rounded-2xl h-[150px] flex flex-col items-center justify-center px-3 text-center border border-white/40 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.05]">
        
        {/* Soft glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-60 pointer-events-none" />

        {/* Shine sweep */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
        </div>

        {children}
      </div>
    </div>
  );
}
