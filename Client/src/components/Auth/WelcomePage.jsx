// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // export default function WelcomePage({ user, onLogout }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       className="flex flex-col items-center justify-center text-white"
// // //     >
// // //       <motion.h1
// // //         initial={{ scale: 0.5 }}
// // //         animate={{ scale: 1 }}
// // //         transition={{ duration: 0.8 }}
// // //         className="text-4xl font-bold mb-4"
// // //       >
// // //         Welcome to BiteSized Project 🎉
// // //       </motion.h1>
// // //       <motion.p
// // //         initial={{ y: 30, opacity: 0 }}
// // //         animate={{ y: 0, opacity: 1 }}
// // //         transition={{ delay: 0.3 }}
// // //         className="text-lg mb-6"
// // //       >
// // //         Hello, {user.name || user.email}!
// // //       </motion.p>
// // //       <button
// // //         onClick={onLogout}
// // //         className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600"
// // //       >
// // //         Logout
// // //       </button>
// // //     </motion.div>
// // //   );
// // // // }

// // // import React, { useEffect, useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useNavigate } from "react-router-dom";

// // // // Fruits & veggies
// // // const items = [
// // //   "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
// // //   "/images/mango.png", "/images/tomato.png", "/images/pineapple.png"
// // // ];

// // // export default function WelcomePage({ user }) {
// // //   const [showAnimation, setShowAnimation] = useState(true);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setShowAnimation(false);
// // //       navigate("/dashboard"); // Go to /dashboard
// // //     }, 5000);
// // //     return () => clearTimeout(timer);
// // //   }, [navigate]);

// // //   return (
// // //     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
// // //       {/* Background */}
// // //       <div
// // //         className="absolute inset-0 bg-cover bg-center filter brightness-75"
// // //         style={{
// // //           backgroundImage: `url('/images/nutrition-bg.jpg')`,
// // //         }}
// // //       ></div>
// // //       <div className="absolute inset-0 bg-black/40"></div>

// // //       <AnimatePresence>
// // //         {showAnimation && (
// // //           <>
// // //             {items.map((item, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 initial={{
// // //                   y: -100,
// // //                   x: Math.random() * window.innerWidth,
// // //                   rotate: 0,
// // //                   scale: Math.random() * 0.5 + 0.8
// // //                 }}
// // //                 animate={{
// // //                   y: window.innerHeight + 50,
// // //                   rotate: Math.random() * 360
// // //                 }}
// // //                 transition={{
// // //                   duration: 3 + Math.random() * 2,
// // //                   repeat: Infinity,
// // //                   delay: Math.random() * 2,
// // //                   ease: "linear"
// // //                 }}
// // //                 className="absolute text-5xl drop-shadow-lg"
// // //               >
// // //                 {item.includes("/") ? (
// // //                   <img src={item} alt="fruit" className="w-12 h-12" />
// // //                 ) : (
// // //                   item
// // //                 )}
// // //               </motion.div>
// // //             ))}

// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.8 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               transition={{ duration: 0.8 }}
// // //               className="text-center z-10"
// // //             >
// // //               <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg">
// // //                 Welcome to BiteSized Project 🎉
// // //               </h1>
// // //               <p className="text-4xl font-bold drop-shadow-lg">
// // //                 Hello, {user.name || user.email}!
// // //               </p>
// // //             </motion.div>
// // //           </>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // }




// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";

// // // Fruits, veggies, gifts
// // const items = [
// //   "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
// //   "🎁", "🍉", "🍒", "🌽", "🥝", "🍍"
// // ];

// // // Random helper for motion effects
// // const randomRange = (min, max) => Math.random() * (max - min) + min;

// // export default function WelcomePage({ user }) {
// //   const [showAnimation, setShowAnimation] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowAnimation(false);
// //       setTimeout(() => {
// //         navigate("/dashboard");
// //       }, 800); // smooth pop-up delay
// //     }, 10000); // 10 seconds animation
// //     return () => clearTimeout(timer);
// //   }, [navigate]);

// //   return (
// //     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
// //       {/* Animated Background */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{
// //           backgroundImage: `url('/images/nutrition-bg.jpg')`
// //         }}
// //       ></div>

// //       <AnimatePresence>
// //         {showAnimation && (
// //           <>
// //             {/* Animated falling & floating items */}
// //             {items.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{
// //                   y: -100,
// //                   x: randomRange(50, window.innerWidth - 50),
// //                   rotate: 0,
// //                   scale: randomRange(0.7, 1.4),
// //                   opacity: 0
// //                 }}
// //                 animate={{
// //                   y: window.innerHeight + 50,
// //                   rotate: randomRange(0, 360),
// //                   opacity: 1
// //                 }}
// //                 transition={{
// //                   duration: randomRange(3, 6),
// //                   repeat: Infinity,
// //                   delay: Math.random() * 2,
// //                   ease: "easeInOut"
// //                 }}
// //                 className="absolute text-5xl drop-shadow-xl"
// //               >
// //                 {item}
// //               </motion.div>
// //             ))}

// //             {/* Welcome Text with per-letter animation */}
// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 1 }}
// //               className="text-center z-10"
// //             >
// //               <h1 className="mb-6 text-6xl font-extrabold flex justify-center flex-wrap">
// //                 {"Welcome".split("").map((letter, i) => (
// //                   <motion.span
// //                     key={i}
// //                     initial={{ y: -50, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     transition={{ delay: i * 0.1 }}
// //                     className="mx-1 text-yellow-300 drop-shadow-lg"
// //                   >
// //                     {letter}
// //                   </motion.span>
// //                 ))}
// //                 &nbsp;
// //                 {"to".split("").map((letter, i) => (
// //                   <motion.span
// //                     key={`to-${i}`}
// //                     initial={{ y: 50, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     transition={{ delay: i * 0.1 + 1 }}
// //                     className="mx-1 text-green-300 drop-shadow-lg"
// //                   >
// //                     {letter}
// //                   </motion.span>
// //                 ))}
// //               </h1>
// //               <motion.h2
// //                 initial={{ scale: 0, opacity: 0 }}
// //                 animate={{ scale: 1, opacity: 1 }}
// //                 transition={{ delay: 2, type: "spring", stiffness: 100 }}
// //                 className="text-5xl font-bold text-pink-400 drop-shadow-lg"
// //               >
// //                 BiteSized Project 🎉
// //               </motion.h2>

// //               <motion.p
// //                 initial={{ y: 30, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ delay: 3 }}
// //                 className="text-3xl font-semibold mt-4 text-white drop-shadow-lg"
// //               >
// //                 Hello, {user.name || user.email}!
// //               </motion.p>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }




// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";

// // // Fruits, veggies, gifts
// // const items = [
// //   "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
// //   "🎁", "🍉", "🍒", "🌽", "🥝", "🍍"
// // ];

// // const randomRange = (min, max) => Math.random() * (max - min) + min;

// // export default function WelcomePage({ user }) {
// //   const [showAnimation, setShowAnimation] = useState(true);
// //   const [styleType] = useState(() => Math.floor(Math.random() * 3)); // Pick 0, 1, or 2
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowAnimation(false);
// //       setTimeout(() => {
// //         navigate("/dashboard");
// //       }, 800);
// //     }, 10000);
// //     return () => clearTimeout(timer);
// //   }, [navigate]);

// //   const renderFallingItems = () => {
// //     switch (styleType) {
// //       case 0: // Classic falling
// //         return items.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{
// //               y: -100,
// //               x: randomRange(50, window.innerWidth - 50),
// //               rotate: 0,
// //               scale: randomRange(0.7, 1.4),
// //               opacity: 0
// //             }}
// //             animate={{
// //               y: window.innerHeight + 50,
// //               rotate: randomRange(0, 360),
// //               opacity: 1
// //             }}
// //             transition={{
// //               duration: randomRange(3, 6),
// //               repeat: Infinity,
// //               delay: Math.random() * 2,
// //               ease: "easeInOut"
// //             }}
// //             className="absolute text-5xl drop-shadow-xl"
// //           >
// //             {item}
// //           </motion.div>
// //         ));

// //       case 1: // Floating up and down (balloon style)
// //         return items.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{
// //               y: randomRange(0, window.innerHeight),
// //               x: randomRange(50, window.innerWidth - 50),
// //               scale: randomRange(0.8, 1.5),
// //               opacity: 0
// //             }}
// //             animate={{
// //               y: ["0%", "-20%", "0%"],
// //               opacity: 1
// //             }}
// //             transition={{
// //               duration: randomRange(3, 5),
// //               repeat: Infinity,
// //               delay: Math.random() * 2,
// //               ease: "easeInOut"
// //             }}
// //             className="absolute text-5xl drop-shadow-lg"
// //           >
// //             {item}
// //           </motion.div>
// //         ));

// //       case 2: // Spiral / rotating in place
// //         return items.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{
// //               y: randomRange(0, window.innerHeight),
// //               x: randomRange(50, window.innerWidth - 50),
// //               scale: randomRange(0.7, 1.2),
// //               rotate: 0,
// //               opacity: 0
// //             }}
// //             animate={{
// //               rotate: 360,
// //               opacity: 1
// //             }}
// //             transition={{
// //               duration: randomRange(2, 4),
// //               repeat: Infinity,
// //               delay: Math.random() * 2,
// //               ease: "linear"
// //             }}
// //             className="absolute text-5xl drop-shadow-lg"
// //           >
// //             {item}
// //           </motion.div>
// //         ));

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
// //       {/* Background */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center"
// //         style={{
// //           backgroundImage: `url('/images/nutrition-bg.jpg')`
// //         }}
// //       ></div>

// //       <AnimatePresence>
// //         {showAnimation && (
// //           <>
// //             {renderFallingItems()}

// //             {/* Animated Welcome Text */}
// //             <motion.div
// //               initial={{ scale: 0.8, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 1 }}
// //               className="text-center z-10"
// //             >
// //               <h1 className="mb-6 text-6xl font-extrabold flex justify-center flex-wrap">
// //                 {"Welcome".split("").map((letter, i) => (
// //                   <motion.span
// //                     key={i}
// //                     initial={{ y: -50, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     transition={{ delay: i * 0.1 }}
// //                     className="mx-1 text-yellow-300 drop-shadow-lg"
// //                   >
// //                     {letter}
// //                   </motion.span>
// //                 ))}
// //                 &nbsp;
// //                 {"to".split("").map((letter, i) => (
// //                   <motion.span
// //                     key={`to-${i}`}
// //                     initial={{ y: 50, opacity: 0 }}
// //                     animate={{ y: 0, opacity: 1 }}
// //                     transition={{ delay: i * 0.1 + 1 }}
// //                     className="mx-1 text-green-300 drop-shadow-lg"
// //                   >
// //                     {letter}
// //                   </motion.span>
// //                 ))}
// //               </h1>
// //               <motion.h2
// //                 initial={{ scale: 0, opacity: 0 }}
// //                 animate={{ scale: 1, opacity: 1 }}
// //                 transition={{ delay: 2, type: "spring", stiffness: 100 }}
// //                 className="text-5xl font-bold text-pink-400 drop-shadow-lg"
// //               >
// //                 BiteSized Project 🎉
// //               </motion.h2>

// //               <motion.p
// //                 initial={{ y: 30, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 transition={{ delay: 3 }}
// //                 className="text-3xl font-semibold mt-4 text-white drop-shadow-lg"
// //               >
// //                 Hello, {user.name || user.email}!
// //               </motion.p>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Confetti from "react-confetti";

// const items = [
//   "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
//   "🎁", "🍉", "🍒", "🌽", "🥝", "🍍", "🎂", "🍪"
// ];

// const randomRange = (min, max) => Math.random() * (max - min) + min;

// export default function WelcomePage({ user }) {
//   const [showAnimation, setShowAnimation] = useState(true);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const confettiTimer = setTimeout(() => setShowConfetti(true), 8000);
//     const timer = setTimeout(() => {
//       setShowAnimation(false);
//       setTimeout(() => navigate("/dashboard", { replace: true }), 800);
//     }, 10000);
//     return () => {
//       clearTimeout(timer);
//       clearTimeout(confettiTimer);
//     };
//   }, [navigate]);

//   const renderFallingItems = () => {
//     return items.map((item, index) => (
//       <motion.div
//         key={index}
//         initial={{
//           y: -100,
//           x: randomRange(50, window.innerWidth - 50),
//           rotate: 0,
//           scale: randomRange(0.7, 1.4),
//           opacity: 0
//         }}
//         animate={{
//           y: window.innerHeight + 50,
//           rotate: randomRange(0, 360),
//           opacity: 1
//         }}
//         transition={{
//           duration: randomRange(3, 6),
//           repeat: Infinity,
//           delay: Math.random() * 2,
//           ease: "easeInOut"
//         }}
//         className="absolute text-5xl drop-shadow-xl"
//       >
//         {item}
//       </motion.div>
//     ));
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url('/images/nutrition-bg.jpg')`
//         }}
//       ></div>

//       {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

//       <AnimatePresence>
//         {showAnimation && (
//           <>
//             {renderFallingItems()}

//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 1 }}
//               className="text-center z-10"
//             >
//               <h1 className="mb-6 text-6xl font-extrabold flex justify-center flex-wrap">
//                 {"Welcome".split("").map((letter, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ y: -50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: i * 0.1 }}
//                     className="mx-1 text-yellow-300 drop-shadow-lg animate-pulse"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//                 &nbsp;
//                 {"to".split("").map((letter, i) => (
//                   <motion.span
//                     key={`to-${i}`}
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: i * 0.1 + 1 }}
//                     className="mx-1 text-green-900 drop-shadow-lg"
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </h1>

//               <motion.h2
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 2, type: "spring", stiffness: 120 }}
//                 className="text-5xl font-bold text-green-800 drop-shadow-lg animate-bounce"
//               >
//                 BiteSized Project 🎉
//               </motion.h2>

//               <motion.p
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 3 }}
//                 className="text-3xl font-semibold mt-4 text-red-600 drop-shadow-lg"
//               >
//                 Hello, {user.name || user.email}!
//               </motion.p>

//               {/* Final popup before redirect */}
//               {showConfetti && (
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 100 }}
//                   className="mt-8 px-6 py-4 bg-white text-black rounded-2xl shadow-lg text-2xl font-bold"
//                 >
//                   🎯 Let's go to your dashboard!
//                 </motion.div>
//               )}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const items = [
  "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
  "🎁", "🍉", "🍒", "🌽", "🥝", "🍍", "🎂", "🍪"
];

const randomRange = (min, max) => Math.random() * (max - min) + min;

export default function WelcomePage({ user }) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(true), 5000);
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setTimeout(() => navigate("/dashboard", { replace: true }), 800);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
    };
  }, [navigate]);

  const renderFallingItems = () =>
    items.map((item, index) => (
      <motion.div
        key={index}
        initial={{
          y: -100,
          x: randomRange(50, window.innerWidth - 50),
          rotate: 0,
          scale: randomRange(0.8, 1.5),
          opacity: 0
        }}
        animate={{
          y: window.innerHeight + 50,
          rotate: randomRange(0, 360),
          opacity: 1
        }}
        transition={{
          duration: randomRange(4, 7),
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
        className="absolute text-5xl drop-shadow-2xl"
      >
        {item}
      </motion.div>
    ));

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Radial green background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-400 via-green-600 to-green-900"></div>

      {/* Confetti */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}

      {/* Falling emojis */}
      <AnimatePresence>
        {showAnimation && renderFallingItems()}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="flex flex-wrap justify-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-600">
              {"Welcome to BiteSized".split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="mx-1"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-2xl sm:text-3xl text-red-600 md:text-4xl font-bold drop-shadow-lg"
            >
              Hello, {user.name || user.email}! 🎉
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 2.5 }}
              className="mt-8 inline-block px-6 py-4 bg-white text-green-900 rounded-3xl shadow-2xl text-xl sm:text-2xl font-extrabold"
            >
              Let's go to your dashboard!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
