"use client";

import React from "react";

const TabButton = ({ children, selectTab, active }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative mr-6 pb-2 text-lg font-semibold transition-all duration-200 hover:text-purple-300`}
    >
      <span className={active ? "text-white" : "text-gray-400"}>
        {children}
      </span>

      {active && (
        <div className="absolute left-0 right-0 h-1 bg-purple-500 rounded-full mt-1" />
      )}
    </button>
  );
};

export default TabButton;
