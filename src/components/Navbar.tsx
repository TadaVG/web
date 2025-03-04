import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getToken } = useAuth(); // ✅ Clerk Token alma fonksiyonu

  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const token = await getToken(); // ✅ Kullanıcının token'ını al
        if (!token) return;

        const response = await fetch("https://api.video-generator.xyz/user-status", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error("Failed to fetch user status");
        const data = await response.json();
        setHasPaid(data.is_premium); // ✅ Kullanıcının premium olup olmadığını belirle
      } catch (error) {
        console.error("User status check failed:", error);
        setHasPaid(false);
      }
    };

    checkUserStatus();
  }, [getToken]); // ✅ Token değişirse tekrar çağır

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const offsetTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNewProjectClick = () => {
    if (hasPaid) {
      navigate("/new-project");
    } else {
      navigate("/pricing");
    }
  };

  const isFreeDemoPage = location.pathname === "/free-demo";

  return (
    <nav className="bg-white dark:bg-black shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 h-20">
      {/* Logo */}
      <Link to="/" className="text-4xl font-bold !text-black dark:!text-white" onClick={handleHomeClick}>
        VIDEO GENERATOR
      </Link>

      {isFreeDemoPage ? (
        <button
          className="px-6 py-2 bg-blue-900 text-black rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => navigate('/pricing')}
        >
          Upgrade
        </button>
      ) : (
        <>
          <ul className="flex space-x-6">
            <li className="hover:underline cursor-pointer dark:text-white" onClick={handleHomeClick}>Home</li>
            <li className="hover:underline cursor-pointer dark:text-white" onClick={() => scrollToSection("about")}>About</li>
            <li className="hover:underline cursor-pointer dark:text-white" onClick={() => scrollToSection("services")}>Services</li>
            <li className="hover:underline cursor-pointer dark:text-white" onClick={() => scrollToSection("how-it-works")}>How It Works</li>
          </ul>

          <div className="flex space-x-4">
            {/* New Project Butonu - Sadece Ödeme Yapmış Kullanıcılara */}
            <SignedIn>
              {hasPaid && (
                <button
                  onClick={handleNewProjectClick}
                  className="border border-black dark:border-white px-4 py-2 hover:bg-black dark:hover:bg-white hover:text-blue-500 dark:hover:text-black transition text-black dark:text-white bg-white dark:bg-black"
                >
                  New Project
                </button>
              )}
            </SignedIn>

            <Link to="/pricing">
              <button className="border border-black dark:border-white px-4 py-2 hover:bg-black dark:hover:bg-white hover:text-blue-500 dark:hover:text-black transition text-black dark:text-white bg-white dark:bg-black">
                Pricing
              </button>
            </Link>

            <SignedOut>
              <SignInButton>
                <button className="border border-black dark:border-white px-4 py-2 hover:bg-black dark:hover:bg-white hover:text-black dark:hover:text-black transition text-black dark:text-white bg-white dark:bg-black">
                  Sign In / Sign Up
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
