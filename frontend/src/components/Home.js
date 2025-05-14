import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">Welcome to EmployeeSys</h1>
          <p className="lead">
            A simple and efficient Employee Management System for Admins and Employees.
          </p>
          <div className="mt-4">
            <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
            <Link to="/login" className="btn btn-outline-dark btn-lg">Login</Link>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063821.png"
            alt="EMS illustration"
            className="img-fluid"
            style={{ maxHeight: '320px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
