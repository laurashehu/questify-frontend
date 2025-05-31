import React from 'react';
import styles from './styles.module.scss';


const ComingSoon: React.FC = () => {
  return (
    
    <div className={styles.container}>
      <h1>🚀 Questify - Coming Soon! 🚀</h1>
      <p>Thanks for using Questify! We’re still working on some awesome features to boost your productivity and social experience.</p>
      
      <div className={styles.features}>
        <h2>What’s coming next?</h2>
        <ul>
          <li><strong>Leaderboards</strong> – Compete with friends and see who's on top!</li>
          <li><strong>Teams & Groups</strong> – Collaborate and assign tasks with your buddies.</li>
          <li><strong>More Badges & Rewards</strong> – Unlock even cooler achievements.</li>
          <li><strong>Improved Punishment System</strong> – More fun and challenging penalties.</li>
        </ul>
      </div>

      <p>Stay tuned and keep completing those tasks! 💪</p>
    </div>
  );
};

export default ComingSoon;
