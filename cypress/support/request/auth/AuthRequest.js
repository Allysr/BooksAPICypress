import { gerarNumeroAleatorio } from "../../numeroAleatorio.js";

export const postAuthRequest = () => {
  return cy.request({
    method: "POST",
    url: "/api-clients/",
    body: {
      clientName: "Postman",
      clientEmail: `teste_${gerarNumeroAleatorio()}@example.com`,
    },
  });
};

export const postAuthExistentRequest = () => {
  return cy.request({
    method: "POST",
    url: "/api-clients/",
    body: {
      clientName: "Postman",
      clientEmail: `valentin@example.com`,
    },
    failOnStatusCode: false,
  });
};

export const postAuthWithoutBodyRequest = () => {
  return cy.request({
    method: "POST",
    url: "/api-clients/",
    failOnStatusCode: false,
  });
};
