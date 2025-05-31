import React from 'react';
import styles from './styles.module.scss';

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description, date, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.textContent}>
          <span className={styles.date}>{date}</span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
