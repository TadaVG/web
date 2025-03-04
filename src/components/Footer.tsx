import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-6 text-center mt-16 shadow-md">
      <p className="text-lg">
        © {new Date().getFullYear()} Video Generator. All rights reserved.
      </p>
      <div className="mt-2">
        <Link to="/terms-of-use" className="underline text-gray-500 hover:text-black mx-2 transition">
          Terms of Use
        </Link>
        <span className="text-gray-400">|</span>
        <Link to="/privacy-policy" className="underline text-gray-500 hover:text-black mx-2 transition">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
