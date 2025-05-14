// components/Unauthorized.js
import React from 'react';

function Unauthorized() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger">Unauthorized Access</h2>
      <p>You do not have permission to view this page.</p>
    </div>
  );
}

export default Unauthorized;
