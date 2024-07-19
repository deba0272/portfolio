import React from 'react';

const Footer = () => {
  return (
    <footer className="font-serif bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-semibold">Developed with</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M12 4.318C8.248-1.386 0 .653 0 7.024 0 10.93 4.597 15 12 21c7.403-6 12-10.07 12-13.976 0-6.37-8.248-8.41-12-2.706z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-semibold">by Debajyoti</span>
        </div>
        <p className="text-sm text-gray-400">&copy; 2024 Debajyoti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
