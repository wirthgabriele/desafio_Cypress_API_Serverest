/// <reference types="cypress" />

const payloadAddProduto = require('../payloads/add-produtos.payload.json');
var faker = require('faker');

function criarProdutos(auth) {
payloadAddProduto.nome = faker.commerce.productName();
payloadAddProduto.descricao = faker.lorem.words(6);

    return cy.request ({
        method: "POST",
        url: "produtos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddProduto
    })
}

export { criarProdutos };