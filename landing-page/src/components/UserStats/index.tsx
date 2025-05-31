import React from 'react';
import styles from './styles.module.scss';
import statsImage from 'resources/Dashboard/userstats.png';

interface UserStatsProps {
  xp: number;
  dailyXp: number;
  level: number;
}

const UserStats: React.FC<UserStatsProps> = ({ xp, dailyXp, level }) => {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.imageSection}>
        <img src={statsImage} alt="User Stats" />
      </div>

      <div className={styles.infoSection}>
        <div className={styles.stat}><span>Level:</span> {level}</div>
        <div className={styles.stat}><span>Total XP:</span> {xp}</div>
        <div className={styles.stat}><span>Daily XP:</span> {dailyXp} / 5000</div>
      </div>
    </div>
  );
};

export default UserStats;
