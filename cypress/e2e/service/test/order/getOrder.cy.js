import { postLoginRequest } from "../../request/loginRequest.js";
import {
  getOrderByIDRequest,
  getOrderRequest,
  postOrderRequest,
} from "../../request/orderRequest.js";

describe("Get Order", () => {
  it("Deve retornar o status 200 e listar todas os pedidos", () => {
    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      getOrderRequest(token).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.at.most(1);
      });
    });
  });

  it("Deve retornar o status 200 e listar um pedido por id", () => {
    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
        expect(response.status).to.eq(201);
        const id = response.body.orderId;

        getOrderByIDRequest(token, id).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("id");
          expect(response.body).to.have.property("bookId");
          expect(response.body).to.have.property("customerName");
          expect(response.body).to.have.property("createdBy");
          expect(response.body).to.have.property("quantity");
          expect(response.body).to.have.property("timestamp");
        });
      });
    });
  });

  it("Deve retornar o status 404 ao passar um id inexistente", () => {
    postLoginRequest().then((response) => {
      const id = 1235;

      expect(response.status).to.eq(201);
      const token = response.body.accessToken;

      getOrderByIDRequest(token, id).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${id}.`);
      });
    });
  });
});
