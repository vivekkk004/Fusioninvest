import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailVerificationPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    setLoading(true);

    try {
      // Assuming you have the user ID stored in localStorage (or use a different method to get it)
      const userId = localStorage.getItem("userId");

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-account`, {
        userId,
        otp,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/dashboard"); // Redirect to dashboard or another page after success
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Email Verification</h2>
        <p className="text-center mb-4">
          Please enter the OTP sent to your email to verify your account.
        </p>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter OTP"
            maxLength="6"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleVerifyOtp}
            disabled={loading}
            className={`w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg focus:outline-none ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
