import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const HomepageLayout = (props) => {
  return (
    <div className="homeLayout">
      <Header {...props} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default HomepageLayout;