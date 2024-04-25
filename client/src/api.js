const api = {
  getProducts: async (currentPage, productsPerPage) =>
    await fetch(
      `${process.env.REACT_APP_API_URL}/products?page=${currentPage}&limit=${productsPerPage}`
    ),
  getReports: async (accessToken) =>
    await fetch(`${process.env.REACT_APP_API_URL}/reports`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default api;
