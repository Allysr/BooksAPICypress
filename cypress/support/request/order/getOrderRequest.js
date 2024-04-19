export const getOrderRequest = (token) => {
    return cy.request({
      method: "GET",
      url: "/orders/",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      failOnStatusCode: false,
    });
  };
  
  export const getOrderWithoutAuthRequest = () => {
    return cy.request({
      method: "GET",
      url: "/orders/",
      failOnStatusCode: false,
    });
  };