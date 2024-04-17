import { postLoginRequest } from "../../request/loginRequest.js";
import {
  deleteOrderByIDRequest,
  postOrderRequest,
} from "../../request/orderRequest.js";

describe("Delete Order", () => {
  it("Deve retornar o status 204 e deletar o pedido", () => {
    postLoginRequest().then((response) => {
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

    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      deleteOrderByIDRequest(token, orderID).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${orderID}.`);
      });
    });
  });
});
