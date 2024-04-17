import { postLoginRequest } from "../request/loginRequest.js";
import {
  deleteOrderByIDRequest,
  getOrderByIDRequest,
  getOrderRequest,
  patchOrderByIDRequest,
  postOrderRequest,
} from "../request/orderRequest.js";

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 1000) + 1;
}

describe("Order", () => {
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
});
