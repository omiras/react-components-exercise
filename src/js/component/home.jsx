import React from "react";
import Random from "./Random.jsx";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Componentes React</h1>
      <div className="border">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="border">
        {/** Implementar Greetings component */}
      </div>
    </div>
  );
};

export default Home;
