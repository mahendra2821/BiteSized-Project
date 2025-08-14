// import HealthConditionCard from "./HealthConditionCard";

// const conditions = [
//   { name: "Diabetes",  color: "bg-red-500", path: "/clients/diabetes" },
//   { name: "Hypertension",  color: "bg-yellow-400", path: "/clients/hypertension" },
//   { name: "PCOS",  color: "bg-blue-500", path: "/clients/pcos" },
//   { name: "Heart Disease", color: "bg-green-600", path: "/clients/heart" },
//   { name: "General Wellness", color: "bg-green-500", path: "/clients/wellness" },
// ];  


// export default function HealthConditionGrid() {
//   return (
//     <div className="bg-white p-6 rounded-xl border shadow-sm">
//       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//         <span className="w-5 h-5 text-green-600">🧬</span> Client Health Conditions
//       </h3>
//       <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//         {conditions.map((cond) => (
//           <HealthConditionCard key={cond.name} {...cond} />
//         ))}
//       </div>
//     </div>
//   );
// }


// // import { useState, useEffect } from "react";
// // import HealthConditionCard from "./HealthConditionCard";

// // const initialConditions = [
// //   { name: "Diabetes", count: 0, color: "bg-red-500", path: "/clients/diabetes" },
// //   { name: "Hypertension", count: 0, color: "bg-yellow-400", path: "/clients/hypertension" },
// //   { name: "PCOS", count: 0, color: "bg-blue-500", path: "/clients/pcos" },
// //   { name: "Heart Disease", count: 0, color: "bg-green-600", path: "/clients/heart" },
// //   { name: "General Wellness", count: 0, color: "bg-green-500", path: "/clients/wellness" },
// // ];

// // const apiEndpoints = {
// //   Diabetes: "/api/diabetes/count",
// //   Hypertension: "/api/hypertension/count",
// //   PCOS: "/api/pcos/count",
// //   "Heart Disease": "/api/heart/count",
// //   "General Wellness": "/api/wellness/count",
// // };

// // export default function HealthConditionGrid() {
// //   const [conditions, setConditions] = useState(initialConditions);

// //   useEffect(() => {
// //     async function fetchCounts() {
// //       try {
// //         const fetches = conditions.map(async (cond) => {
// //           const res = await fetch(`http://localhost:5000${apiEndpoints[cond.name]}`);
// //           if (!res.ok) throw new Error(`Failed to fetch ${cond.name} count`);
// //           const data = await res.json();
// //           return { name: cond.name, count: data.count || 0 };
// //         });

// //         const counts = await Promise.all(fetches);

// //         setConditions((conds) =>
// //           conds.map((cond) => {
// //             const updated = counts.find((c) => c.name === cond.name);
// //             return updated ? { ...cond, count: updated.count } : cond;
// //           })
// //         );
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     }

// //     fetchCounts();
// //   }, []);

// //   return (
// //     <div className="bg-white p-6 rounded-xl border shadow-sm">
// //       <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// //         <span className="w-5 h-5 text-green-600">🧬</span> Client Health Conditions
// //       </h3>
// //       <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
// //         {conditions.map((cond) => (
// //           <HealthConditionCard key={cond.name} {...cond} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



import HealthConditionCard from "./HealthConditionCard";
import { Activity, Heart, Droplet, Stethoscope, Apple, Sparkles } from "lucide-react";

const conditions = [
  { name: "Diabetes", color: "from-red-400 to-red-500", path: "/clients/diabetes", icon: Droplet },
  { name: "Hypertension", color: "from-yellow-300 to-yellow-500", path: "/clients/hypertension", icon: Activity },
  { name: "PCOS", color: "from-blue-400 to-blue-500", path: "/clients/pcos", icon: Sparkles },
  { name: "Heart Disease", color: "from-green-500 to-green-600", path: "/clients/heart", icon: Heart },
  { name: "General Wellness", color: "from-emerald-400 to-emerald-500", path: "/clients/wellness", icon: Apple },
];

export default function HealthConditionGrid() {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border border-green-100 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 border-b pb-2 border-green-100">
        <span className="w-2 h-6 bg-green-500 rounded-full" />
        <h3 className="text-lg font-semibold text-gray-800">Client Health Conditions</h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {conditions.map(({ name, color, path, icon: Icon }) => (
          <div
            key={name}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-white cursor-pointer 
            bg-gradient-to-br ${color} shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            onClick={() => (window.location.href = path)}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
