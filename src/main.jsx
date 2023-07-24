import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./PrimerComponente";
import "./styles.css";
import { SegundoEvents } from "./SegundoEvents";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SegundoEvents value={0} />
    <PrimerComponente titulo="Seccion de props" subtit={5} />
  </React.StrictMode>
);
