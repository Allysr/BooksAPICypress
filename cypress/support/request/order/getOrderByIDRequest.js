export const getOrderByIDRequest = (token, id) => {
    return cy.request({
      method: "GET",
      url: `/orders/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      failOnStatusCode: false,
    });
  };