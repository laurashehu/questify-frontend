import React from 'react';
import styles from './styles.module.scss';
import instagram from 'resources/ContactSection/instagram.png';
import github from 'resources/ContactSection/github.png';
import x from 'resources/ContactSection/twitter.png'
import facebook from 'resources/ContactSection/facebook.png';

const Contact: React.FC = () => {
  return (
    <footer className={styles.contactSection}>
      <div className={styles.icons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https:/facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
      <p className={styles.footerText}>© {new Date().getFullYear()} Questify. All rights reserved.</p>
    </footer>
  );
};

export default Contact;
