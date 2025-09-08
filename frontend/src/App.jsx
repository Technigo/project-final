// frontend/src/App.jsx
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';

import { ThemeProvider } from 'styled-components';
import { getTheme } from './ui/theme';
import { GlobalStyle } from './ui/GlobalStyle';
import { Nav, NavLink, GhostButton, Brand } from './ui/components';
import { useLocalStorage } from './hooks/useLocalStorage';

function Private({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function TopNav({ mode, toggleMode }) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <Nav>
      {/* First row (mobile): brand + theme toggle */}
      <div className="row-top">
        <Brand to="/">Pocket Oracle</Brand>
        <GhostButton onClick={toggleMode} aria-pressed={mode === 'dark'}>
          {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </GhostButton>
      </div>

      {/* Second row (mobile): links; on desktop sits to the right */}
      <div className="row-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/secret">Secret</NavLink>

        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <NavLink to="/" onClick={onLogout}>Logout</NavLink>
        )}
      </div>
    </Nav>
  );
}

export default function App() {
  const [mode, setMode] = useLocalStorage('mode', 'light');
  const theme = getTheme(mode);
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  // Warm the API (Render cold start)
  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/health`;
    fetch(url, { cache: 'no-store' }).catch(() => { });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <TopNav mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secret" element={<Private><Secret /></Private>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div style={{ padding: 16 }}>Not found</div>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}



