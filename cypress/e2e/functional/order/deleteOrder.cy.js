import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import {
  deleteOrderByIDRequest,
  deleteOrderByIDWithoutAuthRequest,
} from "../../../support/request/order/deleteOrderRequest.js";
import { postOrderRequest } from "../../../support/request/order/postOrderRequest.js";

describe("Deletar pedido /order", () => {
  it("Deve retornar o status 204 e deletar o pedido", () => {
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
        expect(response.status).to.eq(201);
        const orderID = response.body.orderId;

        deleteOrderByIDRequest(token, orderID).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });

  it("Deve retornar o status 404 ao passar um id inexistente", () => {
    const orderID = 1456;

    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      deleteOrderByIDRequest(token, orderID).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${orderID}.`);
      });
    });
  });

  it("Deve retornar o status 401 ao acessar a rota com token inválido", () => {
    const orderID = 1456;
    const token = 1234;

    deleteOrderByIDRequest(token, orderID).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.error).to.equal(`Invalid bearer token.`);
    });
  });

  it("Deve retornar o status 401 ao acessar a rota sem token", () => {
    const orderID = 1456;

    deleteOrderByIDWithoutAuthRequest(orderID).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.error).to.equal(`Missing Authorization header.`);
    });
  });
});
