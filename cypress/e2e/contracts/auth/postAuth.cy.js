import { postAuthRequest } from "../../../support/request/auth/AuthRequest.js";
import { validarSchema } from "../../../support/util/validarSchema.js";

describe("Criar usuario /api-clients/", () => {
  it("Deve retornar o status 201 e validar o schema", () => {
    postAuthRequest().then((response) => {
      expect(response.status).to.eq(201);
      validarSchema("schema", response);
    });
  });
});
