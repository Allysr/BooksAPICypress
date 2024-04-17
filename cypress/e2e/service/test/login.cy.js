import {
  postLoginExistentRequest,
  postLoginRequest,
  postLoginWithoutBodyRequest,
} from "../request/loginRequest.js";

describe("Login", () => {
  it("Deve retornar o status 201 e retornar um token de acesso", () => {
    postLoginRequest().then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("accessToken");
    });
  });

  it("Deve retornar o status 409 ao inserir dados ja registrados", () => {
    postLoginExistentRequest().then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body.error).to.equal(
        `API client already registered. Try a different email.`
      );
    });
  });

  it("Deve retornar o status 400 ao realizar requisição sem body", () => {
    postLoginWithoutBodyRequest().then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.equal(`Invalid or missing client name.`);
    });
  });
});
