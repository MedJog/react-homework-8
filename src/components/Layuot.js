// import React from 'react';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;