export const postOrderRequest = (token) => {
  return cy.request({
    method: "POST",
    url: "/orders/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      bookId: 1,
      customerName: "John",
    },
  });
};

export const postOrderWithoutBodyRequest = (token) => {
  return cy.request({
    method: "POST",
    url: "/orders/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    failOnStatusCode: false,
  });
};

export const getOrderRequest = (token) => {
  return cy.request({
    method: "GET",
    url: "/orders/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

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
