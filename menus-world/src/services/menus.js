const generateConfig = (body) => {
  console.log(JSON.stringify(body));
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
  const response = await fetch("http://localhost:8000/menu", requestConfig);
  const data = await response.json();
  return data;
};

export const retrieve = async (id) => {
  const response = await fetch(
    `https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`
  );
  const data = await response.json();
  return data;
};

export const list = async () => {
  const response = await fetch(
    `https://poised-shift-162315-default-rtdb.firebaseio.com/.json`
  );
  const data = await response.json();
  return data;
};

export const update = async (id, body) => {
  const response = await fetch(
    `https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};

export const deleteDish = async (id, body) => {
  const response = await fetch(
    `https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body),
    }
  );
  console.log(response.status);
  console.log(body);
  const data = await response.json();
  return data;
};
