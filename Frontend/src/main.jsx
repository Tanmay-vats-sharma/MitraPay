import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login.jsx';
import './index.css';
import Dashboard from './Dashboard.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <StrictMode>
      <GoogleOAuthProvider clientId="664804788453-jpo2th37sgtcovqbupt2iracvugbe0dp.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);

