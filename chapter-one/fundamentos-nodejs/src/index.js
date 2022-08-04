const { request, response } = require("express");
const express = require("express");

const app = express();

// utilizar JSON no body params
app.use(express.json());

// localhost:3333/courses
app.get("/courses", (request, response) => {
console.log(request.query);

    return response.json([
        "curso 1", 
        "Curso 2",
        "Curso 3"
    ]);
});

// localhost:3333/courses
app.post("/courses", (request, response) => {
    console.log(request.body);

    return response.json([
        "curso 1", 
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

// localhost:3333/courses/1
app.put("/courses/:id", (request, response) => {
    console.log(request.params);

    return response.json([
        "curso 6", 
        "Curso 2",
        "Curso 3"
    ]);
});

// localhost:3333/courses/2
app.patch("/courses/:id", (request, response) => {
    return response.json([
        "curso 6", 
        "Curso 7",
        "Curso 3"
    ]);
});// localhost:3333/courses/1
app.delete("/courses/:id", (request, response) => {
    return response.json([
        "curso 6", 
        "Curso 2"
    ]);
});




app.listen(3333);