## Simple Books API com Cypress

### 🔖 Como executar o projeto:

```diff
• git clone
• cd booksapicypress
• npm run cypress:run
```

### 🔖 Testes:

#### Status

- [x] Deve validar o status da API

#### Login

- [x] Deve retornar o status 201 e retornar um token de acesso
- [x] Deve retornar o status 409 ao inserir dados ja registrados
- [x] Deve retornar o status 400 ao realizar requisição sem body

#### Book
- [x] Deve retornar o status 200 e listar os livros
- [x] Deve retornar o status 200 e listar um livro por ID
- [x] Deve retornar o status 404 ao passar um id inválido
- [x] Deve retornar o status 200 uma lista de livros de não ficção com limite de 10 livros
- [x] Deve retornar o status 400 ao passar um parametro inválido

####  Order

- [x] Deve retornar o status 201 e retornar o pedido criado
- [x] Deve retornar o status 200 e listar todas os pedidos
- [x] Deve retornar o status 200 e listar um pedido por id
- [x] Deve retornar o status 204 ao atualizar um pedido


### 🔖 Melhorar:
- Adicionar testes de contrato;
- Adicionar relatório;
- Validar casos de testes negativos dos pedidos;
      

API utilizada: https://simple-books-api.glitch.me