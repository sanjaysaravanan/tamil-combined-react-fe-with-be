// API to register a new user into the database

import { beUrl } from "./constants";

const userSignup = async (userData) => {
  const response = await fetch(`${beUrl}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return await response.json();
};

const userSignIn = async (userData) => {
  const response = await fetch(`${beUrl}/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  return await response.json();
};

export { userSignup, userSignIn };
