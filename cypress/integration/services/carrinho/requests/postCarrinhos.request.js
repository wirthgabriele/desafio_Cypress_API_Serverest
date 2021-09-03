/// <reference types="cypress" />

let payloadAddCarrinho = require('../payloads/add-carrinho.payload.json');

function cadastrarCarrinho(auth, idProduto) {
    payloadAddCarrinho.produtos[0].idProduto = idProduto
    
    return cy.request ({
        method: "POST",
        url: "carrinhos",
        headers: {
            accept: "application/json",
            Authorization: auth
        },
        failOnStatusCode: false,
        body: payloadAddCarrinho
    })
}

export { cadastrarCarrinho };