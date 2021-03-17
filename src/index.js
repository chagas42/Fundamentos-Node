//importando o express da pasta node_modules
const { request, response } = require('express');
const fs = require('fs')
const express = require('express'); 

const app = express(); 

//GET
app.get('/courses', (request, response) => {
    return response.json(["Curso 1","Curso 2","Curso 3"]); 
}); 

//POST
app.post('/courses', (request, response) => {
    return response.json(["Curso 1","Curso 2","Curso 3", "Curso 4"]); 
}); 

//PUT
app.put('/courses', (request, response) => {
    return response.json(["Curs9999 1", "Curso 2","Curso 3","Curso 4"]); 
}); 

app.delete('/courses', (resquest, response) => {
    return response.json([]); 
});


//iniciando nossa aplicação na porta:3333
app.listen(3333); 