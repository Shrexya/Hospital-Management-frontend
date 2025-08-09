// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await axios.get('http://localhost:5000/api/patient');
      setPatients(res.data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
