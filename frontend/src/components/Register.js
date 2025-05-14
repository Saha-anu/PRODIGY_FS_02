// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    designation: '',
    role: 'employee',
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));

      const res = await axios.post('/api/auth/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h3 className="text-center text-primary fw-bold mb-4">Employee Registration</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" name="name" className="form-control" required value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" required value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" className="form-control" required value={form.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Designation</label>
            <input type="text" name="designation" className="form-control" required value={form.designation} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Profile Photo</label>
            <input type="file" name="photo" accept="image/*" className="form-control" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
