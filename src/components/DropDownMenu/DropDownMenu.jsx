import React, { useState } from 'react';
import { years } from '../../constants/consts';
import './DropDown.css';
import { getSeasonResult } from './service/DropDownService';

const DropDownMenu = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    try {
      const response = await getSeasonResult(year);
      // Handle the response data
      console.log(response);
    } catch (error) {
      // Handle any errors
      console.error('Error:', error.message);
    }
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
