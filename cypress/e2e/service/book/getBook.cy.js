import {
  getBookRequest,
  getBookWithParamRequest,
} from "../../../support/request/book/getBookRequest.js";

describe("Obter livros /books", () => {
  it("Deve retornar o status 200 e listar os livros", () => {
    getBookRequest().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.to.have.lengthOf.at.least(2);
    });
  });

  it("Deve retornar o status 200 uma lista de livros de não ficção com limite de 10 livros", () => {
    getBookWithParamRequest("non-fiction", 5).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.length).to.be.at.most(5);
    });
  });

  it("Deve retornar o status 400 ao passar um parametro inválido", () => {
    getBookWithParamRequest("non-fictionn", 5).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.error).to.equal(
        `Invalid value for query parameter 'type'. Must be one of: fiction, non-fiction.`
      );
    });
  });
});
