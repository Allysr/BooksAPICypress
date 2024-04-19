import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import { postOrderRequest } from "../../../support/request/order/postOrderRequest.js";
import { patchOrderByIDRequest } from "../../../support/request/order/pathOrderRequest.js";

describe("Alterar pedido /order", () => {
  it("Deve retornar o status 204 ao atualizar um pedido", () => {
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
        expect(response.status).to.eq(201);
        const orderID = response.body.orderId;

        patchOrderByIDRequest(token, orderID).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
    });
  });

  it("Deve retornar o status 404 ao passar um id inválido", () => {
    const orderID = 1234;
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      patchOrderByIDRequest(token, orderID).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${orderID}.`);
      });
    });
  });
});
