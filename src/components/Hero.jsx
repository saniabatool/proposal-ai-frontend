// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#34A853] to-[#BEE17A] py-24 relative overflow-hidden">
//       <div className="container mx-auto text-center relative z-10">
//         {/* Badge */}
//         <div className="bg-[#288741] bg-opacity-20 rounded-full px-6 py-2 w-fit mx-auto mb-4">
//           <span className="text-white text-sm font-semibold">AI-Powered Proposal Generator</span>
//         </div>
        
//         {/* Title */}
//         <h1 className="text-white text-6xl font-bold mb-6">
//           Win More <span className="text-[#FFC107]">Upwork</span> Jobs
//         </h1>
        
//         {/* Description */}
//         <p className="text-white text-lg mb-10">
//           Generate professional, winning proposals in seconds with our advanced
//           AI technology. Stand out from thousands of freelancers and land your
//           dream projects.
//         </p>
        
//         {/* Feature/Stats Section */}
//         <div className="flex items-center justify-center space-x-8">
//           {/* Smart AI */}
//           <div className="flex flex-col items-center">
//             <div className="rounded-full bg-[#288741] bg-opacity-50 w-16 h-16 flex items-center justify-center mb-2">
//               <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V13h2v2h-2zm0-4V7h2v6h-2z"/>
//               </svg>
//             </div>
//             <span className="text-white text-sm">Smart AI</span>
//             <span className="text-white text-xs italic">Tailored to each job posting</span>
//           </div>

//           {/* Proposals Generated */}
//           <div className="flex flex-col items-center">
//             <span className="text-white text-3xl font-bold">100+</span>
//             <span className="text-white text-xs">Proposals Generated</span>
//           </div>
          
//           {/* Success Rate */}
//           <div className="flex flex-col items-center">
//             <span className="text-white text-3xl font-bold">90%</span>
//             <span className="text-white text-xs">Success Rate</span>
//           </div>
          
//           {/* Professional */}
//           <div className="flex flex-col items-center">
//             <div className="rounded-full bg-[#288741] bg-opacity-50 w-16 h-16 flex items-center justify-center mb-2">
//               <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
//                 <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 16c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
//               </svg>
//             </div>
//             <span className="text-white text-sm">Professional</span>
//             <span className="text-white text-xs italic">Client-winning quality</span>
//           </div>
          
//           {/* Instant Results */}
//           <div className="flex flex-col items-center">
//             <div className="rounded-full bg-[#288741] bg-opacity-50 w-16 h-16 flex items-center justify-center mb-2">
//               <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
//                 <path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.64c-.49 0-.67.2-.67.55v4.03c0 .35.18.55.67.55h2.64c.49 0 .67-.2.67-.55V8.55c0-.35-.18-.55-.67-.55zm-5.87 0h-2.64c-.49 0-.67.2-.67.55v4.03c0 .35.18.55.67.55h2.64c.49 0 .67-.2.67-.55V8.55c0-.35-.18-.55-.67-.55zm-5.87 0H5.64c-.49 0-.67.2-.67.55v4.03c0 .35.18.55.67.55h2.64c.49 0 .67-.2.67-.55V8.55c0-.35-.18-.55-.67-.55z"/>
//               </svg>
//             </div>
//             <span className="text-white text-sm">Instant Results</span>
//             <span className="text-white text-xs italic">Generated in under 30 seconds</span>
//           </div>
          
//           {/* Average Time */}
//           <div className="flex flex-col items-center">
//             <span className="text-white text-3xl font-bold">30s</span>
//             <span className="text-white text-xs">Average Time</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Background Blobs */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-[#8FBC8F] rounded-full opacity-30 blur-xl transform -translate-x-1/4 -translate-y-1/4"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ADD8E6] rounded-full opacity-25 blur-2xl transform translate-x-1/4 translate-y-1/4"></div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-green-400 to-green-700 text-white text-center py-24 px-6 relative overflow-hidden h-screen">
      
      {/* Background shapes (optional, for visual effect) */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* You can add SVG shapes or more complex background elements here */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Small Header/Tag */}
        <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 w-fit mx-auto mb-6">
          <p className="text-sm font-medium">AI-Powered Proposal Generator</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Win More Upwork Jobs
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100">
          Generate professional, winning proposals in seconds with our advanced AI technology. Stand out from thousands of freelancers and land your dream projects.
        </p>
        
        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mt-12">
          
          {/* Smart AI */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-30 rounded-full p-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold">✓</span>
            </div>
            <p className="font-bold text-lg">Smart AI</p>
            <p className="text-xs text-gray-200 mt-1">Tailored to each job posting</p>
          </div>

          {/* 100+ Proposals Generated */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-30 rounded-full p-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold">100+</span>
            </div>
            <p className="font-bold text-lg">Proposals Generated</p>
            <p className="text-xs text-gray-200 mt-1">Total success rate</p>
          </div>
          
          {/* 90% Success Rate */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-30 rounded-full p-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold">90%</span>
            </div>
            <p className="font-bold text-lg">Success Rate</p>
            <p className="text-xs text-gray-200 mt-1">Client-winning quality</p>
          </div>

          {/* Instant Results */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-30 rounded-full p-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold">⚡</span>
            </div>
            <p className="font-bold text-lg">Instant Results</p>
            <p className="text-xs text-gray-200 mt-1">Generated in under 30 seconds</p>
          </div>

          {/* 30s Average Time */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-30 rounded-full p-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold">30s</span>
            </div>
            <p className="font-bold text-lg">Average Time</p>
            <p className="text-xs text-gray-200 mt-1">From start to finish</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;