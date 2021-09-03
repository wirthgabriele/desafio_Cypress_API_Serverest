/// <reference types="cypress" />

function entrar(email, password){

    var payloadLogin = {
        email: email,
        password: password
    }
    return cy.request({
        method: "POST",
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
        body: payloadLogin
  
  })
}

export { entrar };