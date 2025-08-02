import React from 'react';

const UpworkBadge = ({ className }) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 20"
      className="inline-block h-full"
    >
      <rect x="0" y="0" width="54" height="20" rx="10" ry="10" fill="#6F42C1" /> {/* A purple-like color */}
      <text
        x="27"
        y="13"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="bold"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        PRO
      </text>
    </svg>
  </div>
);

export default UpworkBadge;