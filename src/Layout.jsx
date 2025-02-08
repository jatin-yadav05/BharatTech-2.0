import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
        {children}
    </div>
  );
};

export default Layout;
