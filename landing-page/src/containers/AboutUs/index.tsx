import React from 'react';
import AboutSection from 'components/AboutSection';
import Header from 'components/Header';
import Contact from 'components/ContactSection';

const About: React.FC = () => {
  return (
    <div>
      <Header/>
       <section id="about"><AboutSection /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default About;
