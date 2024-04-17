import { postLoginRequest } from "../../request/loginRequest.js";
import {
  patchOrderByIDRequest,
  postOrderRequest,
} from "../../request/orderRequest.js";

describe("Patch Order", () => {
  it("Deve retornar o status 204 ao atualizar um pedido", () => {
    postLoginRequest().then((response) => {
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
    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      patchOrderByIDRequest(token, orderID).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${orderID}.`);
      });
    });
  });
});
