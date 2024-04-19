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