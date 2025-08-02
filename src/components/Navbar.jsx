// import React from 'react';
// import UpworkLogo from './UpworkLogo'; // Import the new logo component
// import UpworkBadge from './UpworkBadge'; // Import the new badge component

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="container mx-auto flex items-center justify-between py-5 px-8">
//         {/* Left Section: Logo and Badge */}
//         <div className="flex items-center space-x-3">
//           <UpworkLogo className="h-9 w-auto text-green-500" />
//           <UpworkBadge className="h-6 w-auto" />
//         </div>

//         {/* Right Section: Navigation Links */}
//         <div className="flex items-center space-x-8">
//           <a href="#" className="text-gray-700 hover:text-green-600 text-base font-medium">
//             Find Work
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600 text-base font-medium">
//             Upwork
//           </a>
//           <a href="#" className="text-gray-700 hover:text-green-600 text-base font-medium">
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import UpworkLogo from './UpworkLogo'; // Assuming these components exist
import UpworkBadge from './UpworkBadge'; // Assuming these components exist

const Navbar = ({ onNavigate, currentPage }) => {
  const linkClass = (page) => 
    `text-gray-700 hover:text-green-600 text-base font-medium transition-colors duration-200 ${
      currentPage === page ? 'text-green-600 border-b-2 border-green-600' : ''
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-5 px-8">
        {/* Left Section: Logo and Badge */}
        <div className="flex items-center space-x-3">
          <UpworkLogo className="h-9 w-auto text-green-500" />
          <UpworkBadge className="h-6 w-auto" />
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')} 
            className={linkClass('home')}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('generator')} 
            className={linkClass('generator')}
          >
            Generator
          </button>
          <a href="https://www.upwork.com/find-work/" className="text-gray-700 hover:text-green-600 text-base font-medium">
            Find Work
          </a>
          <a href="https://www.upwork.com/" className="text-gray-700 hover:text-green-600 text-base font-medium">
            Upwork
          </a>
          <a href="https://www.linkedin.com/" className="text-gray-700 hover:text-green-600 text-base font-medium">
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;