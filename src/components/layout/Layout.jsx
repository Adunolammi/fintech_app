import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#023047]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;