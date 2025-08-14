// // import { useEffect, useRef } from "react";
// // import { Activity, Star } from "lucide-react";

// // const activities = [
// //   { name: "Sarah Johnson", action: "completed weekly check-in", time: "2 hours ago", icon: "dot" },
// //   { name: "Michael Chen", action: "reached weight loss milestone", time: "4 hours ago", icon: "star" },
// //   { name: "Anna Lee", action: "paused plan temporarily", time: "2 days ago", icon: "dot-gray" },
// //   { name: "David Kim", action: "updated dietary preferences", time: "3 days ago", icon: "dot" },
// //   { name: "Laura Lin", action: "missed last session", time: "4 days ago", icon: "dot-gray" },
// // ];

// // // Duplicate list to simulate infinite scrolling
// // const duplicated = [...activities, ...activities];

// // export default function RecentActivities() {
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     const scrollElement = scrollRef.current;
// //     let scrollPos = 2;

// //     const scrollInterval = setInterval(() => {
// //       if (scrollElement) {
// //         scrollPos += 1;
// //         if (scrollPos >= scrollElement.scrollHeight / 2) {
// //           scrollPos = 0;
// //         }
// //         scrollElement.scrollTop = scrollPos;
// //       }
// //     }, 30); // Speed: smaller = faster

// //     return () => clearInterval(scrollInterval);
// //   }, []);

// //   return (
// //     <div className="bg-white p-4 rounded-xl border shadow-sm">
// //       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// //         <Activity className="w-5 h-5" /> Recent Activities
// //       </h3>
// //       <div
// //         ref={scrollRef}
// //         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth"
// //       >
// //         <ul className="space-y-3">
// //           {duplicated.map((item, index) => (
// //             <li key={index} className="flex items-start gap-2">
// //               {item.icon === "star" ? (
// //                 <Star className="w-4 h-4 text-amber-500 mt-1" />
// //               ) : (
// //                 <span
// //                   className={`w-3 h-3 rounded-full mt-1 ${
// //                     item.icon === "dot" ? "bg-green-500" : "bg-gray-400"
// //                   }`}
// //                 />
// //               )}
// //               <div>
// //                 <p>
// //                   <span className="font-medium">{item.name}</span> {item.action}
// //                 </p>
// //                 <p className="text-xs text-gray-500">{item.time}</p>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }



// // // // import { useEffect, useRef, useState } from "react";
// // // // import { Activity, Star } from "lucide-react";
// // // // import { toast } from "react-toastify";

// // // // function maskName(name) {
// // // //   // Mask full name to first letter + *** (e.g., Sarah Johnson => S****)
// // // //   if (!name) return "User";
// // // //   return name[0] + "****";
// // // // }

// // // // function maskEmail(email) {
// // // //   // Mask email like a***@***.com
// // // //   if (!email) return "";
// // // //   const [user, domain] = email.split("@");
// // // //   if (!user || !domain) return "****";
// // // //   return user[0] + "***@" + domain.replace(/.(?=.*\.)/g, "*"); // hide all except last part of domain
// // // // }

// // // // export default function RecentActivities() {
// // // //   const scrollRef = useRef(null);
// // // //   const [activities, setActivities] = useState([]);

// // // //   // Fetch client data and create activity-like objects
// // // //   useEffect(() => {
// // // //     fetch("http://localhost:5000/api/clients")
// // // //       .then((res) => res.json())
// // // //       .then((data) => {
// // // //         // Map clients to activities - mask name/email and random action/time/icon
// // // //         const newActivities = data.map((client, idx) => {
// // // //           // Random sample actions and icons
// // // //           const actionSamples = [
// // // //             "completed weekly check-in",
// // // //             "reached weight loss milestone",
// // // //             "paused plan temporarily",
// // // //             "updated dietary preferences",
// // // //             "missed last session",
// // // //           ];
// // // //           const iconSamples = ["dot", "star", "dot-gray", "dot"];

// // // //           // Randomly pick action and icon
// // // //           const action = actionSamples[idx % actionSamples.length];
// // // //           const icon = iconSamples[idx % iconSamples.length];
// // // //           const time = `${(idx + 1) * 2} hours ago`;

// // // //           return {
// // // //             name: maskName(client.name),
// // // //             email: maskEmail(client.email),
// // // //             action,
// // // //             time,
// // // //             icon,
// // // //           };
// // // //         });

// // // //         // Duplicate list for infinite scroll effect
// // // //         setActivities([...newActivities, ...newActivities]);
// // // //       })
// // // //       .catch(() => {
// // // //         toast.error("Failed to load recent activities");
// // // //       });
// // // //   }, []);

// // // //   // Auto scroll logic
// // // //   useEffect(() => {
// // // //     const scrollElement = scrollRef.current;
// // // //     let scrollPos = 2;

// // // //     const scrollInterval = setInterval(() => {
// // // //       if (scrollElement) {
// // // //         scrollPos += 1;
// // // //         if (scrollPos >= scrollElement.scrollHeight / 2) {
// // // //           scrollPos = 0;
// // // //         }
// // // //         scrollElement.scrollTop = scrollPos;
// // // //       }
// // // //     }, 30);

// // // //     return () => clearInterval(scrollInterval);
// // // //   }, [activities]);

// // // //   return (
// // // //     <div className="bg-white p-4 rounded-xl border shadow-sm max-w-md mx-auto">
// // // //       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// // // //         <Activity className="w-5 h-5" /> Recent Activities
// // // //       </h3>
// // // //       <div
// // // //         ref={scrollRef}
// // // //         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth"
// // // //       >
// // // //         <ul className="space-y-3">
// // // //           {activities.map((item, index) => (
// // // //             <li key={index} className="flex items-start gap-2">
// // // //               {item.icon === "star" ? (
// // // //                 <Star className="w-4 h-4 text-amber-500 mt-1" />
// // // //               ) : (
// // // //                 <span
// // // //                   className={`w-3 h-3 rounded-full mt-1 ${
// // // //                     item.icon === "dot" ? "bg-green-500" : "bg-gray-400"
// // // //                   }`}
// // // //                 />
// // // //               )}
// // // //               <div>
// // // //                 <p>
// // // //                   <span className="font-medium">{item.name}</span> {item.action}
// // // //                 </p>
// // // //                 <p className="text-xs text-gray-500">{item.time}</p>
// // // //                 {/* Optional: show masked email in small text */}
// // // //                 {/* <p className="text-xs text-gray-400 italic">{item.email}</p> */}
// // // //               </div>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }





// // // import { useEffect, useRef, useState } from "react";
// // // import { Activity, Star } from "lucide-react";
// // // import { toast } from "react-toastify";

// // // function maskName(name) {
// // //   if (!name) return "User";
// // //   return name[0] + "****";
// // // }

// // // function maskEmail(email) {
// // //   if (!email) return "";
// // //   const [user, domain] = email.split("@");
// // //   if (!user || !domain) return "****";
// // //   return user[0] + "***@" + domain.replace(/.(?=.*\.)/g, "*");
// // // }

// // // const dummyClients = [
// // //   { name: "Sarah Johnson", email: "sarah@example.com" },
// // //   { name: "Michael Chen", email: "michael@example.com" },
// // //   { name: "Anna Lee", email: "anna.lee@example.com" },
// // //   { name: "David Park", email: "david.park@example.com" },
// // //   { name: "Emily Stone", email: "emily.stone@example.com" },
// // // ];

// // // export default function RecentActivities() {
// // //   const scrollRef = useRef(null);
// // //   const [activities, setActivities] = useState([]);

// // //   useEffect(() => {
// // //     fetch("http://localhost:5000/api/clients")
// // //       .then((res) => {
// // //         console.log("Fetch status:", res.status);
// // //         if (!res.ok) throw new Error("Network response was not ok");
// // //         return res.json();
// // //       })
// // //       .then((data) => {
// // //         console.log("Data received:", data);
// // //         // Adjust if data structure is nested:
// // //         const clients = Array.isArray(data) ? data : data.clients || dummyClients;

// // //         const actionSamples = [
// // //           "completed weekly check-in",
// // //           "reached weight loss milestone",
// // //           "paused plan temporarily",
// // //           "updated dietary preferences",
// // //           "missed last session",
// // //         ];
// // //         const iconSamples = ["dot", "star", "dot-gray", "dot"];

// // //         const newActivities = clients.map((client, idx) => ({
// // //           name: maskName(client.name),
// // //           email: maskEmail(client.email),
// // //           action: actionSamples[idx % actionSamples.length],
// // //           time: `${(idx + 1) * 2} hours ago`,
// // //           icon: iconSamples[idx % iconSamples.length],
// // //         }));

// // //         setActivities([...newActivities, ...newActivities]);
// // //       })
// // //       .catch((error) => {
// // //         console.error("Fetch error:", error);
// // //         toast.error("Failed to load recent activities — using fallback data");

// // //         // fallback to dummy data
// // //         const actionSamples = [
// // //           "completed weekly check-in",
// // //           "reached weight loss milestone",
// // //           "paused plan temporarily",
// // //           "updated dietary preferences",
// // //           "missed last session",
// // //         ];
// // //         const iconSamples = ["dot", "star", "dot-gray", "dot"];

// // //         const newActivities = dummyClients.map((client, idx) => ({
// // //           name: maskName(client.name),
// // //           email: maskEmail(client.email),
// // //           action: actionSamples[idx % actionSamples.length],
// // //           time: `${(idx + 1) * 2} hours ago`,
// // //           icon: iconSamples[idx % iconSamples.length],
// // //         }));

// // //         setActivities([...newActivities, ...newActivities]);
// // //       });
// // //   }, []);

// // //   // Auto scroll
// // //   useEffect(() => {
// // //     const scrollElement = scrollRef.current;
// // //     let scrollPos = 2;

// // //     const scrollInterval = setInterval(() => {
// // //       if (scrollElement) {
// // //         scrollPos += 1;
// // //         if (scrollPos >= scrollElement.scrollHeight / 2) {
// // //           scrollPos = 0;
// // //         }
// // //         scrollElement.scrollTop = scrollPos;
// // //       }
// // //     }, 30);

// // //     return () => clearInterval(scrollInterval);
// // //   }, [activities]);

// // //   return (
// // //     <div className="bg-white p-4 rounded-xl border shadow-sm max-w-md mx-auto">
// // //       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// // //         <Activity className="w-5 h-5" /> Recent Activities
// // //       </h3>
// // //       <div
// // //         ref={scrollRef}
// // //         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth"
// // //       >
// // //         <ul className="space-y-3">
// // //           {activities.map((item, index) => (
// // //             <li key={index} className="flex items-start gap-2">
// // //               {item.icon === "star" ? (
// // //                 <Star className="w-4 h-4 text-amber-500 mt-1" />
// // //               ) : (
// // //                 <span
// // //                   className={`w-3 h-3 rounded-full mt-1 ${
// // //                     item.icon === "dot" ? "bg-green-500" : "bg-gray-400"
// // //                   }`}
// // //                 />
// // //               )}
// // //               <div>
// // //                 <p>
// // //                   <span className="font-medium">{item.name}</span> {item.action}
// // //                 </p>
// // //                 <p className="text-xs text-gray-500">{item.time}</p>
// // //                 {/* Uncomment to show masked email */}
// // //                 {/* <p className="text-xs text-gray-400 italic">{item.email}</p> */}
// // //               </div>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // import { useEffect, useRef } from "react";
// // // import { Activity, Star } from "lucide-react";

// // // const activities = [
// // //   { name: "Sarah Johnson", email: "sarah.johnson@example.com", action: "completed weekly check-in", time: "2 hours ago", icon: "dot" },
// // //   { name: "Michael Chen", email: "michael.chen@example.com", action: "reached weight loss milestone", time: "4 hours ago", icon: "star" },
// // //   { name: "Anna Lee", email: "anna.lee@example.com", action: "paused plan temporarily", time: "2 days ago", icon: "dot-gray" },
// // //   { name: "David Kim", email: "david.kim@example.com", action: "updated dietary preferences", time: "3 days ago", icon: "dot" },
// // //   { name: "Laura Lin", email: "laura.lin@example.com", action: "missed last session", time: "4 days ago", icon: "dot-gray" },
// // // ];

// // // // Mask functions
// // // function maskName(name) {
// // //   if (!name) return "User";
// // //   // Show first letter and mask rest with stars (e.g., Sarah => S****)
// // //   return name[0] + "*".repeat(Math.max(name.length - 1, 0));
// // // }

// // // function maskEmail(email) {
// // //   if (!email) return "";
// // //   const [user, domain] = email.split("@");
// // //   if (!user || !domain) return "****";
// // //   // Mask user after first letter, mask domain except TLD
// // //   const maskedUser = user[0] + "*".repeat(Math.max(user.length - 1, 0));
// // //   const domainParts = domain.split(".");
// // //   const maskedDomain = "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
// // //   return maskedUser + "@" + maskedDomain;
// // // }

// // // // Duplicate for infinite scroll
// // // const duplicated = [...activities, ...activities];

// // // export default function RecentActivities() {
// // //   const scrollRef = useRef(null);

// // //   useEffect(() => {
// // //     const scrollElement = scrollRef.current;
// // //     let scrollPos = 2;

// // //     const scrollInterval = setInterval(() => {
// // //       if (scrollElement) {
// // //         scrollPos += 1;
// // //         if (scrollPos >= scrollElement.scrollHeight / 2) {
// // //           scrollPos = 0;
// // //         }
// // //         scrollElement.scrollTop = scrollPos;
// // //       }
// // //     }, 30);

// // //     return () => clearInterval(scrollInterval);
// // //   }, []);

// // //   return (
// // //     <div className="bg-white p-4 rounded-xl border shadow-sm max-w-md mx-auto">
// // //       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// // //         <Activity className="w-5 h-5" /> Recent Activities
// // //       </h3>
// // //       <div
// // //         ref={scrollRef}
// // //         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth"
// // //       >
// // //         <ul className="space-y-3">
// // //           {duplicated.map((item, index) => (
// // //             <li key={index} className="flex items-start gap-2">
// // //               {item.icon === "star" ? (
// // //                 <Star className="w-4 h-4 text-amber-500 mt-1" />
// // //               ) : (
// // //                 <span
// // //                   className={`w-3 h-3 rounded-full mt-1 ${
// // //                     item.icon === "dot" ? "bg-green-500" : "bg-gray-400"
// // //                   }`}
// // //                 />
// // //               )}
// // //               <div>
// // //                 <p>
// // //                   <span className="font-medium">{maskName(item.name)}</span> {item.action}
// // //                 </p>
// // //                 <p className="text-xs text-gray-500">{item.time}</p>
// // //                 <p className="text-xs text-gray-400 italic">{maskEmail(item.email)}</p>
// // //               </div>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// import { useEffect, useRef } from "react";
// import { Activity, Star } from "lucide-react";

// const activities = [
//   { name: "Sarah Johnson", email: "sarah.johnson@example.com", action: "completed weekly check-in", time: "2 hours ago", icon: "dot" },
//   { name: "Michael Chen", email: "michael.chen@example.com", action: "reached weight loss milestone", time: "4 hours ago", icon: "star" },
//   { name: "Anna Lee", email: "anna.lee@example.com", action: "paused plan temporarily", time: "2 days ago", icon: "dot-gray" },
//   { name: "David Kim", email: "david.kim@example.com", action: "updated dietary preferences", time: "3 days ago", icon: "dot" },
//   { name: "Laura Lin", email: "laura.lin@example.com", action: "missed last session", time: "4 days ago", icon: "dot-gray" },
// ];

// // Mask name: first letter + stars
// function maskName(name) {
//   if (!name) return "User";
//   return name[0] + "*".repeat(Math.max(name.length - 1, 0));
// }

// // Mask email: first letter + stars before @, mask domain except TLD
// function maskEmail(email) {
//   if (!email) return "";
//   const [user, domain] = email.split("@");
//   if (!user || !domain) return "****";
//   const maskedUser = user[0] + "*".repeat(Math.max(user.length - 1, 0));
//   const domainParts = domain.split(".");
//   const maskedDomain = "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
//   return maskedUser + "@" + maskedDomain;
// }

// const duplicated = [...activities, ...activities];

// export default function RecentActivities() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     let scrollPos = 2;

//     const scrollInterval = setInterval(() => {
//       if (scrollElement) {
//         scrollPos += 1;
//         if (scrollPos >= scrollElement.scrollHeight / 2) {
//           scrollPos = 0;
//         }
//         scrollElement.scrollTop = scrollPos;
//       }
//     }, 30);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-xl border shadow-sm">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         <Activity className="w-5 h-5" /> Recent Activities
//       </h3>
//       <div
//         ref={scrollRef}
//         className="max-h-[200px] overflow-y-auto pr-2 scroll-smooth"
//       >
//         <ul className="space-y-3">
//           {duplicated.map((item, index) => (
//             <li key={index} className="flex items-start gap-2">
//               {item.icon === "star" ? (
//                 <Star className="w-4 h-4 text-amber-500 mt-1" />
//               ) : (
//                 <span
//                   className={`w-3 h-3 rounded-full mt-1 ${
//                     item.icon === "dot" ? "bg-green-500" : "bg-gray-400"
//                   }`}
//                 />
//               )}
//               <div>
//                 <p>
//                   <span className="font-medium">{maskName(item.name)}</span> {item.action}
//                 </p>
//                 <p className="text-xs text-gray-500">{item.time}</p>
//                 {/* Uncomment below line if you want to show masked email */}
//                 {/* <p className="text-xs text-gray-400 italic">{maskEmail(item.email)}</p> */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef } from "react";
import { Activity, Star } from "lucide-react";

const activities = [
  { name: "Sarah Johnson", email: "sarah.johnson@example.com", action: "completed weekly check-in", time: "2 hours ago", icon: "dot" },
  { name: "Michael Chen", email: "michael.chen@example.com", action: "reached weight loss milestone", time: "4 hours ago", icon: "star" },
  { name: "Anna Lee", email: "anna.lee@example.com", action: "paused plan temporarily", time: "2 days ago", icon: "dot-gray" },
  { name: "David Kim", email: "david.kim@example.com", action: "updated dietary preferences", time: "3 days ago", icon: "dot" },
  { name: "Laura Lin", email: "laura.lin@example.com", action: "missed last session", time: "4 days ago", icon: "dot-gray" },
];

function maskName(name) {
  return name ? name[0] + "*".repeat(Math.max(name.length - 1, 0)) : "User";
}

function maskEmail(email) {
  if (!email) return "";
  const [user, domain] = email.split("@");
  const maskedUser = user[0] + "*".repeat(user.length - 1);
  const domainParts = domain.split(".");
  const maskedDomain = "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
  return maskedUser + "@" + maskedDomain;
}

const duplicated = [...activities, ...activities];

export default function RecentActivities() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollPos = 0;
    const scrollInterval = setInterval(() => {
      if (scrollElement) {
        scrollPos += 1;
        if (scrollPos >= scrollElement.scrollHeight / 2) scrollPos = 0;
        scrollElement.scrollTop = scrollPos;
      }
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-3 flex items-center gap-2">
        <Activity className="w-5 h-5" /> 
        <h3 className="text-lg font-semibold">Recent Activities</h3>
      </div>

      <div
        ref={scrollRef}
        className="max-h-[220px] overflow-y-auto scroll-smooth"
      >
        <ul className="divide-y divide-green-100">
          {duplicated.map((item, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 p-3 transition-all duration-200 hover:bg-green-50 ${
                index % 2 === 0 ? "bg-white/70" : "bg-green-50/50"
              }`}
            >
              {item.icon === "star" ? (
                <Star className="w-5 h-5 text-yellow-500 drop-shadow-glow" />
              ) : (
                <span
                  className={`w-3 h-3 rounded-full mt-1 ${
                    item.icon === "dot"
                      ? "bg-green-500 animate-pulse"
                      : "bg-gray-400"
                  }`}
                />
              )}
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-800">
                    {maskName(item.name)}
                  </span>{" "}
                  {item.action}
                </p>
                <p className="text-xs text-gray-500">{item.time}</p>
                {/* Uncomment to show masked email */}
                {/* <p className="text-xs text-gray-400 italic">{maskEmail(item.email)}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
