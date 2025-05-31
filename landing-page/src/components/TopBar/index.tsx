import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface TopBarProps {
  username: string;
  level: number;
}

const TopBar: React.FC<TopBarProps> = ({ username, level }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear stored token
    navigate('/login'); // Redirect to login
  };

  return (
    <header className={styles.topBar}>
      <div className={styles.menuWrapper}>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <nav className={styles.menu}>
            <ul>
   <li>
  <a
    href="/coming-soon"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.menuLink}
  >
    Coming Soon
  </a>
</li>

   
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles.userInfo}>
        <span>Hello, {username}!</span>
        <span className={styles.level}>Level: {level}</span>
      </div>
    </header>
  );
};

export default TopBar;
