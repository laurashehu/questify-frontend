import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './styles.module.scss';
import loginImg from 'resources/LoginSignup/login.png';
import signupImg from 'resources/LoginSignup/signup.png';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);  
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) =>
    password.length >= 8 && /[!@#$%^&*()]/.test(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!isLogin && !validatePassword(password)) {
      setError('Password must be at least 8 characters and contain a special character');
      return;
    }

    if (!isLogin && username.trim() === '') {
      setError('Username is required');
      return;
    }

   
    if (!isLogin && !termsAccepted) {
      setError('You must accept the Terms and Conditions to sign up');
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/auth/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email, password } : { email, username, password }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
      }

      if (isLogin) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert('Signup successful! You can now log in.');
        setIsLogin(true);
        setTermsAccepted(false); 
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.titleImage}>
          <img src={isLogin ? loginImg : signupImg} alt={isLogin ? 'Login' : 'Sign Up'} />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Terms and Conditions checkbox only on signup */}
          {!isLogin && (
            <label className={styles.termsLabel}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className={styles.checkbox}
              />
              <span>
                I agree to the{' '}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  <strong>Terms and Conditions</strong>
                </a>
              </span>
            </label>
          )}
          <button className={styles.submitButton} type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <button
          className={styles.switchButton}
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
            setTermsAccepted(false); 
          }}
        >
          {isLogin ? 'Need to sign up?' : 'Have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
