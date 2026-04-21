import React, { createContext, useContext, useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyAdmin = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const res = await apiClient.get('/auth/me');
      
      if (!res.data.user || !res.data.user.is_admin) {
          setUser(null);
      } else {
          setUser(res.data.user);
      }
    } catch (error) {
      // Only clear user if it's a definitive auth error (401/403)
      if (error.response && [401, 403].includes(error.response.status)) {
          setUser(null);
      }
      console.error("Admin verification failed", error.message);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    verifyAdmin();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, verifyAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
