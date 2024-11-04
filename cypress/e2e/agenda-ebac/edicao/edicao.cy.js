

describe('Testes para edição de contato já existente', () => {
    beforeEach(() => {
        // entra no site
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o nome de um contato já existente', () => {
        // clica no bitão de editar
        cy.get('.edit').first().click()
        // preenche o campo de nome alterando o nome do contato
        cy.get('input[type="text"]').clear().type('Alberto Roberto')
        // clica no botão salvar
        cy.get('.alterar').click()
    })

    it('Deve editar o telefone de um contato já existente', () => {
        // clica no bitão de editar
        cy.get('.edit').first().click()
        // preenche o campo de telefone alterando o telefone do contato
        cy.get('input[type="tel"]').clear().type('11 9-5252-6363')
        // clica no botão salvar
        cy.get('.alterar').click()
    })

    it('Deve editar o email de um contato já existente', () => {
        // clica no bitão de editar
        cy.get('.edit').first().click()
        // preenche o campo de email alterando o email do contato
        cy.get('input[type="email"]').clear().type('a.ro.berto@gmail.com')
        // clica no botão salvar
        cy.get('.alterar').click()
    })
})