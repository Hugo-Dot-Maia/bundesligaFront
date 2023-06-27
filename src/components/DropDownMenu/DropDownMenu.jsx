import React, { useState } from 'react';
import { years } from '../../constants/consts';
import './DropDown.css';

const DropDownMenu = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedYear} onChange={handleChange} className="dropdown-select">
        <option value="">Select a year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div> 
  );
};

export default DropDownMenu;
