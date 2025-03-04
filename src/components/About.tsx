import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gray-100 text-black px-8 lg:px-32 text-center"
    >
      {/* Main Heading */}
      <h2 className="text-5xl font-extrabold mb-8">About Our AI Video Generator</h2>

     {/* Intro Paragraph */}
<p className="text-xl text-gray-700 max-w-4xl mx-auto">
  Our <strong>AI-powered video creation platform</strong> empowers creators to transform 
  any script into captivating video content. Whether you’re producing for YouTube, 
  social media, or marketing campaigns, our system seamlessly handles the heavy lifting—
  allowing you to focus on crafting your message.  

  Beyond providing an innovative video solution, we are committed to making a positive 
  impact. That's why <strong>30% of our profits</strong> go directly to 
  <strong> charitable organizations</strong> that support essential causes worldwide. 
  By choosing our platform, you're not only enhancing your content creation process 
  but also contributing to a better world.
</p>

      {/* Video Modes / Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {/* Horizontal Mode */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2"> Horizontal Mode</h3>
          <p className="text-gray-600">
            Ideal for <strong>YouTube videos, presentations, or webinars</strong>. 
            Effortlessly generate high-resolution, 
            <strong>landscape-format</strong> videos that engage viewers.
          </p>
        </div>

        {/* Vertical Mode */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2"> Vertical Mode</h3>
          <p className="text-gray-600">
            Optimized for <strong>TikTok, Instagram Reels, and YouTube Shorts</strong>. 
            Quickly produce <strong>vertical</strong> videos that captivate 
            audiences on mobile-focused platforms.
          </p>
        </div>

        {/* Future AI Mode */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold mb-2">🚀 Future AI: Image Generation</h3>
          <p className="text-gray-600">
            Coming soon: <strong>advanced AI-driven image generation</strong> 
            integrated directly into our video pipeline. Convert scripts into 
            lifelike visuals with unprecedented realism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
