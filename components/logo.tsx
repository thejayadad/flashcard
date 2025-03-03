import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Colorful Circle Shape */}
      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-neutral-500 via-yellow-500 to-gray-500 shadow-lg flex items-center justify-center">
        <span className="absolute w-3 h-3 bg-white rounded-full top-1 left-1 shadow-md"></span>
      </div>

      {/* StudyBuddy Text with Gradient */}
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-yellow-500 to-gray-500">
        Study<span className="text-yellow-500">Buddy</span>
      </h1>
    </div>
  );
};

export default Logo;
