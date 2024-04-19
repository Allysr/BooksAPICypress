import { getBookByIDRequest } from "../../../support/request/book/getBookByIDRequest.js";

describe("Obter livros por ID /books{id}", () => {
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
});
