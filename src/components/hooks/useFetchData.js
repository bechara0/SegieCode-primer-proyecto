import React, { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endPoint) => {
  const [datos, setDatos] = useState([]);

  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetchData(endPoint).then((res) => {
      setDatos(res.datos);
      setIsloading(res.isloading);
    });
  }, [endPoint]);

  return {
    datos,
    isloading,
  };
};
