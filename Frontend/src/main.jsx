import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/login.jsx';
import './index.css';
import Dashboard from './Pages/Dashboard.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Transaction } from "./Pages/Transaction.jsx"
import { Gullak } from "./Pages/Gullak.jsx"
import { Contact } from "./Pages/Contact.jsx"
import { ModalProvider } from './StateProvider/ModalProvider.jsx';
import { StateProvider } from './StateProvider/StateProvider.jsx';
import {Profile_page} from "./Pages/Profile_page.jsx"

function App() {
  return (
    <StrictMode>
      <ToastContainer />
      <StateProvider>
        <ModalProvider >
          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <Router>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="/profile" element={<Profile_page />} />
              <Route path="/gullaks" element={<Gullak />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </GoogleOAuthProvider>
        </ModalProvider>
      </StateProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);

