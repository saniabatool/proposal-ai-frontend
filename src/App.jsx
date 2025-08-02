import React, { useState } from 'react';

// A generic logo component is created to replace the Upwork-specific one.
const AppLogo = ({ className }) => (
  <div className={`w-9 h-9 bg-green-600 rounded-full flex items-center justify-center ${className}`}>
    <span className="text-white text-xl font-bold">A</span>
  </div>
);

// A new badge component is created to match the 'AI TOOL' badge from the user's image.
const AIToolBadge = ({ className }) => (
  <div className={`px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-md ${className}`}>
    AI TOOL
  </div>
);

// Navbar Component
const Navbar = ({ onNavigate, currentPage }) => {
  const linkClass = (page) => 
    `text-gray-700 hover:text-green-600 text-base font-medium transition-colors duration-200 ${
      currentPage === page ? 'text-green-600 border-b-2 border-green-600' : ''
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-8">
        {/* Left Section: Logo, App name, and AI Tool Badge */}
        <div className="flex items-center space-x-3">
          <AppLogo className="text-green-500" />
          <span className="text-xl font-semibold text-gray-800"> AI Proposal</span>
          <AIToolBadge className="h-6 w-auto" />
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')} 
            className={`${linkClass('home')} cursor-pointer`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('generator')} 
            className={`${linkClass('generator')} cursor-pointer`}
          >
            Generator
          </button>
        </div>
      </div>
    </nav>
  );
};

// Custom keyframes for a unique floating animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  .animate-floating {
    animation: floating 3s infinite ease-in-out;
  }
`;
document.head.appendChild(styleSheet);


// New Hero Component with a more original and beautiful design
const Hero = () => {
  // A component for the features with a modern, glass-like design
  const FeatureCard = ({ icon, text, subtext, delay }) => (
    <div 
      className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 animate-fade-in cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 mx-auto rounded-full bg-green-400 flex items-center justify-center text-white mb-3">
        <span className="font-bold text-lg">{icon}</span>
      </div>
      <h4 className="text-lg font-semibold text-white">{text}</h4>
      <p className="text-sm text-gray-200 mt-1">{subtext}</p>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-green-900 text-white overflow-hidden h-screen flex flex-col items-center justify-center px-4">
      
      {/* Background Shapes with unique animations */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-green-500 opacity-20 blur-3xl animate-floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl animate-floating" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-purple-500 opacity-20 blur-3xl animate-floating" style={{ animationDelay: '2000ms' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto py-16">
        
        {/* Main Heading with more impactful styling */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
          Create Proposals That Win
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300">
          Instantly create winning, client-ready proposals with cutting-edge AI. Impress clients and win more projects effortlessly.
        </p>
        
        {/* Feature Grid with Card-like elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <FeatureCard 
            icon="✓" 
            text="Smart AI" 
            subtext="Proposals That Fit" 
            delay={0}
          />
          <FeatureCard 
            icon="100+" 
            text="Proposals Generated" 
            subtext="Total success rate" 
            delay={200}
          />
          <FeatureCard 
            icon="90%" 
            text="Built to Impress" 
            subtext="Win Clients Fast" 
            delay={400}
          />
          <FeatureCard 
            icon="⚡" 
            text="Results. Instantly" 
            subtext="Ready in 30 Seconds" 
            delay={600}
          />
        </div>
      </div>
      
      {/* Scroll down indicator with a new look */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm font-medium text-gray-300 mb-2">Scroll to Create</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </div>
  );
};


// Generator Component
const Generator = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [proposal, setProposal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setProposal('');

    try {
      // The frontend now makes a POST request to your local backend server
      const response = await fetch('http://localhost:3001/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the job details in the body of the request
        body: JSON.stringify({ jobTitle, jobDescription }),
      });

      // Check if the response from the server was successful
      if (!response.ok) {
        // If the server responded with an error, parse and throw it
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }

      // Parse the successful JSON response
      const result = await response.json();
      setProposal(result.proposal);
    } catch (err) {
      console.error("Failed to generate proposal:", err);
      setError(`Failed to generate proposal: An error occurred. Details: ${err.message}.`);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    // A new, clean and modern design for the Generator
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
      {/* Generator Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Proposal Generator
        </h2>
        <p className="text-lg text-gray-500">
          Enter job details. Get a winning proposal
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Job Title Input */}
        <div>
          <label htmlFor="job-title" className="block text-xl font-semibold text-gray-700 mb-3">
            Job Title
          </label>
          <input
            type="text"
            id="job-title"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 placeholder-gray-400"
            placeholder="e.g., Full Stack Developer for E-commerce Platform"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        {/* Job Description Textarea */}
        <div>
          <label htmlFor="job-description" className="block text-xl font-semibold text-gray-700 mb-3">
            Job Description
          </label>
          <textarea
            id="job-description"
            rows="8"
            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 placeholder-gray-400"
            placeholder="Paste or type your job description..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center space-x-3 shadow-lg hover:bg-green-600 transition duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:from-gray-500 disabled:to-gray-400 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.582-1.99a1 1 0 00.697-.996V10.12a1 1 0 112 0v4.331c0 .822.41 1.59 1.169 1.99l4.582 1.99a1 1 0 001.169-1.409l-7-14z" />
              </svg>
              <span>Generate Proposal</span>
            </>
          )}
        </button>
      </form>

      {/* Error Message Display */}
      {error && (
        <div className="mt-8 p-6 text-red-700 bg-red-100 rounded-xl border border-red-300">
          {error}
        </div>
      )}

      {/* Display Generated Proposal */}
      {proposal && (
        <div className="mt-8 p-6 bg-gray-100 rounded-xl whitespace-pre-wrap border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Generated Proposal:</h3>
          <p className="text-gray-700">{proposal}</p>
        </div>
      )}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#12121e] text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Top Section: Title and Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Start Winning</h2>
          <p className="text-lg text-gray-400">
            Power your proposals like thousands of top freelancers—with AI.
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
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-sm text-gray-400">
              Human-Quality Proposals, AI-Fast.
            </p>
          </div>
          
          {/* Column 2: Instant Results */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11.96 4.96A8 8 0 0010 2a8 8 0 00-1.96 2.96L4 8l1.414 1.414L4 10.828l.47.47.886-.886A8 8 0 0010 18a8 8 0 005.657-2.343L16 14l-1.414-1.414L16 10.828l-.47-.47L15.657 8l-3.697-3.04zM10 16a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            <p className="text-sm text-gray-400">
              Proposals That Win — Fast
            </p>
          </div>
          
          {/* Column 3: Tailored Content */}
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.786.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Content</h3>
            <p className="text-sm text-gray-400">
              Job-Specific Proposals
            </p>
          </div>
        </div>

        {/* Bottom Section: Links and Credits */}
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
           Win More Projects • Smart Proposals • AI-Powered Precision
          </p>
          
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">
              <p>
  Powered by <span className="text-purple-500">🚀</span> Sania Batool
</p>

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

// Main application component
const App = () => {
  // State to manage the current page view. Default to 'home'.
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-gray-50 font-sans">
      {/* The Navbar component is always visible and handles navigation */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="pt-20"> {/* Add padding to prevent content from being hidden by the fixed header */}
        {/* Conditionally render content based on the currentPage state */}
        {currentPage === 'home' && (
          <>
            <Hero />
            {/* The Generator component is displayed directly below the Hero section on the home page */}
            <div className="container mx-auto px-4 -mt-24 relative z-20">
              <Generator />
            </div>
          </>
        )}
        
        {currentPage === 'generator' && (
          // When on the generator page, the component gets some top padding
          <div className="container mx-auto px-4 py-8 md:py-16">
            <Generator />
          </div>
        )}
      </main>

      {/* The Footer is also always visible */}
      <Footer />
    </div>
  );
};

export default App;