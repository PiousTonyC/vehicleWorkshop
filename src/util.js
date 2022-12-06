export const options = (method = "GET", body = null) => {
  const token = localStorage.getItem("token");
  return {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body,
  };
};
