import { getStatusRequest } from "../../request/statusRequest.js";

describe("Get Status", () => {
    it("Deve validar o status da API", () => {
        getStatusRequest().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('OK');
        });
    });
})