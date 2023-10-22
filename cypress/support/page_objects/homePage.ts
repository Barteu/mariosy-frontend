export class HomePage{

    checkLastMariosLabel(){
        cy.contains('LAST MARIOS:')
    }

    checkAddButton(){
        cy.get('#add-button').should('contain.text', 'ADD MARIOS').should('have.attr','href', '/create');
    }

    clickAddButton(){
        cy.get('#add-button').click();
    }

    checkLastMariosesCount(expectedCount: number){
        cy.get('#last-marioses-grid').find('mat-grid-tile').its('length').should('eq', expectedCount)
    }

    checkAndGetLastMariosComment(): Cypress.Chainable<JQuery<HTMLElement>>{
        cy.get('#last-marioses-grid').find('mat-grid-tile').eq(0).find('.comment').invoke('text').as('commentText')
 
        cy.get('@commentText').then((text) => {
          expect(text.length).to.be.at.least(1)})

        return cy.get('@commentText')
    }

    checkAndGetLastMariosUser(): Cypress.Chainable<JQuery<HTMLElement>>{
        cy.get('#last-marioses-grid').find('mat-grid-tile').eq(0).find('.headers-grid-container > span > span').invoke('text').as('firstUser')
 
        cy.get('@firstUser').then((text) => {
          expect(text.length).to.be.at.least(1)})

        return cy.get('@firstUser')
    }

    clickLastMariosTile(){
        cy.get('#last-marioses-grid').find('mat-grid-tile').eq(0).click()
    }

    checkReceivedMariosesCountGreaterThan(number: number){
        cy.get('app-info-card').find('[href="/received"]').find('.number-font').invoke('text').then(parseInt).should('be.gt', number)
    }

    getReceivedMariosesCount(): Cypress.Chainable<JQuery<HTMLElement>>{
        cy.get('app-info-card').find('[href="/received"]').find('.number-font').invoke('text').as('receivedMariosesCount')
        return cy.get('@receivedMariosesCount')
    }

    checkReceivedMariosesCount(number: number){
        cy.get('app-info-card').find('[href="/received"]').find('.number-font').invoke('text').then(parseInt).should('be.eq', number)
    }
  
    clickReceivedMariosesCard(){
        cy.get('app-info-card').find('[href="/received"]').click()
    }

    checkSentMariosesCountGreaterThan(number: number){
        cy.get('app-info-card').find('[href="/sent"]').find('.number-font').invoke('text').then(parseInt).should('be.gt', number)
    }

    checkSentMariosesCountEqual(number: number){
        cy.get('app-info-card').find('[href="/sent"]').find('.number-font').invoke('text').then(parseInt).should('be.eq', number)
    }

    clickSentMariosesCard(){
        cy.get('app-info-card').find('[href="/sent"]').click()
    }

    checkLastMariosCommentContains(text: string){
        cy.get('#last-marioses-grid').find('mat-grid-tile').eq(0).find('.comment').contains(text)
     }

    checkLastMariosUserContains(text: string){
        cy.get('#last-marioses-grid').find('mat-grid-tile').eq(0).find('.headers-grid-container > span > span').contains(text)      
    }

}

export const homePage = new HomePage()