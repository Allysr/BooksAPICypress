import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import {
  getOrderRequest,
  getOrderWithoutAuthRequest,
} from "../../../support/request/order/getOrderRequest.js";

describe("Obter pedido /order", () => {
  it("Deve retornar o status 200 e listar todas os pedidos", () => {
    postAuthRequest().then((response) => {
      const token = response.body.accessToken;

      getOrderRequest(token).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.at.most(1);
      });
    });
  });

  it("Deve retornar o status 401 ao acessar a rota com token inválido", () => {
    const token = 12345;

    getOrderRequest(token).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.error).to.eq("Invalid bearer token.");
    });
  });

  it("Deve retornar o status 401  ao acessar a rota sem token", () => {
    getOrderWithoutAuthRequest().then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.error).to.eq("Missing Authorization header.");
    });
  });
});
