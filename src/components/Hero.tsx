import { useNavigate } from "react-router-dom";
import { SignInButton, useUser } from "@clerk/clerk-react"; // ✅ Import useUser for authentication check

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser(); // ✅ Get user authentication status

  // ✅ Supabase Storage'den gelen arka plan URL'sini kullan
  const backgroundUrl =
    "https://xqgftsgrnwtzdsuziqsj.supabase.co/storage/v1/object/public/bg/background.jpg";

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white bg-cover bg-center px-32 lg:px-64"
      style={{ backgroundImage: `url(${backgroundUrl})` }} // ✅ Güncellenmiş arka plan URL'si
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content (Aligned to Center) */}
      <div className="relative z-10 w-full max-w-none text-center flex flex-col items-center">
        <div className="mb-12">
          <h2 className="text-8xl font-bold leading-tight">
            Create stunning videos with AI
          </h2>
          <p className="text-4xl mt-4">
            Generate videos from your scripts effortlessly
          </p>
        </div>

        {/* Conditional Navigation Button */}
        {isSignedIn ? (
          <button className="btn mt-8" onClick={() => navigate("/pricing")}>
            <span>GET STARTED FOR FREE</span>
          </button>
        ) : (
          <SignInButton mode="modal">
            <button className="btn mt-8">
              <span>GET STARTED FOR FREE</span>
            </button>
          </SignInButton>
        )}

        {/* Additional Text Below the Button */}
        <p className="mt-3 text-gray-300 text-lg opacity-75">
          No credit card required
        </p>
        <p
          className="mt-2 text-lg underline text-white hover:text-gray-300 transition cursor-pointer"
          onClick={() => navigate("/free-demo")} // ✅ Navigates to Free Demo Page
        >
          Try the free demo
        </p>
      </div>
    </section>
  );
};

export default Hero;
