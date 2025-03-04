const PrivacyPolicy: React.FC = () => {
    return (
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 px-8 py-20">
        <div className="max-w-8xl w-full text-left"> {/* ✅ Genişlik artırıldı */}
          <h1 className="text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-center text-lg text-gray-500">Last Updated: 2 March 2025</p>
  
          <p className="mt-8 text-lg">
            Welcome to Video-Generator. We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>
  
          <h2 className="text-3xl font-semibold mt-10">1. Information We Collect</h2>
          <ul className="list-disc ml-8 text-lg">
            <li>Contact details (e.g., name and email address) provided when you create an account.</li>
            <li>Billing details if you make a purchase, processed securely by third parties.</li>
            <li>Any videos, images, audio, or media you upload or create.</li>
            <li>Device details (e.g., IP address, browser type, OS).</li>
            <li>Usage data (e.g., pages visited, clicks, time spent).</li>
          </ul>
  
          <h2 className="text-3xl font-semibold mt-10">2. How We Use Your Information</h2>
          <ul className="list-disc ml-8 text-lg">
            <li>To operate, maintain, and enhance our platform.</li>
            <li>To manage user accounts, process transactions, and provide support.</li>
            <li>To analyze aggregated data and improve user experience.</li>
          </ul>
  
          <h2 className="text-3xl font-semibold mt-10">3. Cookies</h2>
          <p className="text-lg">
            We use cookies to remember settings, enable features, and analyze site traffic. You can manage cookies via browser settings.
          </p>
  
          <h2 className="text-3xl font-semibold mt-10">4. Data Security</h2>
          <p className="text-lg">
            We use technical and administrative measures to protect your data. However, no system is 100% secure.
          </p>
  
          <h2 className="text-3xl font-semibold mt-10">5. Changes to This Policy</h2>
          <p className="text-lg">
            We may update this policy. Any changes will be posted here.
          </p>
  
          <p className="mt-10 text-lg">
            By using our website, you acknowledge that you have read, understood, and agree to our Privacy Policy.
          </p>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  