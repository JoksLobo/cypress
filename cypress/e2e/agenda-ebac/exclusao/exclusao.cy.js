describe('Testes para a exclusão de um contato existente', () => {
    beforeEach(() => {
        // entra no site
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve excluir um contato existente', () => {
        // clica no botão de excluir
        cy.get('.delete').first().click()
    })
})