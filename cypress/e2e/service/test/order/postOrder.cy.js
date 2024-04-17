import { postLoginRequest } from "../../request/loginRequest.js";
import {
  postOrderRequest,
  postOrderWithoutBodyRequest,
} from "../../request/orderRequest.js";

describe("Post Order", () => {
  it("Deve retornar o status 201 e retornar o pedido criado", () => {
    postLoginRequest().then((response) => {
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
    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderWithoutBodyRequest(token).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.equal(`Invalid or missing bookId.`);
      });
    });
  });
});
