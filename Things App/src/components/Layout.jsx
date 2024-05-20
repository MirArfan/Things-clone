import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 py-14 px-20'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
