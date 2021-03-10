// importa o express
const express = require("express");

// chama a função do express
const app = express();

// informar ao express que trabalharemos com json
app.use(express.json());

// rotas da aplicação

/**
 * Métodos HTTP
 *
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação dentro do servidor
 * PUT - Alterar uma informação dentro do servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Excluir uma informação no servidor
 *
 * Tipos de parâmetros
 *
 * Route Params => Serve para dentificar um recurso para buscar/deletar/editar
 * Query Params => Usado em paginação/filtro de busca
 * Body Params => Os objetos passados para inserção/alteração de algum recurso
 */

// ==> (GET) localhost:3333/courses
app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

// ==> (POST) localhost:3333/courses
app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// ==> (PUT) localhost:3333/courses/1
app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

// ==> (PATCH) localhost:3333/courses/2
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

// ==> (DELETE) localhost:3333/courses/3
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

// definir uma porta onde a aplicação vai rodar
app.listen(3333);
