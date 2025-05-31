import React from 'react';
import styles from './styles.module.scss';
import sideImage from 'resources/AboutSection/bg.jpg'; // replace with your actual image
import aboutUsImage from 'resources/AboutSection/aboutus.png';



const About: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageSide}>
        <img src={sideImage} alt="About Visual" />
      </div>
      <div className={styles.textSide}>
        <img src={aboutUsImage} alt="About Us Title" className={styles.aboutUsTitle} />
        <p>
          At Questify, we believe productivity should be more than just a task—it should be an adventure.
          Inspired by futuristic worlds where every challenge is a step toward greatness, we've created an
          app that turns your daily goals into epic battles.
        </p>
        <p>
          Our mission is simple: Gamify your productivity, unlock your potential, and conquer your to-do list—
          all while competing with friends, climbing the leaderboard, and earning rewards that fuel your drive.
        </p>
        <p>
          Join us on a journey to transform the way you work, one task at a time. Whether you're a student,
          freelancer, or worker, Questify is your arena.
        </p>
        <p><strong>The future of productivity is here. Are you ready to level up?</strong></p>
      </div>
    </section>
  );
};

export default About;
