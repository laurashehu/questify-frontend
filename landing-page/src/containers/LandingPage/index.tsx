import React from 'react';

// Components
import Header from 'components/Header';
import Home from 'components/HomeSection';
import Contact from 'components/ContactSection';
import ArticlesSection from 'components/ArticlesSection';
import Features from 'components/FeaturesSection';
import ClearSection from 'components/ClearSection';
import AboutSection from 'components/AboutSection';


const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <section id="home"><Home /></section>
      <section id="about"><AboutSection/></section>
       <section id="features"><Features/></section>
      <section id="articles"><ArticlesSection/></section>
      <ClearSection/>
      <section id="contact"><Contact /></section>
    
      
    </div>
  );
};

export default LandingPage;
