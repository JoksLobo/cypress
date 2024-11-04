/// <reference types="cypress" />



describe('Teste para inclusão de novo contato', () => {
    beforeEach(() => {
        // entra no site
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher os campos para adicionar novo contato', () => {
        // preenche o campo nome
        cy.get('input[type="text"]').type('Joks Lobo')
        // preenche o campo email
        cy.get('input[type="email"]').type('jocson_herry@gmail.com')
        // preenche o campo telefone
        cy.get('input[type="tel"]').type('11 9-1234-5678')
        // clica no botão de adicionar contatro
        cy.get('.adicionar').click()

        cy.screenshot('inclusao-contato')
    })
})