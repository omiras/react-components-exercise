import React from "react";

const Random = (props) => {
    const randomValue = Math.floor(Math.random() * props.max + props.min);
  
    return (
      <p>
        Random value between {props.min} and {props.max} =&gt; {randomValue}
      </p>
    );
  };


export default Random;