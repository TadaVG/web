import React from "react";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const HowItWorks: React.FC = () => {
  const navigate = useNavigate(); // ✅ Yönlendirme için eklendi

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 text-black px-8 lg:px-32 text-center">
      {/* Başlık */}
      <h2 className="text-5xl font-extrabold mb-6">Get Started in Minutes</h2>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
        Our AI-powered platform makes video creation effortless. Follow these simple steps to generate high-quality videos instantly.
      </p>

      {/* Adımlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {/* Adım 1 */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2">1. Enter Your Script</h3>
          <p className="text-gray-600">
            Type or paste your script, and our AI will instantly analyze your content to structure a professional video.
          </p>
        </div>

        {/* Adım 2 */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2">2. Let AI Work</h3>
          <p className="text-gray-600">
            Our advanced AI selects relevant visuals, adds transitions, and syncs everything with voiceovers or subtitles.
          </p>
        </div>

        {/* Adım 3 */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2">3. Export & Share</h3>
          <p className="text-gray-600">
            Download your high-quality video and share it instantly on YouTube, TikTok, Instagram, and more.
          </p>
        </div>
      </div>

      {/* CTA Alanı */}
      <div className="bg-purple-600 text-white py-16 px-6 rounded-lg">
        <h3 className="text-3xl font-bold mb-4">Try It Today</h3>
        <p className="text-lg mb-2">
          Experience the power of AI-driven video creation—no credit card required.
        </p>
        <p className="text-md font-semibold mb-6 opacity-80">No commitment. Just results.</p>

        {/* CTA Butonları */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Eğer giriş yapıldıysa Pricing sayfasına yönlendir, yapılmadıysa Sign In */}
          <SignedOut>
            <SignInButton>
              <button className="px-6 py-3 text-lg font-bold bg-white text-blue-900 rounded-full shadow-lg hover:bg-gray-200 transition">
                Get Started For Free
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            
<button
  onClick={() => navigate("/pricing")}
  className="px-6 py-3 text-lg font-bold bg-white text-blue-900 rounded-full shadow-lg 
             hover:bg-gray-200 transition 
             dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
>
  Get Started For Free
</button>

          </SignedIn>

          {/* ✅ "Try the Free Demo" Butonu - Dark Mode Destekli */}
<button
  onClick={() => navigate("/free-demo")}
  className="text-lg font-semibold underline text-blue-900 dark:text-blue-400 hover:text-gray-300 dark:hover:text-gray-500 transition"
>
  Try the Free Demo
</button>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
