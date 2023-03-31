import React from "react";

const Random = ({min, max}) => {
    const randomValue = Math.floor(Math.random() * max + min);
  
    return (
      <p>
        Random value between {min} and {max} =&gt; {randomValue}
      </p>
    );
  };


export default Random;