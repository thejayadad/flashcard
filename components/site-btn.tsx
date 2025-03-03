import React from "react";

interface ButtonProps {
  label: string;
  icon: React.ReactNode;
  textColor: string;
  bg?: string; // Optional background color
  iconColor?: string; // Optional icon color
  onClick?: () => void;
}

const SiteBtn: React.FC<ButtonProps> = ({ label, icon, textColor, bg = "bg-white", iconColor = "text-yellow-500", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-bold py-2 lg:py-4 px-6 lg:px-12 rounded-xl text-xl hover:bg-opacity-80 transition ${bg} text-[#3098C6]`}
    >
      <span className={`h-6 w-6 lg:mr-4 ${iconColor}`}>{icon}</span>
      <span className={`hidden lg:block ${textColor}`}>{label}</span>
    </button>
  );
};

export default SiteBtn;
