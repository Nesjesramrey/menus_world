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
  const response = await fetch(
    //"mongodb+srv://nesjesramrey:Nestor26021982@cluster0.ysrig89.mongodb.net/?retryWrites=true&w=majority",
    "https://poised-shift-162315-default-rtdb.firebaseio.com/.json",
    requestConfig
  );
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
