import { useState } from "react";

export const SegundoEvents = ({ value }) => {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);
  };

  return (
    <>
      <h1>Contador:</h1>
      <h2>{contador}</h2>
      <button onClick={handleClick}>Soy un boton</button>

      <hr />
    </>
  );
};
