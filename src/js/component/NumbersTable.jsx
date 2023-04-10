import React from "react";

export default function NumbersTable({ limit }) {
 
  const numbers = new Array(limit).fill(0);

  return (
    <div className="row">
      {numbers.map((n, index) => (
        <div className={`col-3 border text-center ${(index)%2!==0 && 'bg-danger'}`}>{index + 1}</div>
      ))}
    </div>
  );
}
