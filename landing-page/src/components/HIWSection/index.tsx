// HowItWorks.tsx
import React from 'react';
import styles from './styles.module.scss';
import bgImage from 'resources/HIWSection/bg.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1>How It Works</h1>
        <ul>
          <li>Sign Up & Set Goals: Create your account and set personal goals.</li>
          <li>Complete Tasks & Earn XP: Tackle tasks, earn XP, and level up.</li>
          <li>Climb the Leaderboard: Compete globally and rank up for rewards.</li>
          <li>Team Up for Challenges: Join friends and complete tasks together.</li>
          <li>Face Punishments: Fail and face XP penalties to stay on track.</li>
          <li>Celebrate Success: Reach goals, unlock rewards, and level up your avatar.</li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
