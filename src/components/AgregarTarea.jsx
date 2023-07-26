import { useState } from "react";

export const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    console.log("esta cambiando");
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    agregarTarea(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresar tarea nueva"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
