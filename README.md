# **Api Node Graphql**

API para desenvolvimento pessoal, utilizando Node.js, GraphQL, TypeScript, Prisma e Jest para gerenciamento de usuarios

## **Índice**

- [Instalação](#instalação)
- [Uso](#uso)
- [Testes](#testes)

## **Instalação**

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/0FelipeMeira/api_node_graphql.git
cd api_node_graphql
npm install
npx prisma migrate dev
```

# Uso

###### Inicie o servidor

```bash
npm start
```

###### Acessar o Playground do GraphQL

Acesse o playground GraphQL em http://localhost:4000/graphql para testar suas queries e mutations.

###### Exemplo de Query

```graphql
query {
  getUser(id: "1") {
    id
    name
    email
  }
}
```

###### Exemplo de Mutation

```graphql
mutation {
  createUser(data: { name: "John Doe", email: "john@example.com" }) {
    id
    name
    email
  }
}
```

## **Testes**

###### Para rodar os testes unitários:
Adicione ***"type": "module"***, no package.json e inicie os testes com
```bash
npm test
```