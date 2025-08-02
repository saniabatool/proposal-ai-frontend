import React from 'react';

const UpworkLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.33 11.23a.916.916 0 0 1-1.396.425l-2.074-1.319a.916.916 0 0 1-.035-1.571l1.173-.815c.348-.242.821-.183 1.1-.061l1.22 1.22a.916.916 0 0 1-.004 1.116zm-5.66 0a.916.916 0 0 1-1.396-.425l-2.074-1.319a.916.916 0 0 1-.035-1.571l1.173-.815c.348-.242.821-.183 1.1-.061l1.22 1.22a.916.916 0 0 1-.004 1.116z"
      clipRule="evenodd"
      fill="#14A800" // Upwork green color
    />
  </svg>
);

export default UpworkLogo;