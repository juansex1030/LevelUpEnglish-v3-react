import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

// Protective layout
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div className="text-center p-5">Cargando...</div>;
  if (!user || !user.is_admin) return <Navigate to="/login" replace />;
  
  return children;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={user && user.is_admin ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } />
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
