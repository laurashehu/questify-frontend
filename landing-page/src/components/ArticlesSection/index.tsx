import React, { useState } from 'react';
import styles from './styles.module.scss';
import ArticleCard from 'components/input/Cards';

const articles = [
  {
    image: 'https://cdn.prod.website-files.com/65d8574ccf980494e7d27ad6/65d8574ccf980494e7d27cce_Productivity%20tips.png',
    title: 'The Productivity Guide: Time Management Strategies That Work',
    description: 'Let’s define productivity. Productivity is...',
    date: 'May 14, 2025',
    link: 'https://jamesclear.com/productivity',
  },
  {
    image: 'https://mind-berry.com/wp-content/uploads/2024/04/Procrastination-image.jpg',
    title: 'Why You Procrastinate (It Has Nothing to Do With Self-Control)',
    description: 'If procrastination isn’t about laziness, then what is it about?',
    date: 'May 12, 2025',
    link: 'https://www.nytimes.com/2019/03/25/smarter-living/why-you-procrastinate-it-has-nothing-to-do-with-self-control.html',
  },  
  {
    image: 'https://images3.alphacoders.com/117/1174531.jpg',
    title: 'Dune: Part Two',
    description: 'Now Playing In Theaters and Available On Digital and 4k uhd™ blu-ray™',
    date: 'May 5, 2025',
    link: 'https://www.warnerbros.com/movies/dune-part-two',
  },
  {
    image: 'https://invoice.ng/blog/wp-content/uploads/2018/05/competition-is-for-losers.jpg',
    title: 'How Competition Enhances Focus',
    description: 'The power of competition: Effects of social motivation on attention, sustained physical effort, and learning',
    date: 'May 10, 2025',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4554955/',
  },
  {
    image: 'https://gamificationforteachers.com/wp-content/uploads/2025/04/xp-magic-hero-1024x683.webp',
    title: 'XP Systems in Education',
    description: 'Explore how gamified learning boosts student engagement.',
    date: 'May 8, 2025',
    link: 'https://gamificationforteachers.com/classroom-xp-systems/',
  },
  {
    image: 'https://image.cnbcfm.com/api/v1/image/107058698-1652188799963-gettyimages-1369568052-amv-bcn2021wfhoffice0753.jpeg?v=1712684150',
    title: 'Future of Remote Work',
    description: 'See what productivity looks like in 2030 and beyond.',
    date: 'May 5, 2025',
    link: 'https://www.upwork.com/press/releases/the-future-of-remote-work',
  },
  {
    image: 'https://oxfordlearning.com/wp-content/uploads/2022/11/GettyImages-1299079243-1024x778.jpg',
    title: 'Foods linked to better brainpower',
    description: 'Reviewed by Harvard Health Publishing',
    date: 'May 8, 2025',
    link: 'https://www.health.harvard.edu/healthbeat/foods-linked-to-better-brainpower',
  },

];

const INITIAL_VISIBLE = 3;
const LOAD_STEP = 2;

const ArticlesSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const isExpanded = visibleCount >= articles.length;

  const handleToggle = () => {
    setVisibleCount(prev =>
      prev >= articles.length ? INITIAL_VISIBLE : Math.min(prev + LOAD_STEP, articles.length)
    );
  };

  return (
    <section className={styles.articlesSection}>
      <div className={styles.headerGrid}>
        <h2>Related Articles</h2>
        <p className={styles.subtitle}>Explore insights and the future of productivity.</p>
      </div>

      <div className={styles.grid}>
        {articles.slice(0, visibleCount).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>

      <div className={styles.seeMore} onClick={handleToggle}>
        {isExpanded ? '↑ See Less' : '↓ See More'}
      </div>
    </section>
  );
};



export default ArticlesSection;
