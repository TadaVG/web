const TermsOfUse: React.FC = () => {
    return (
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 text-gray-800 px-8 py-20">
        <div className="max-w-8xl w-full text-left">
          <h1 className="text-5xl font-bold mb-6 text-center">Terms of Use</h1>
          <p className="text-center text-lg text-gray-500">Last Updated: 2 March 2025</p>
  
          <h2 className="text-3xl font-semibold mt-10">Introduction & Acceptance</h2>
          <p className="text-lg">
            These Terms of Use ("Terms") establish the legally binding terms and conditions governing access to and use of the website, 
            services, and any associated applications (collectively, the "Services") offered under Video-Generator. 
            The terms "we," "our," or "us" refer to Video-Generator and "you" or "user" refers to any individual or entity using the Services.
          </p>
          <p className="mt-2 text-lg">
            By accessing or using the Services, you agree to be bound by these Terms. If you do not accept them, you may not use the Services. 
            Users under 18 must obtain consent from a parent or legal guardian.
          </p>
  
          <h2 className="text-3xl font-semibold mt-10">User Content & Generated Output</h2>
          <ul className="list-disc ml-8 text-lg">
            <li><strong>User Content:</strong> Any content (text, images, audio, video, etc.) that you upload, submit, or generate while using the Services.</li>
            <li><strong>Generated Output:</strong> Any content created by our Services based on your input, including AI-generated content.</li>
            <li>You retain ownership of your content but grant us a worldwide, royalty-free license to use it for service improvements and functionality.</li>
          </ul>
  
          <h2 className="text-3xl font-semibold mt-10">Account & Subscription</h2>
          <ul className="list-disc ml-8 text-lg">
            <li>Users must register an account to access premium features.</li>
            <li>You are responsible for maintaining the security of your account.</li>
            <li>Subscriptions auto-renew unless canceled before the renewal date.</li>
          </ul>
  
          <h2 className="text-3xl font-semibold mt-10">Disclaimers & Liability</h2>
          <p className="text-lg">
            Our Services are provided "as is," without warranties of any kind. 
            We are not liable for indirect, incidental, or consequential damages arising from your use of the Services.
          </p>
  
          <h2 className="text-3xl font-semibold mt-10">Governing Law & Dispute Resolution</h2>
          <p className="text-lg">
            These Terms are governed by the laws of the United States of America. Disputes shall first be attempted to be resolved informally. 
            If unresolved, arbitration shall be conducted in court.
          </p>
  
          <p className="mt-10 text-lg">
            By using our Services, you acknowledge that you have read, understood, and agree to these Terms of Use.
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsOfUse;
  