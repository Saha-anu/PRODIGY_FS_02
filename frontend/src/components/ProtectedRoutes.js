import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ user, allowedRoles, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Optional: Redirect employee to their dashboard
    if (user.role === 'employee') return <Navigate to="/employee" />;
    if (user.role === 'admin') return <Navigate to="/admin" />;
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoutes;
