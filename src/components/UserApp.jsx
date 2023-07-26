import { useEffect, useState } from "react";
import { UserList } from "./UserList";

export const UserApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const traerLista = () => {
    setEndPoint("comments");
  };

  return (
    <>
      <h1>Users App</h1>
      <UserList endPoint={endPoint} />
      <button onClick={traerLista}>Llamar a API</button>
      <hr />
    </>
  );
};
