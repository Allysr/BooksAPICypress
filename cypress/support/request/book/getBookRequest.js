export const getBookRequest = () => {
  return cy.request({
    method: "GET",
    url: "/books",
  });
};

export const getBookWithParamRequest = (type, limit) => {
  return cy.request({
    method: "GET",
    url: `/books?type=${type}&limit=${limit}`,
    failOnStatusCode: false,
  });
};
