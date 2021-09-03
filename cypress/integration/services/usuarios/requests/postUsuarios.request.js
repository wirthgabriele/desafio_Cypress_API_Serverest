/// <reference types="cypress" />

let payloadAddUsuarios = require ('../payloads/add-usuarios.payload.json');
var faker = require ('faker');

function criarUsuario(email, password) {
    payloadAddUsuarios.nome = faker.name.findName();
    payloadAddUsuarios.email = email;
    payloadAddUsuarios.password = password;
    return cy.request ({
        method: "POST",
        url: "usuarios",
        headers: {
            accept: "application/json"  
        },
        failOnStatusCode: false,
        body: payloadAddUsuarios
    })
}

export { criarUsuario };