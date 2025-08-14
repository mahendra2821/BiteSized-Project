// import { CalendarCheck } from "lucide-react";

// const consultations = [
//   { name: "Sarah Johnson", plan: "Premium Plan", time: "Today 2:00 PM", status: "confirmed" },
//   { name: "Michael Chen", plan: "Elite Plan", time: "Today 4:30 PM", status: "confirmed" },
//   { name: "David Kim", plan: "Standard Plan", time: "Tomorrow 11:00 AM", status: "confirmed" },
//   { name: "Laura Lin", plan: "Premium Plan", time: "Tomorrow 1:00 PM", status: "confirmed" },
//   { name: "Anna Lee", plan: "Basic Plan", time: "Friday 9:00 AM", status: "confirmed" },
// ];

// export default function UpcomingConsultation() {
//   return (
//     <div className="bg-white p-4 rounded-xl border shadow-sm">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         <CalendarCheck className="w-5 h-5" /> Upcoming Consultations
//       </h3>
//       <div className="max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
//         <ul className="space-y-3">
//           {consultations.map((appt, i) => (
//             <li
//               key={i}
//               className="border p-3 rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
//             >
//               <div>
//                 <p className="font-semibold">{appt.name}</p>
//                 <p className="text-xs text-gray-500">{appt.plan}</p>
//                 <p className="text-sm text-gray-600 mt-1">{appt.time}</p>
//               </div>
//               <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
//                 {appt.status}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { CalendarCheck } from "lucide-react";
// import { toast } from "react-toastify";

// // Mask name: first letter + stars
// function maskName(name) {
//   if (!name) return "User";
//   return name[0] + "*".repeat(Math.max(name.length - 1, 0));
// }

// export default function UpcomingConsultation() {
//   const [names, setNames] = useState([]);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/clients")
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then((data) => {
//         // Assuming data is an array of clients with 'name' property
//         const masked = data.map((client) => maskName(client.name));
//         setNames(masked);
//       })
//       .catch((err) => {
//         toast.error("Failed to load client names");
//         console.error(err);
//       });
//   }, []);

//   // Auto scroll
//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     let scrollPos = 2;
//     const scrollInterval = setInterval(() => {
//       if (scrollElement) {
//         scrollPos += 1;
//         if (scrollPos >= scrollElement.scrollHeight - scrollElement.clientHeight) {
//           scrollPos = 0;
//         }
//         scrollElement.scrollTop = scrollPos;
//       }
//     }, 30);
//     return () => clearInterval(scrollInterval);
//   }, [names]);

//   return (
//     <div className="bg-white p-4 rounded-xl border shadow-sm max-w-md mx-auto">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         <CalendarCheck className="w-5 h-5" /> Upcoming Consultations (Masked Names)
//       </h3>
//       <ul
//         ref={scrollRef}
//         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth space-y-3"
//       >
//         {names.map((maskedName, index) => (
//           <li
//             key={index}
//             className="border p-3 rounded-lg hover:bg-gray-50 transition"
//           >
//             <p className="font-semibold">{maskedName}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import { CalendarCheck } from "lucide-react";

// const consultations = [
//   { name: "Sarah Johnson", plan: "Premium Plan", time: "Today 2:00 PM", status: "confirmed" },
//   { name: "Michael Chen", plan: "Elite Plan", time: "Today 4:30 PM", status: "confirmed" },
//   { name: "David Kim", plan: "Standard Plan", time: "Tomorrow 11:00 AM", status: "confirmed" },
//   { name: "Laura Lin", plan: "Premium Plan", time: "Tomorrow 1:00 PM", status: "confirmed" },
//   { name: "Anna Lee", plan: "Basic Plan", time: "Friday 9:00 AM", status: "confirmed" },
// ];

// // Mask name helper: first letter + stars
// function maskName(name) {
//   if (!name) return "User";
//   return name[0] + "*".repeat(Math.max(name.length - 1, 0));
// }

// export default function UpcomingConsultation() {
//   return (
//     <div className="bg-white p-4 rounded-xl border shadow-sm">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         <CalendarCheck className="w-5 h-5" /> Upcoming Consultations
//       </h3>
//       <div className="max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
//         <ul className="space-y-3">
//           {consultations.map((appt, i) => (
//             <li
//               key={i}
//               className="border p-3 rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
//             >
//               <div>
//                 <p className="font-semibold">{maskName(appt.name)}</p>
//                 <p className="text-xs text-gray-500">{appt.plan}</p>
//                 <p className="text-sm text-gray-600 mt-1">{appt.time}</p>
//               </div>
//               <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
//                 {appt.status}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import { CalendarCheck } from "lucide-react";

const consultations = [
  { name: "Sarah Johnson", plan: "Premium Plan", time: "Today 2:00 PM", status: "confirmed" },
  { name: "Michael Chen", plan: "Elite Plan", time: "Today 4:30 PM", status: "confirmed" },
  { name: "David Kim", plan: "Standard Plan", time: "Tomorrow 11:00 AM", status: "confirmed" },
  { name: "Laura Lin", plan: "Premium Plan", time: "Tomorrow 1:00 PM", status: "confirmed" },
  { name: "Anna Lee", plan: "Basic Plan", time: "Friday 9:00 AM", status: "confirmed" },
];

function maskName(name) {
  return name ? name[0] + "*".repeat(Math.max(name.length - 1, 0)) : "User";
}

export default function UpcomingConsultation() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-3 flex items-center gap-2">
        <CalendarCheck className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Upcoming Consultations</h3>
      </div>

      {/* List */}
      <div className="max-h-[220px] overflow-y-auto scroll-smooth">
        <ul className="divide-y divide-green-100">
          {consultations.map((appt, i) => (
            <li
              key={i}
              className={`flex justify-between items-center p-3 transition-all duration-200 hover:bg-green-50 hover:shadow-sm ${
                i % 2 === 0 ? "bg-white/70" : "bg-green-50/50"
              }`}
            >
              <div>
                <p className="font-semibold text-gray-800">{maskName(appt.name)}</p>
                <p className="text-xs text-gray-500">{appt.plan}</p>
                <p className="text-sm text-gray-600 mt-1">{appt.time}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm animate-pulse">
                {appt.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
