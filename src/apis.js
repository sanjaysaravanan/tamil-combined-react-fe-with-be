const backendUrl = "http://localhost:8000/students";

const getAllStus = async () => {
  const response = await fetch(backendUrl);
  return await response.json();
};

export { getAllStus };
