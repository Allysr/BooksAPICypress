export const deleteOrderByIDWithoutAuthRequest = (orderID) => {
  return cy.request({
    method: "DELETE",
    url: `/orders/${orderID}`,
    failOnStatusCode: false,
  });
};

export const deleteOrderByIDRequest = (token, orderID) => {
  return cy.request({
    method: "DELETE",
    url: `/orders/${orderID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    failOnStatusCode: false,
  });
};
