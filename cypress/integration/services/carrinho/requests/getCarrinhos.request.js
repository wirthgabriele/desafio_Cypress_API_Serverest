/// <reference types="cypress" />

function listarCarrinhos(_id){
    return cy.request({
        method: "GET",
        url: `carrinhos/${_id}`,
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}

export { listarCarrinhos };