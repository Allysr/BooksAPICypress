export const getBookByIDRequest = (id) => {
  return cy.request({
    method: "GET",
    url: `/books/${id}`,
    failOnStatusCode: false,
  });
};
