import {
  getBookByIDRequest,
  getBookRequest,
  getBookWithParamRequest,
} from "../request/bookRequest.js";

describe("Books", () => {
  it("Deve retornar o status 200 e listar os livros", () => {
    getBookRequest().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.to.have.lengthOf.at.least(2);
    });
  });

  it("Deve retornar o status 200 e listar um livro por ID", () => {
    const id = 1;

    getBookByIDRequest(id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq({
        id: 1,
        name: "The Russian",
        author: "James Patterson and James O. Born",
        isbn: "1780899475",
        type: "fiction",
        price: 12.98,
        "current-stock": 12,
        available: true,
      });
    });
  });

  it("Deve retornar o status 404 ao passar um id inválido", () => {
    const id = 100;

    getBookByIDRequest(id).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.equal(`No book with id ${100}`);
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
