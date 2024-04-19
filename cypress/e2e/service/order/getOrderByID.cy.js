import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import { postOrderRequest } from "../../../support/request/order/postOrderRequest.js";
import { getOrderByIDRequest } from "../../../support/request/order/getOrderByIDRequest.js";

describe("Obter pedido por ID /order/{id}", () => {
  it("Deve retornar o status 200 e listar um pedido por id", () => {
    postAuthRequest().then((response) => {
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
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
    const id = 1235;

    postAuthRequest().then((response) => {
      const token = response.body.accessToken;

      getOrderByIDRequest(token, id).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.error).to.equal(`No order with id ${id}.`);
      });
    });
  });

  it("Deve retornar o status 401 ao acessar a rota com token inválido", () => {
    const tokenInvalido = 1234;

    postAuthRequest().then((response) => {
      const token = response.body.accessToken;

      postOrderRequest(token).then((response) => {
        const id = response.body.orderId;

        getOrderByIDRequest(tokenInvalido, id).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body.error).to.eq("Invalid bearer token.");
        });
      });
    });
  });
});
