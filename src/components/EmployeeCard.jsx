// src/components/EmployeeCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import '../styles/EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const { addFavorite } = useContext(EmployeeContext);

  return (
    <div className="employee-card">
      <img src={employee.picture.medium} alt={employee.name.first} />
      <h3>{employee.name.first} {employee.name.last}</h3>
      <p>Age: {employee.dob.age}</p>
      <p>Location: {employee.location.city}, {employee.location.state}</p>
      <Link to={`/employee/${employee.login.uuid}`}>More Details</Link>
      <button onClick={() => addFavorite(employee)}>Save Favorite</button>
    </div>
  );
};

export default EmployeeCard;
