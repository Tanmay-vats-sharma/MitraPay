import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login.jsx';
import './index.css';
import Dashboard from './Pages/Dashboard.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {Transaction} from "./Pages/Transaction.jsx"

function App() {
  return (
    <StrictMode>
      <ToastContainer />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transaction />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);

