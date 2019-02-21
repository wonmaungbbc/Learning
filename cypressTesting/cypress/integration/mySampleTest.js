/// <reference types="cypress" />

context('Actions', () => {
    // beforeEach(() => {
    //     cy.visit('https://www.bbc.com/bitesize')
    // })


    // it('.type() - type into a DOM element', () => {
    //     // https://on.cypress.io/type
    //     cy.get('.action-email')
    //         .type('fake@email.com').should('have.value', 'fake@email.com')
    // })


    it('should visit to the link', () => {
        cy.visit('https://www.test.bbc.com/bitesize/levels/zkdqxnb')
        // cy.get('[data-reactid=".1nzezkm2c5c.0.2.0.$Post-16"] > .phase-card > .phase-card__link > .phase-card__content-container > .phase-card__cta').click()
        // cy.get('[data-reactid=".1nzezkm2c5c.0.0.1.0.0.2:$England"] > .nation-level-list__list-body > li > .nation-level-list__list-item').click()
        // cy.url().should('eq', '  https://www.bbc.com/bitesize/levels/zvhtng8')

    })
})  