/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import API_URL from '../api/config';

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [progressData, setProgressData] = useState({
    overall_percentage: 0,
    stats: {
      A1: { completed: 0, total: 30 },
      A2: { completed: 0, total: 35 },
      B1: { completed: 0, total: 30 },
      B2: { completed: 0, total: 25 },
      C1: { completed: 0, total: 21 },
    },
    completed_topics: 0,
    total_topics: 141
  });
  const [loadingProgress, setLoadingProgress] = useState(false);

  const fetchProgress = useCallback(async () => {
    if (!token) return;
    try {
      setLoadingProgress(true);
      // Backend URL to be defined in vite.config.js or via env var
      const response = await axios.get(`${API_URL}/progress`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProgressData(response.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    } finally {
      setLoadingProgress(false);
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      fetchProgress();
    } else {
      // Reset if logged out
      setProgressData({
        overall_percentage: 0,
        stats: {
          A1: { completed: 0, total: 30 },
          A2: { completed: 0, total: 35 },
          B1: { completed: 0, total: 30 },
          B2: { completed: 0, total: 25 },
          C1: { completed: 0, total: 21 },
        },
        completed_topics: 0,
        total_topics: 141
      });
    }
  }, [user, fetchProgress]);

  const markComplete = async (level, topicNumber, topicName, isCompleted = true) => {
    if (!token) return false;
    try {
      await axios.post(`${API_URL}/progress/mark-complete`, {
        level,
        topic_number: topicNumber,
        topic_name: topicName,
        completed: isCompleted
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh progress after marking complete
      await fetchProgress();
      return true;
    } catch (error) {
      console.error("Error marking topic complete:", error);
      return false;
    }
  };

  return (
    <ProgressContext.Provider value={{ progressData, loadingProgress, fetchProgress, markComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
