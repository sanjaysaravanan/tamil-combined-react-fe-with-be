const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/students`;

const getAllStus = async () => {
  const response = await fetch(backendUrl);
  return await response.json();
};

export { getAllStus };
