import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white text-black px-8 lg:px-32 text-center">
      {/* Main Heading */}
      <h2 className="text-5xl font-extrabold mb-10">Our Services</h2>

      {/* Intro Paragraph */}
      <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16">
        From script ideation to final delivery, our comprehensive AI-driven services
        simplify every step of video creation. Explore what we offer below.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service #1 */}
        <div className="p-8 bg-gray-50 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold mb-4">🎞 Script to Video</h3>
          <p className="text-gray-600">
            Transform any written script into a polished video with AI-driven editing, 
            transitions, and smooth storytelling.
          </p>
        </div>

        {/* Service #2 */}
        <div className="p-8 bg-gray-50 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold mb-4">🔍 Stock Media Integration</h3>
          <p className="text-gray-600">
            Automatically source relevant <strong>stock images and footage</strong> 
            that align with your script and enhance viewer engagement.
          </p>
        </div>

        {/* Service #3 */}
        <div className="p-8 bg-gray-50 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
          <h3 className="text-3xl font-bold mb-4">🎙 Voiceovers & Subtitles</h3>
          <p className="text-gray-600">
            Leverage AI-generated voiceovers and on-screen text to ensure your message 
            resonates clearly—no matter the language.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
