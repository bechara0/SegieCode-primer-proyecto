export const fetchData = async (endPoint) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/${endPoint}`;
    const response = await fetch(url);
    const datos = await response.json();
    return {
      datos,
      isloading: false,
    };
  } catch (error) {
    console.error(error);
  }
};
