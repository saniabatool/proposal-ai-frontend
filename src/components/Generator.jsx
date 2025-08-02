// import React, { useState } from 'react';

// const Generator = () => {
//   const [jobTitle, setJobTitle] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [proposal, setProposal] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);
//     setError(null);

//     try {
//       // The API endpoint of the backend server you just created
//       const response = await fetch('http://localhost:3001/api/generate-proposal', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ jobTitle, jobDescription }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setProposal(data.proposal);

//     } catch (err) {
//       console.error("Failed to generate proposal:", err);
//       setError("Failed to generate proposal. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto -mt-24 relative z-20">
//       {/* ... (Header and form fields as before) ... */}

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         {/* Job Title Input */}
//         <div>
//           <label htmlFor="job-title" className="block text-xl font-semibold text-gray-800 mb-2">
//             Job Title
//           </label>
//           <input
//             type="text"
//             id="job-title"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//             placeholder="e.g., Full Stack Developer for E-commerce Platform"
//             value={jobTitle}
//             onChange={(e) => setJobTitle(e.target.value)}
//           />
//           <p className="mt-2 text-sm text-gray-500">
//             Copy the exact job title from the Upwork posting
//           </p>
//         </div>

//         {/* Job Description Textarea */}
//         <div>
//           <label htmlFor="job-description" className="block text-xl font-semibold text-gray-800 mb-2">
//             Job Description
//           </label>
//           <textarea
//             id="job-description"
//             rows="8"
//             className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
//             placeholder="Paste the complete job description including requirements, skills needed, project details, and any specific instructions from the client..."
//             value={jobDescription}
//             onChange={(e) => setJobDescription(e.target.value)}
//           ></textarea>
//           <p className="mt-2 text-sm text-gray-500">
//             Include all details from the job posting for best results
//           </p>
//         </div>

//         {/* Generate Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition duration-200 disabled:bg-gray-400"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <>
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               <span>Generating...</span>
//             </>
//           ) : (
//             <>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 8.414l-2.293 2.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
//               </svg>
//               <span>Generate Winning Proposal</span>
//             </>
//           )}
//         </button>
//       </form>

//       {/* Error Message Display */}
//       {error && (
//         <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-xl">
//           {error}
//         </div>
//       )}

//       {/* Display Generated Proposal */}
//       {proposal && (
//         <div className="mt-8 p-6 bg-gray-100 rounded-xl whitespace-pre-wrap">
//           <h3 className="text-xl font-bold mb-4">Generated Proposal:</h3>
//           <p>{proposal}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Generator;


import React, { useState } from 'react';

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

    try {
      // The API endpoint of the backend server you just created
      // NOTE: This will not work in a live environment without a CORS-enabled server
      const response = await fetch('http://localhost:3001/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobTitle, jobDescription }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProposal(data.proposal);

    } catch (err) {
      console.error("Failed to generate proposal:", err);
      setError("Failed to generate proposal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
      {/* Generator Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Generate Winning Proposal
        </h2>
        <p className="text-gray-600">
          Get a professional proposal in seconds with our AI
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Job Title Input */}
        <div>
          <label htmlFor="job-title" className="block text-xl font-semibold text-gray-800 mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="job-title"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
            placeholder="e.g., Full Stack Developer for E-commerce Platform"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <p className="mt-2 text-sm text-gray-500">
            Copy the exact job title from the Upwork posting
          </p>
        </div>

        {/* Job Description Textarea */}
        <div>
          <label htmlFor="job-description" className="block text-xl font-semibold text-gray-800 mb-2">
            Job Description
          </label>
          <textarea
            id="job-description"
            rows="8"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
            placeholder="Paste the complete job description including requirements, skills needed, project details, and any specific instructions from the client..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
          <p className="mt-2 text-sm text-gray-500">
            Include all details from the job posting for best results
          </p>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition duration-200 disabled:bg-gray-400"
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.707 9.293a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 8.414l-2.293 2.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span>Generate Winning Proposal</span>
            </>
          )}
        </button>
      </form>

      {/* Error Message Display */}
      {error && (
        <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-xl">
          {error}
        </div>
      )}

      {/* Display Generated Proposal */}
      {proposal && (
        <div className="mt-8 p-6 bg-gray-100 rounded-xl whitespace-pre-wrap">
          <h3 className="text-xl font-bold mb-4">Generated Proposal:</h3>
          <p>{proposal}</p>
        </div>
      )}
    </div>
  );
};

export default Generator;
