import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from 'containers/LandingPage';
import AuthPage from 'containers/AuthPage';
import Dashboard from 'components/Dashboard';
import TermsPage from 'components/TermsPage';
import ComingSoon from 'components/ComingSoon';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};



function App() {
  return (
    
    <Router>
        
<Routes>
  
  <Route path="/" element={<LandingPage />} />
  <Route path="/home" element={<LandingPage />} />
  <Route path="/login" element={<AuthPage />} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/terms" element={<TermsPage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

</Routes>

    </Router>
  );
}

export default App;
