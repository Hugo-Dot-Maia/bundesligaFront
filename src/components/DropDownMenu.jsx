import React, { useState } from 'react';
import { years } from '../constants/consts'

const DropDownMenu = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <select value={selectedYear} onChange={handleChange}>
      <option value="">Select a year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default DropDownMenu;
