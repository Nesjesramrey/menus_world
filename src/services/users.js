//const URL = "http://localhost:8000";
const URL = "https://menus.api.nesjes.com";

const generateConfig = (body) => {
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
  const response = await fetch(`${URL}/users`, requestConfig);
  const data = await response.json();
  return data;
};

export const login = async (body) => {
  const requestConfig = generateConfig(body);
  const response = await fetch(`${URL}/users/login`, requestConfig);
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(`${URL}/users/edit?_id=${id}`);
  const data = await response.json();
  return data;
};

export const list = async () => {
  const response = await fetch(`${URL}/users`);
  const data = await response.json();
  return data;
};

export const sublist = async (category) => {
  const response = await fetch(`${URL}/users/subuser?category=${category}`);
  const data = await response.json();
  return data;
};

export const update = async (id, body) => {
  const response = await fetch(`${URL}/users/edit?_id=${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (id, body) => {
  const response = await fetch(`${URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
