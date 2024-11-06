import React, { useState } from 'react';
import './AdminWorkspace.css';

const AdminWorkspace = ({ setIsAuthenticated }) => {
    const [loading, setLoading] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const employeeApplications = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', contact: '1234567890', status: 'Accepted' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', contact: '1234567891', status: 'Rejected' },
        { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', contact: '1234567892', status: 'Pending' },
    ];

    const handleLogout = () => {
        setLoading(true);
        setTimeout(() => {
            setIsAuthenticated(false);
            window.location.href = "/employee-site";
        }, 1000);
    };

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="admin-header">
                    <img src="./Asset/logo512.png" alt="Admin" className="admin-image" />
                    <p className="admin-label">ADMIN</p>
                </div>
                <ul>
                    <li className="clickable">Admin Setting</li>
                    <li className="clickable">Dashboard</li>
                </ul>
                <button onClick={handleLogout} disabled={loading} className="logout-button">
                    {loading ? 'Logging out...' : 'Logout'}
                </button>
            </aside>
            <main className="main-content">
                <div className="container">
                    <h1 className="main-title">Online Hiring System</h1>
                    <table className="applications-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeApplications.map((application, index) => (
                                <tr key={application.id}>
                                    <td>{index + 1}</td>
                                    <td>{application.name}</td>
                                    <td>{application.email}</td>
                                    <td>{application.contact}</td>
                                    <td>
                                        <span className={`status ${application.status.toLowerCase()}`}>
                                            {application.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleEmployeeClick(application)} className="view-button">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedEmployee && (
                        <div className="employee-details">
                            <h3>Employee Details</h3>
                            <p><strong>Name:</strong> {selectedEmployee.name}</p>
                            <p><strong>Email:</strong> {selectedEmployee.email}</p>
                            <p><strong>Contact:</strong> {selectedEmployee.contact}</p>
                            <p><strong>Status:</strong> {selectedEmployee.status}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminWorkspace;
