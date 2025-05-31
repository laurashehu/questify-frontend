import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import logo from '../../resources/HeaderSection/questify-5-3-2025 (1).png';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
  const [detached, setDetached] = useState<boolean>(false);
  const [folded, setFolded] = useState<boolean>(true);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Change nav style on scroll
  useEffect(() => {
    const detectScrolling = () => {
      setDetached(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', detectScrolling);
    return () => window.removeEventListener('scroll', detectScrolling);
  }, []);

  const navItems = [
    { label: 'Home', to: 'home', type: 'scroll' },
    { label: 'About Us', to: 'about', type: 'scroll' },
    { label: 'Features', to: 'features', type: 'scroll' },
    { label: 'Articles', to: 'articles', type: 'scroll' },
    { label: 'Contact Us', to: 'contact', type: 'scroll' },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setFolded(true);
    }
  };

  return (
    <div className={cx('nav-cover', { detached })}>
      <nav className={cx('nav')}>
        <div className={cx('brand-name')}>
          <Link to="/home">
            <img src={logo} alt="Questify Logo" style={{ height: '40px' }} />
          </Link>
        </div>

        <div className={cx('fold-cover')}>
          <FontAwesomeIcon
            className={cx('fold-btn')}
            icon={folded ? faBars : faTimes}
            size={'2x'}
            onClick={() => setFolded(!folded)}
          />
        </div>

        <div className={cx('nav-items', { folded })}>
          <ul>
            {navItems.map(({ label, to, type }) => (
              <li key={label}>
                {type === 'route' ? (
                  <Link to={to} onClick={() => setFolded(true)}>
                    {label}
                  </Link>
                ) : (
                  <a
                    href={`#${to}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(to);
                    }}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
