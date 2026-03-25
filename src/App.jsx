import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { TaskProvider } from "./contexts/TaskContext";
import MainContent from './components/MainContent';
import AccessibilityWidget from './components/Accessibility';
import { Routers } from './routers';
import { AuthProvider } from './hooks/AuthContext';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <AccessibilityProvider>
          <TaskProvider>
            <GlobalStyle />
            <MainContent>
              <AccessibilityWidget />
              <Routers />
              <ToastContainer />
            </MainContent>
          </TaskProvider>
        </AccessibilityProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;