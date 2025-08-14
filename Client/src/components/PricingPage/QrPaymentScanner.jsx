// // // import React from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // export default function QrPaymentScanner() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   return (
// // //     <section className="p-8 text-center">
// // //       <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
// // //       <p className="mb-6">Use Google Pay to scan and complete payment.</p>

// // //       {/* Make sure the image is in public folder as 'gpay-qr.png' */}
// // //       <img
// // //         src="/gpay-qr.png"
// // //         alt="Google Pay QR"
// // //         className="mx-auto w-64"
// // //       />

// // //       <button
// // //         className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
// // //         onClick={() => navigate("/success")}
// // //       >
// // //         Payment Done
// // //       </button>
// // //     </section>
// // //   );
// // // }





// // // import React, { useState } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "axios";

// // // export default function QrPaymentScanner() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const [paymentDone, setPaymentDone] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   const registrationData = location.state; // contains name/email from previous page

// // //   const handlePaymentDone = async () => {
// // //     if (!registrationData?.email) {
// // //       alert("Registration details missing. Please go back and register.");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       setPaymentDone(true);

// // //       // Send confirmation email API call
// // //       await axios.post("http://localhost:5000/api/send-confirmation-email", {
// // //         name: registrationData.name,
// // //         email: registrationData.email,
// // //         planName: registrationData.planName || "Your Plan",
// // //       });

// // //       // Redirect after 2 seconds
// // //       setTimeout(() => {
// // //         navigate("/success", { state: registrationData });
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert("Failed to send confirmation email. Please try again.");
// // //       setPaymentDone(false);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className="p-8 text-center">
// // //       <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
// // //       <p className="mb-6">Use Google Pay to scan and complete payment.</p>

// // //       <img src="/gpay-qr.png" alt="Google Pay QR" className="mx-auto w-64" />

// // //       {paymentDone ? (
// // //         <div className="mt-6 text-green-600 font-semibold">
// // //           ✅ Payment successful! Confirmation email sent.
// // //         </div>
// // //       ) : (
// // //         <button
// // //           className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
// // //           onClick={handlePaymentDone}
// // //           disabled={loading}
// // //         >
// // //           {loading ? "Processing..." : "Payment Done"}
// // //         </button>
// // //       )}
// // //     </section>
// // //   );
// // // }






// // // import React from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // export default function QrPaymentScanner() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const { name, email, planName } = location.state || {};

// // //   const handlePaymentDone = async () => {
// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/email/send-confirmation-email", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ name, email, planName })
// // //       });
// // //       if (res.ok) {
// // //         alert("Payment successful & confirmation email sent!");
// // //         navigate("/success");
// // //       } else {
// // //         alert("Payment done, but email failed.");
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert("Error sending email.");
// // //     }
// // //   };

// // //   if (!name || !email) {
// // //     return <p className="p-8">Missing user info.</p>;
// // //   }

// // //   return (
// // //     <section className="p-8 text-center">
// // //       <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
// // //       <p className="mb-6">Use Google Pay to scan and complete payment.</p>
// // //       <img src="/gpay-qr.png" alt="Google Pay QR" className="mx-auto w-64" />
// // //       <button
// // //         className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
// // //         onClick={handlePaymentDone}
// // //       >
// // //         Payment Done
// // //       </button>
// // //     </section>
// // //   );
// // // }



// // // import React, { useState } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "axios";

// // // export default function QrPaymentScanner() {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const [paymentDone, setPaymentDone] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   const registrationData = location.state; // contains name/email/planName

// // //   const handlePaymentDone = async () => {
// // //     if (!registrationData?.email) {
// // //       alert("Registration details missing. Please go back and register.");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       setPaymentDone(true);

// // //       await axios.post("http://localhost:5000/api/send-confirmation-email", {
// // //         name: registrationData.name,
// // //         email: registrationData.email,
// // //         planName: registrationData.planName || "Your Plan",
// // //       });

// // //       setTimeout(() => {
// // //         navigate("/success", { state: registrationData });
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert("Failed to send confirmation email. Please try again.");
// // //       setPaymentDone(false);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className="p-8 text-center">
// // //       <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
// // //       <p className="mb-6">Use Google Pay to scan and complete payment.</p>

// // //       <img src="/gpay-qr.png" alt="Google Pay QR" className="mx-auto w-64" />

// // //       {paymentDone ? (
// // //         <div className="mt-6 text-green-600 font-semibold">
// // //           ✅ Payment successful! Confirmation email sent.
// // //         </div>
// // //       ) : (
// // //         <button
// // //           className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
// // //           onClick={handlePaymentDone}
// // //           disabled={loading}
// // //         >
// // //           {loading ? "Processing..." : "Payment Done"}
// // //         </button>
// // //       )}
// // //     </section>
// // //   );
// // // }



// // import React, { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // export default function QrPaymentScanner() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const handlePaymentDone = () => {
// //     setErrorMessage("");
// //     navigate("/success", { state: location.state });
// //   };

// //   const handlePaymentNotDone = () => {
// //     setErrorMessage("Payment not completed. Please try again.");
// //   };

// //   return (
// //     <section className="p-8 text-center">
// //       <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
// //       <p className="mb-6">Use Google Pay to scan and complete payment.</p>

// //       {/* QR Code Image */}
// //       <img
// //         src="/gpay-qr.png"
// //         alt="Google Pay QR"
// //         className="mx-auto w-64 border rounded-lg"
// //       />

// //       <div className="mt-6 flex justify-center gap-4">
// //         <button
// //           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
// //           onClick={handlePaymentDone}
// //         >
// //           Payment Done
// //         </button>

// //         <button
// //           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
// //           onClick={handlePaymentNotDone}
// //         >
// //           Payment Not Done
// //         </button>
// //       </div>

// //       {errorMessage && (
// //         <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
// //       )}
// //     </section>
// //   );
// // }







import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function QrPaymentScanner() {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaymentDone = () => {
    setErrorMessage("");
    navigate("/success", { state: location.state });
  };

  const handlePaymentNotDone = () => {
    setErrorMessage("Payment not completed. Please try again.");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      {/* Header */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-4 text-center drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Scan to Pay
      </motion.h2>
      <motion.p
        className="text-green-900/80 mb-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Use Google Pay or any UPI app to scan the QR code and complete your payment securely.
      </motion.p>

      {/* QR Code Card */}
      <motion.div
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-green-200 relative w-full max-w-sm flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        <img
          src="/gpay-qr.png"
          alt="Google Pay QR"
          className="w-64 sm:w-72 border rounded-xl shadow-lg mb-6"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all"
            onClick={handlePaymentDone}
          >
            Payment Done
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all"
            onClick={handlePaymentNotDone}
          >
            Payment Not Done
          </motion.button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <motion.p
            className="md:mt-0 text-red-600 font-semibold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {errorMessage}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
