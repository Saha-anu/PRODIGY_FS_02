import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Modal, Button, Form } from 'react-bootstrap';

function AdminDashboard() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({ name: '', email: '', designation: '', _id: '' });

  const fetchEmployees = async () => {
    const token = localStorage.getItem('token');
    const { data } = await API.get('/employees', {
      headers: { Authorization: token },
    });
    setEmployees(data);
  };

  const deleteEmployee = async (id) => {
    const token = localStorage.getItem('token');
    await API.delete(`/employees/${id}`, {
      headers: { Authorization: token },
    });
    fetchEmployees();
  };

  const handleEditClick = (emp) => {
    setCurrentEmployee(emp);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    const { name, email, designation, _id } = currentEmployee;

    await API.put(`/employees/${_id}`, { name, email, designation }, {
      headers: { Authorization: token },
    });

    setShowModal(false);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <table className="table table-hover mt-4">
        <thead className="table-dark">
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id}>
              <td>
                {emp.photo && (
                  <img
                    src={`http://localhost:5000/uploads/${emp.photo}`}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    alt="emp"
                  />
                )}
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.designation}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(emp)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bootstrap Modal for Update */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={currentEmployee.name}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={currentEmployee.email}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                value={currentEmployee.designation}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, designation: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminDashboard;
