// // import React from "react";
// // import { useLocation, useNavigate, useParams } from "react-router-dom";

// // export default function PlanDetailsPage() {
// //   const { planName } = useParams();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const plan = location.state;

// //   if (!plan) {
// //     return <p className="p-8">Plan details not found.</p>;
// //   }

// //   return (
// //     <section className="p-8">
// //       <h2 className="text-2xl font-bold">{plan.name}</h2>
// //       <p>{plan.description}</p>
// //       <p className="mt-2 font-semibold">Price: ₹{plan.price}</p>
// //       <ul className="mt-4 list-disc ml-6">
// //         {plan.features.map((f, i) => <li key={i}>{f}</li>)}
// //       </ul>
// //       <button
// //         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
// //         onClick={() => navigate(`/payment-form/${encodeURIComponent(plan.name)}`, { state: plan })}
// //       >
// //         Proceed to Payment
// //       </button>
// //     </section>
// //   );
// // }

// import React from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// export default function PlanDetailsPage() {
//   const { planName } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const plan = location.state;

//   if (!plan) {
//     return (
//       <p className="p-8 text-center text-red-500 font-semibold">
//         Plan details not found.
//       </p>
//     );
//   }

//   // Theme colors by plan type
//   const colorThemes = {
//     green: "from-green-500 to-green-600 text-white",
//     yellow: "from-yellow-400 to-yellow-500 text-gray-800",
//     blue: "from-blue-500 to-blue-600 text-white",
//   };

//   const theme = colorThemes[plan.color] || colorThemes.green;

//   return (
//     <section className="flex justify-center items-center p-8">
//       <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-3">{plan.name}</h2>
//         <p className="text-gray-500 mb-6">{plan.description}</p>

//         {/* Price */}
//         <div
//           className={`bg-gradient-to-r ${theme} rounded-lg px-6 py-4 text-center mb-6 shadow-md`}
//         >
//           <p className="text-sm uppercase tracking-wide">Price</p>
//           <p className="text-4xl font-bold">₹{plan.price}</p>
//           <span className="text-sm opacity-90">per month</span>
//         </div>

//         {/* Features */}
//         <h3 className="text-lg font-semibold mb-3">What’s Included:</h3>
//         <ul className="space-y-2 mb-8">
//           {plan.features.map((f, i) => (
//             <li key={i} className="flex items-center text-gray-700">
//               <span className="text-green-500 mr-2">✔</span>
//               {f}
//             </li>
//           ))}
//         </ul>

//         {/* Primary Action */}
//         <button
//           className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-transform transform hover:scale-105"
//           onClick={() =>
//             navigate(`/payment-form/${encodeURIComponent(plan.name)}`, {
//               state: plan,
//             })
//           }
//         >
//           Proceed to Payment
//         </button>

//         {/* Secondary Action */}
//         <button
//           className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-sm transition-transform transform hover:scale-105"
//           onClick={() => navigate(-1)}
//         >
//           Back to Plans
//         </button>
//       </div>
//     </section>
//   );
// }






import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function PlanDetailsPage() {
  const { planName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state;

  if (!plan) {
    return (
      <p className="p-8 text-center text-red-500 font-semibold md:mt-0">
        Plan details not found.
      </p>
    );
  }

  // Theme colors by plan type
  const colorThemes = {
    green: "from-green-400 to-green-600 text-white",
    yellow: "from-yellow-400 to-yellow-500 text-gray-800",
    blue: "from-blue-400 to-blue-600 text-white",
    red: "from-red-400 to-red-600 text-white",
  };

  const theme = colorThemes[plan.color] || colorThemes.green;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <motion.div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-green-200 p-8 sm:p-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Gradient Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-3 text-center drop-shadow-md">
          {plan.name}
        </h2>
        <p className="text-green-900/80 mb-6 text-center leading-relaxed">
          {plan.description}
        </p>

        {/* Price */}
        <div
          className={`bg-gradient-to-r ${theme} rounded-xl px-6 py-4 text-center mb-6 shadow-lg`}
        >
          <p className="text-sm uppercase tracking-wide opacity-90">Price</p>
          <p className="text-3xl sm:text-4xl font-bold mt-1">₹{plan.price}</p>
          <span className="text-sm opacity-90">/ month</span>
        </div>

        {/* Features */}
        <h3 className="text-lg font-semibold mb-3 text-green-800">What’s Included:</h3>
        <ul className="space-y-2 mb-8">
          {plan.features.map((f, i) => (
            <li
              key={i}
              className="flex items-center text-green-900 text-base sm:text-lg"
            >
              <span className="text-green-600 mr-3 text-xl">✔</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-4 rounded-2xl font-semibold text-white bg-green-700 hover:bg-green-800 shadow-lg transition-all"
            onClick={() =>
              navigate(`/payment-form/${encodeURIComponent(plan.name)}`, {
                state: plan,
              })
            }
          >
            Proceed to Payment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-4 rounded-2xl font-semibold text-green-800 bg-green-100 hover:bg-green-200 shadow-sm transition-all"
            onClick={() => navigate(-1)}
          >
            Back to Plans
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
