// ReSharper disable StatementTermination
// ReSharper disable UseOfImplicitGlobalInFunctionScope
describe('Convert', function() {
    beforeEach(() => {
        cy.visit("/")
        cy.setConvertIntercept()
    })

    it('Valid curl command works', function() {
        cy.get('#curl').type('curl -X POST github.com --compressed')
        cy.contains('Convert').click()
        cy.waitConvertResponse()

        cy.convertAssert()
    })

    it('GET example works', function() {
        cy.contains('GET').click()
        cy.waitConvertResponse()

        cy.convertAssert()
    })

    it('POST example works', function() {
        cy.contains('POST').click()
        cy.waitConvertResponse()

        cy.convertAssert()
    })

    it('POST Form example works', function() {
        cy.contains('POST Form').click()
        cy.waitConvertResponse()

        cy.convertAssert()
    })

    it('Upload Files example works', function() {
        cy.contains('Upload Files').click()
        cy.waitConvertResponse()

        cy.convertAssert()
    })

    it('Warning shown when curl contains unknown parameter', function() {
        cy.get('#curl').type('curl github.com -v')
        cy.contains('Convert').click()
        cy.waitConvertResponse()

        cy.get('#csharp').should('be.visible')
        cy.get('#warnings').should('be.visible')
        cy.get('#errors').should('not.be.visible')
    })
})
// ReSharper restore StatementTermination
// ReSharper restore UseOfImplicitGlobalInFunctionScope
