import { gerarNumeroAleatorio } from "../../../support/numeroAleatorio.js";

export const postLoginRequest = () => {
  return cy.request({
    method: "POST",
    url: "/api-clients/",
    body: {
      clientName: "Postman",
      clientEmail: `teste_${gerarNumeroAleatorio()}@example.com`,
    },
  });
};

export const postLoginExistentRequest = () => {
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

export const postLoginWithoutBodyRequest = () => {
  return cy.request({
    method: "POST",
    url: "/api-clients/",
    failOnStatusCode: false,
  });
};
