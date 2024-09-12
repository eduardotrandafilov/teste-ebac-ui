/// <reference types="cypress"/>
import perfil from './../../fixtures/perfil.json'

    describe('Funcionalidade:Login',()=>{

        beforeEach(()=>{
            cy.visit('minha-conta')
        })

        afterEach(()=>{
            //cy.screenshot()
        })
        
        it('Deve fazer login com sucesso',()=>{
            cy.get('#username').type('eduardo.trandafilov@gmail.com')
            cy.get('#password').type('123')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.trandafilov (não é eduardo.trandafilov? Sair)')
        })

        it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
            cy.get('#username').type('eduardotrandafilov@gmail.com')
            cy.get('#password').type('123')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('exist')

        });

        it('Deve exibir uma mensagem de erro ao inserir  senha inválida ', () => {
            cy.get('#username').type('eduardo.trandafilov@gmail.com')
            cy.get('#password').type('123444444')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail eduardo.trandafilov@gmail.com está incorreta. Perdeu a senha?')
            cy.get('.woocommerce-error').should('exist')
        });

        it('Deve fazer login com sucesso - Usando massa de dados',()=>{
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.trandafilov (não é eduardo.trandafilov? Sair)')
        })

        it.only('Deve fazer login com sucesso - Usando fixture',()=>{
            cy.fixture('perfil').then(dados=>{
                cy.get('#username').type(dados.usuario,{log:false})
                cy.get('#password').type(dados.senha,{log:false})
                cy.get('.woocommerce-form > .button').click()
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, eduardo.trandafilov (não é eduardo.trandafilov? Sair)')
       
            })
        })
    })