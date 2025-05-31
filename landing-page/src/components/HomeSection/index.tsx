import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import Button from 'components/input/Button';
import bgImg from 'resources/HomeSection/bg.jpg';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cx('home')} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={cx('intro')}>
        <h1>Gamify your productivity.</h1>
        <p>"LEVEL UP YOUR PRODUCTIVITY: CONQUER TASKS IN A FUTURISTIC ARENA."</p>
        <div className={cx('btns')}>
          <Button onClick={() => navigate('/login')} className={cx('btn')} type= "primary">
            Get Started!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
