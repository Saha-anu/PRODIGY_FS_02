// src/components/EmployeeDashboard.js
import React from 'react';

function EmployeeDashboard({ user }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4 text-center text-primary fw-bold">Employee Profile</h3>
        <div className="d-flex flex-column align-items-center text-center">
          {user.photo ? (
            <img
              src={`http://localhost:5000/uploads/${user.photo}`}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '130px', height: '130px', objectFit: 'cover' }}
            />
          ) : (
            <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center mb-3" style={{ width: '130px', height: '130px' }}>
              <span style={{ fontSize: '2rem' }}>{user.name?.[0]?.toUpperCase()}</span>
            </div>
          )}
          <h4 className="fw-semibold">{user.name}</h4>
          <p className="text-muted">{user.designation}</p>
        </div>

        <hr className="my-4" />

        <div className="px-3">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Designation:</strong> {user.designation}</p>
          <p><strong>Role:</strong> {user.role?.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
