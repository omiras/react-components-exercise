import React from "react";
import Greetings from "./Greetings.jsx";
import Random from "./Random.jsx";
import MyButton from "./MyButton.jsx";
import BoxColor from "./BoxColor.jsx";
import LikeButton from "./LikeButton.jsx";

function Wrap({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "16px",
        textAlign: "left",
        padding: "1rem",
        fontWeight: 700,
        fontSize: "1.2rem",
        backgroundImage: "linear-gradient(#f9f047, #0fd850)",
      }}
    >
      {children}
    </div>
  );
}

//create your first component
const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center w-75 mx-auto gap-2">
      <svg style={{width: '5rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
      <h1 className="text-center mt-5">Componentes React</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Greetings lang="fr">
        <strong>Ainhoa</strong>
      </Greetings>
      <MyButton type="info">Click me!</MyButton>
      <MyButton>Save changes </MyButton>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={23} g={45} b={44} />

      <LikeButton />
      <LikeButton />
      
    </div>
  );
};

export default Home;
