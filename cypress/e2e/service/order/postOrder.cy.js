import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import {
  postOrderRequest,
  postOrderWithoutBodyRequest,
} from "../../../support/request/order/postOrderRequest.js";

describe("Criar pedido /order", () => {
  it("Deve retornar o status 201 e retornar o pedido criado", () => {
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("created");
        expect(response.body).to.have.property("orderId");
      });
    });
  });

  it("Deve retornar o status 400 ao realizar requisição sem body", () => {
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderWithoutBodyRequest(token).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.equal(`Invalid or missing bookId.`);
      });
    });
  });
});
