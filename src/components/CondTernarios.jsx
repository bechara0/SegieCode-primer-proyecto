import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li className="items">
      {nombre}
      {visto ? "✅" : "❌"}
      {/* {visto && "✔"} */}
      {/* con && si es false sale del condicional */}
    </li>
  );
};

const addTask = () => {};
let listado = [
  { id: 0, nombre: "Instalaciones", visto: true },
  { id: 1, nombre: "Uso de Vite", visto: true },
  { id: 2, nombre: "Variables en JSX", visto: true },
  { id: 3, nombre: "Props", visto: true },
  { id: 4, nombre: "Eventos", visto: true },
  { id: 5, nombre: "useState", visto: true },
  { id: 6, nombre: "Redux", visto: false },
  { id: 7, nombre: "CustomHooks", visto: false },
];
export const CondTernarios = () => {
  const [arreglo, setArreglo] = useState(listado);

  const onAgregarTarea = (val) => {
    let valor = val.trim();
    if (valor < 1) return;
    const envio = {
      id: arreglo.length,
      nombre: val,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1>Condicionales ternarios</h1>
      <AgregarTarea agregarTarea={onAgregarTarea} />
      <h2>Listado de temas del curso</h2>
      <ol>
        {arreglo.map((i) => (
          <Items key={i.id} nombre={i.nombre} visto={i.visto} />
        ))}
      </ol>

      <hr />
    </>
  );
};
