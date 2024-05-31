## Objetivo:

O objetivo desses testes é validar as API's das funcionalidades listar livros, realizar um pedido, e autenticações.

<br>

## O que foi utilizado:

- Cypress

<br>

## Como executar o projeto:

```diff
• git clone https://github.com/Allysr/BooksAPICypress.git
• cd booksapicypress
• npm run cypress:run
```

<br>

## Documentos

<details>
<summary>Plano de teste</summary>

#### Introdução:
Este documento descreve o plano de teste para a API de livros e pedidos.


#### Escopo:
Será realizado testes nos seguintes endpoints:
- /api-clients/ - Autentica o usuário;
- /books - Buscar todos os livros;
- /books/{id} - Buscar apenas um livro por id;
- /orders/ - Cria e busca pedidos;
- /orders/{id} - Atualiza, busca e deleta um pedido por id.


#### Estratégia de Teste:

1. O que será testado:
    - Requisitos funcionais:
        - Endpoints
        - Métodos
        - Status code
        - Schema
    - Requisitos não funcionais
        - Autenticação e autorização
        - Tempo de resposta

2. Ferramentas de teste:
   - Testes manuais: 
     - Postman
   - Testes automatizados:
     - Linguagem de programação: Javascript
     - Manutenção de dependencias: NPM
     - Frameworks: Cypress


#### Critérios de aceite:

- Os dados de entrada e saída devem ser validados conforme os requisitos.
- Todos as respostas não devem passar de 6 segundos.
- Todos os endpoints devem retornar status de sucesso e erros.

#### Recursos necessários
- Acesso à documentação da API. 

</details>



<details>
<summary>Casos de teste</summary>

#### Status

*Get* 
- [x] Deve validar o status da API

#### Auth

*Post* 
- [x] Deve retornar o status 201 e retornar um token de acesso
- [x] Deve retornar o status 409 ao inserir dados ja registrados
- [x] Deve retornar o status 400 ao realizar requisição sem body

#### Book

*Get* 
- [x] Deve retornar o status 200 e listar os livros
- [x] Deve retornar o status 200 uma lista de livros de não ficção com limite de 10 livros
- [x] Deve retornar o status 400 ao passar um parametro inválido

*Get ID*
- [x] Deve retornar o status 200 e listar um livro por ID
- [x] Deve retornar o status 404 ao passar um id inválido
  

####  Order

*Post*
- [x] Deve retornar o status 201 e retornar o pedido criado
- [x] Deve retornar o status 400 ao realizar requisição sem body

*Get*
- [x] Deve retornar o status 200 e listar todas os pedidos
- [x] Deve retornar o status 401 ao acessar a rota com token inválido
- [x] Deve retornar o status 401  ao acessar a rota sem token
  
*Get ID* 
- [x] Deve retornar o status 200 e listar um pedido por id
- [x] Deve retornar o status 404 ao passar um id inexistente
- [x] Deve retornar o status 401 ao acessar a rota com token inválido
  
*Patch*
- [x] Deve retornar o status 204 ao atualizar um pedido
- [x] Deve retornar o status 404 ao passar um id inválido

*Delete*
- [x] Deve retornar o status 204 e deletar o pedido
- [x] Deve retornar o status 404 ao passar um id inexistente
- [x] Deve retornar o status 401 ao acessar a rota com token inválido
- [x] Deve retornar o status 401 ao acessar a rota sem token

</details>

      

API utilizada: https://simple-books-api.glitch.me