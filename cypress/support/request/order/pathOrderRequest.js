export const patchOrderByIDRequest = (token, orderID) => {
  return cy.request({
    method: "PATCH",
    url: `/orders/${orderID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      customerName: "Ana",
    },
    failOnStatusCode: false,
  });
};

