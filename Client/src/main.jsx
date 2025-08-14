import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import router
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './components/Auth/AuthContext.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <AuthProvider>


    <BrowserRouter>
      <App />
    </BrowserRouter>
      </AuthProvider>

  </StrictMode>
);
