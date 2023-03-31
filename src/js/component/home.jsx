import React from "react";
import Greetings from "./Greetings.jsx";
import Random from "./Random.jsx";

function Wrap({ children }) {
  return (<div
    style={{
      border: "2px solid red",
      borderRadius: "16px",
      textAlign: "left",
      padding: "1rem",
      fontWeight: 700,
      fontSize: "1.2rem",
      backgroundImage: "linear-gradient(#f9f047, #0fd850)",
    }}
  >
    {children}
  </div>);
}

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Componentes React</h1>
      <Wrap>
        <Random min={1} max={6} />
      </Wrap>
      <Random min={1} max={100} />
      <Wrap>
      <Greetings lang="fr">
        <strong>Ainhoa</strong>
      </Greetings>
      </Wrap>
    </div>
  );
};

export default Home;
