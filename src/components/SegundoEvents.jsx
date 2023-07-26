import { useState } from "react";

export const SegundoEvents = ({ value }) => {
  const [contador, setContador] = useState(value);
  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1>Practica useState</h1>
      <h2>Contador:</h2>
      <h2>{contador}</h2>
      <button onClick={handleClick}>Soy un boton</button>

      <hr />
    </>
  );
};
