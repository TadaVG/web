import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FreeDemo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen w-screen flex flex-col justify-center items-center px-8 py-16"
      style={{
        backgroundImage: `url('https://xqgftsgrnwtzdsuziqsj.supabase.co/storage/v1/object/public/bg/background2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Black Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* ✅ Custom Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-white shadow-md z-20">
        {/* Left Logo */}
        <Link to="/" className="text-4xl font-bold text-black">
          VIDEO GENERATOR
        </Link>

        {/* Upgrade Button */}
        <button
          className="px-6 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => navigate("/pricing")}
        >
          Upgrade
        </button>
      </div>

      {/* ✅ Page Title */}
      <h1 className="relative text-5xl font-extrabold text-center text-white p-4 rounded-lg z-10">
        Free Demo
      </h1>

      {/* ✅ Demo Projects Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl w-full z-10 mt-10">
        {/* ✅ Horizontal Video Generator */}
        <div
          className="p-6 bg-white shadow-lg rounded-xl w-80 h-52 text-center cursor-pointer hover:shadow-xl transition flex flex-col justify-center items-center"
          onClick={() => navigate("/horizontal-video")}
        >
          <h3 className="text-xl font-bold mb-2">Generate Horizontal Videos</h3>
        </div>

        {/* ✅ AI Image Generator (Coming Soon) */}
        <div className="p-6 bg-white shadow-lg rounded-xl w-80 h-52 text-center flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold mb-2">Generate AI Powered Images</h3>
          <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
