import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 h-screen bg-black-500">
      <div className="bg-black-500 h-screen pr-4 py-1">
        <div className="text-5xl transform -rotate-90 text-accent">Sidebar</div>
      </div>
    </div>
  );
};

export default Sidebar;
