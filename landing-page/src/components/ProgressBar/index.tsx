import React from 'react';
import styles from './styles.module.scss';

interface ProgressBarProps {
  currentXp: number;
  dailyXpCap: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentXp, dailyXpCap }) => {
  const percent = Math.min((currentXp / dailyXpCap) * 100, 100);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressFill}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
