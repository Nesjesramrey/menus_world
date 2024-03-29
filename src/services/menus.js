const URL = "http://localhost:8000";
//const URL = "https://menusapi.nesjes.com";

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

export const createComment = async (id, data) => {
  const url = URL + "/detalle/" + id;
  console.log(url);

  const response = await fetch(`${URL}/detalle/${id}`, {
    method: "PATCH",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const allData = await response.json();
  return allData;
};

export const list = async () => {
  const response = await fetch(`${URL}/menu`);
  console.log(URL);
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

export const listRestaurant = async (restaurant) => {
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
  const data = await response.json();
  return data;
};
