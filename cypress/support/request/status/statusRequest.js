export const getStatusRequest = () => {
  return cy.request({
    method: "GET",
    url: "/status",
  });
};
