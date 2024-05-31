import { getStatusRequest } from "../../../support/request/status/statusRequest.js";

describe("Obter status /status", () => {
    it("Deve validar o status da API", () => {
        getStatusRequest().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('OK');
        });
    });
})