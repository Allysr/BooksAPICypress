const Ajv = require("ajv")
const ajv = new Ajv() 

export const validarSchema = (path, response) => {
    cy.fixture(path).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(response.body)
        if (!valid)
            throw new Error(`Campo: ${validate.errors[0].instancePath} | Messagem: ${validate.errors[0].message}`)
    })
}