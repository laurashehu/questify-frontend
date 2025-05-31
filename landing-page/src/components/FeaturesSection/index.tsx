import React from 'react';
import styles from './styles.module.scss';
import whyImg from 'resources/FeaturesSection/why.png'; 




const features = [
  {
    title: 'Level Up System',
    description: 'Complete tasks to gain XP and level up through a structured progression system that rewards consistency.',
  },
  {
    title: 'Leaderboard Competition',
    description: 'Engage in weekly rankings and dominate your productivity peers in a real-time competitive leaderboard.',
  },
  {
    title: 'Squad Challenges',
    description: 'Create or join squads with friends to challenge each other and share motivation through friendly battles.',
  },
  {
    title: 'Punishment Mechanics',
    description: 'Failed tasks? Get penalized with temporary cooldowns, funny punishments, or XP loss.',
  },
  {
    title: 'Personalized Goals',
    description: 'Tailor daily and weekly goals that align with your lifestyle, with reminders and smart suggestions.',
  },
  {
    title: 'Futuristic UI Arena',
    description: 'Work in a UI designed like a sci-fi mission deck—turn your daily grind into an immersive experience.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.left}>
          <img src={whyImg} alt="Why Questify" className={styles.titleImage} />
          <p className={styles.intro}>
            We’re not just another to-do list. Questify gamifies your productivity in a sci-fi themed world. Here’s how:
          </p>
          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureBox}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
