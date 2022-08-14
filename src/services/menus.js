const URL = "http://localhost:8000";

const generateConfig = (body) => {
  //console.log(JSON.stringify(body));
  return {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  };
};

export const create = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch(`${URL}/menu`, requestConfig);
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(`${URL}/menu/edit?_id=${id}`);
  const data = await response.json();
  return data;
};

export const dishById = async (id) => {
  const response = await fetch(`${URL}/detalle/${id}`);
  const data = await response.json();
  return data;
};

export const list = async () => {
  const response = await fetch(`${URL}/menu`);
  const data = await response.json();
  return data;
};

export const sublist = async (category, restaurant) => {
  const response = await fetch(
    `${URL}/menu/submenu?category=${category}&restaurantName=${restaurant}`
  );
  const data = await response.json();
  return data;
};

export const sublistRestaurant = async (restaurant) => {
  const response = await fetch(
    `${URL}/menu/submenu?restaurantName=${restaurant}`
  );
  const data = await response.json();
  return data;
};

export const update = async (id, body) => {
  const response = await fetch(`${URL}/menu/edit?_id=${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const deleteDish = async (id, body) => {
  const response = await fetch(`${URL}/menu/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  });
  //console.log(response.status);
  //console.log(body);
  const data = await response.json();
  return data;
};
