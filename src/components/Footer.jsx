import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#12121e] text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Top Section: Title and Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Win More Projects?</h2>
          <p className="text-lg text-gray-400">
            Join thousands of successful freelancers using our AI-powered proposal generator
          </p>
        </div>
        
        {/* Three Feature Columns */}
        <div className="flex flex-col md:flex-row justify-around text-center mb-12 space-y-8 md:space-y-0">
          {/* Column 1: Professional Quality */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
            <p className="text-sm text-gray-400">
              AI-crafted proposals that sound human and professional
            </p>
          </div>
          
          {/* Column 2: Instant Results */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11.96 4.96A8 8 0 0010 2a8 8 0 00-1.96 2.96L4 8l1.414 1.414L4 10.828l.47.47.886-.886A8 8 0 0010 18a8 8 0 005.657-2.343L16 14l-1.414-1.414L16 10.828l-.47-.47L15.657 8l-3.697-3.04zM10 16a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-sm text-gray-400">
              Generate winning proposals in under 30 seconds
            </p>
          </div>
          
          {/* Column 3: Tailored Content */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.786.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tailored Content</h3>
            <p className="text-sm text-gray-400">
              Each proposal is customized to the specific job posting
            </p>
          </div>
        </div>

        {/* Bottom Section: Links and Credits */}
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            AI Proposal Generator • Powered by Advanced AI • Boost Your Upwork Success
          </p>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">
              Made with <span className="text-red-500">❤️</span> by Sania Batool
            </p>
            {/* Social Media/Personal Links */}
            <a href="https://www.linkedin.com/in/sania-batool-406a1a338/" className="text-gray-400 hover:text-white transition duration-200">
              LinkedIn
            </a>
            <a href="https://github.com/saniabatool" className="text-gray-400 hover:text-white transition duration-200">
              GitHub
            </a>
            <a href="mailto:saniabatoolabro14@gmail.com" className="text-gray-400 hover:text-white transition duration-200">
              Gmail
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

