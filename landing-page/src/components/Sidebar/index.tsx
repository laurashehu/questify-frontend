import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';  
import { useNavigate } from 'react-router-dom';


interface SidebarProps {
  onSectionSelect: (section: string) => void;
}

const Sidebar: React.FC = () => {

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem('token'); // Remove JWT
  navigate('/login'); // Redirect to login
};
  return (
    <nav className={styles.sidebar}>
      <ul>

        <li>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? styles.active : ''}>
            Tasks
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/punishments" className={({ isActive }) => isActive ? styles.active : ''}>
            Punishments
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" className={({ isActive }) => isActive ? styles.active : ''}>
            Leaderboards
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => isActive ? styles.active : ''}>
            Notifications
          </NavLink>
        </li>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Sidebar;
