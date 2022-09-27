//const URL = "http://localhost:8000";
const URL = "https://menusapi.nesjes.com";

const generateConfig = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const createRestaurant = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch(`${URL}/restaurants`, requestConfig);
  const data = await response.json();
  return data;
};

export const listRestaurant = async () => {
  const response = await fetch(`${URL}/restaurants`);
  const data = await response.json();
  return data;
};
