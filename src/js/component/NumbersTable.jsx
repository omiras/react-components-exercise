import React from "react";
import PropTypes from 'prop-types';


export default function NumbersTable({ limit, color = 'red' }) {
 
  const numbers = new Array(limit).fill(0);
  
  return (
    <div className="row">
      {numbers.map((n, index) => (
        <div key={index} style={{backgroundColor: color}} className={`col-3 border text-center`}>{index + 1}</div>
      ))}
    </div>
  );
}

NumbersTable.propTypes = {
  limit: PropTypes.number.isRequired,
  color: PropTypes.string
};
