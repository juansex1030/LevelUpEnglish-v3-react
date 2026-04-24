/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import apiClient from '../api/apiClient';
import { useAuth } from './AuthContext';

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth();
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
    if (!user) return;
    try {
      setLoadingProgress(true);
      const response = await apiClient.get('/progress');
      setProgressData(response.data);
    } catch (error) {
      console.error("Error fetching progress:", error);
    } finally {
      setLoadingProgress(false);
    }
  }, [user]);

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
    if (!user) return false;
    try {
      await apiClient.post('/progress/mark-complete', {
        level,
        topic_number: topicNumber,
        topic_name: topicName,
        completed: isCompleted
      });
      // Refresh progress after marking complete
      await fetchProgress();
      return true;
    } catch (error) {
      console.error("Error marking topic complete:", error);
      return false;
    }
  };

  const updatePracticeProgress = async (level, topicNumber, completedGames) => {
    if (!user) return false;
    try {
      await apiClient.post('/progress/practice', {
        level,
        topic_number: topicNumber,
        completed_games: completedGames
      });
      // Refresh progress to sync local state
      await fetchProgress();
      return true;
    } catch (error) {
      console.error("Error updating practice progress:", error);
      return false;
    }
  };

  const resetPracticeProgress = async (level, topicNumber) => {
    if (!user) return false;
    try {
      await apiClient.delete('/progress/practice', {
        data: { level, topic_number: topicNumber }
      });
      await fetchProgress();
      return true;
    } catch (error) {
      console.error("Error resetting practice progress:", error);
      return false;
    }
  };

  return (
    <ProgressContext.Provider value={{ progressData, loadingProgress, fetchProgress, markComplete, updatePracticeProgress, resetPracticeProgress }}>
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
