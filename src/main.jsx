import React from "react";
import ReactDOM from "react-dom/client";
import { PrimerComponente } from "./components/PrimerComponente";
import "./css/styles.css";
import { SegundoEvents } from "./components/SegundoEvents";
import { CondTernarios } from "./components/CondTernarios";
import { UserApp } from "./components/UserApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserApp />
    <CondTernarios />
    <SegundoEvents value={0} />
    <PrimerComponente titulo="Seccion de props" subtit={5} />
  </React.StrictMode>
);
