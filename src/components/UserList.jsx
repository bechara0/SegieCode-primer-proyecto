import { useFetchData } from "./hooks/useFetchData";
export const UserList = ({ endPoint }) => {
  const { datos, isloading } = useFetchData(endPoint);

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
