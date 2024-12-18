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
import { Profile_page } from "./Pages/Profile_page.jsx"
import PrivateRoute from './Components/Common/PrivateRoute.jsx';
import NotFound from './Components/Common/NotFound.jsx';

function App() {
  return (
    <StrictMode>
      <ToastContainer />
      <StateProvider>
        <ModalProvider >
          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <Router>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected routes wrapped with PrivateRoute */}
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute element={<Dashboard/>} />
                  } 
                />
                <Route 
                  path="/transactions" 
                  element={
                    <PrivateRoute element={<Transaction />} />
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <PrivateRoute element={<Profile_page />} />
                  } 
                />
                <Route 
                  path="/gullaks" 
                  element={
                    <PrivateRoute element={<Gullak />} />
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <PrivateRoute element={<Contact />} />
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </GoogleOAuthProvider>
        </ModalProvider>
      </StateProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
