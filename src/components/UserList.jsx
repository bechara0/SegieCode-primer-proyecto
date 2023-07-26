import { useState, useEffect } from "react";

export const UserList = ({ endPoint }) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [endPoint]);
  const fetchUsers = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/${endPoint}`;
      const response = await fetch(url);
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ul>
        {endPoint == "users"
          ? datos.map((item) => <li key={item.id}>{item.name}</li>)
          : datos.map((item) => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  );
};
