import React from 'react';

export default function MyButton({type, children}) {
    
  const colorBtn = type== 'info'? 'blue': 'black';

    return <button className="btn" style={{fontFamily: 'Verdana', border: '1px solid black', color: colorBtn}}>
      <strong>{children}</strong>
    </button>;
  }
  