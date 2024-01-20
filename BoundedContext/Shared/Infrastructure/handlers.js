const baseUrl = "http://localhost:3000/api"

async function handleRequest(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const error = response.json();

    throw new Error(error.message);
  }

  return response.json();
}

export function handleCreate(resource, data) {
  const url = `${baseUrl}/${resource}`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return handleRequest(url, options);
}

export async function handleRead(resource, userId) {
  const url = `${baseUrl}/${resource}/${userId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data
  } catch (error) {
    console.error('Error:', error);
  }
}

export function handleUpdate(id, data, resource) {
  const url = `${baseUrl}/${resource}/${id}`;
  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return handleRequest(url, options);
}

export function handleDelete(id, resource) {
  const url = `${baseUrl}/${resource}/${id}`;
  const options = {
    method: "DELETE",
  };

  return handleRequest(url, options);
}
