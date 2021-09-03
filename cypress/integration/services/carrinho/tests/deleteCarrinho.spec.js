/// <reference types="cypress" />

import * as deleteCarrinho from '../requests/deleteCarrinhos.request';
import * as postLogin from '../../login/requests/postLogin.request';
import * as postCarrinho from '../requests/postCarrinhos.request';
import * as postUsuarios from '../../usuarios/requests/postUsuarios.request';
import * as postProdutos from '../../produtos/requests/postProdutos.request';

var faker = require('faker');

describe('Desafio', () => {
    it('Criar usuario, criar novo carrinho e excluir carrinho', () => {
        var email = faker.internet.email();
        var password = faker.internet.password();

        postUsuarios.criarUsuario(email, password).should((resPostUsuario) => {
            cy.log(resPostUsuario.body);
            expect(resPostUsuario.status).to.eq(201);
            postLogin.entrar(email, password).should((resLogin) => {
                cy.log(resLogin.body.authorization);
                expect(resLogin.status).to.eq(200);
                postProdutos.criarProdutos(resLogin.body.authorization).should((resPostProdutos) => {
                    expect(resPostProdutos.status).to.eq(201);
                    cy.log(resPostProdutos.body);
                    postCarrinho.cadastrarCarrinho(resLogin.body.authorization, resPostProdutos.body._id).should((resCarrinho) => {
                        expect(resCarrinho.status).to.eq(201);
                        deleteCarrinho.excluir(resLogin.body.authorization).then((resDeleteCarrinho) => {
                            expect(resDeleteCarrinho.status).to.eq(200);
                            expect(resDeleteCarrinho.body.message).to.eq("Registro excluído com sucesso. Estoque dos produtos reabastecido");
                        })
                    })
                })
            })
        })
    })
})

