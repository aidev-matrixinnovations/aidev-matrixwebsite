import React from 'react';
import { Outlet } from 'react-router-dom';

const NoHeaderFooterLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NoHeaderFooterLayout;