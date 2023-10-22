export class ReceivedMariosesPage{

    checkReceivedMariosLabel(){
        cy.contains('RECEIVED MARIOS:')
    }

    checkBackButton(){
        cy.get('.button').should('contain.text', 'BACK');
    }

    clickBackButton(){
        cy.get('.button').click();
    }

    checkMariosesCountGreaterThan(number: number){
        cy.get('app-marios-grid').find('mat-grid-tile').its('length').should('gt', number)
    }

    checkReceivedMariosesCount(number: number){            
            cy.get('app-marios-grid').find('mat-grid-tile').its('length').should('eq', number)
    }

    checkAndGetLastMariosComment(): Cypress.Chainable<JQuery<HTMLElement>>{
        cy.get('mat-grid-list').find('mat-grid-tile').eq(0).find('.comment').invoke('text').as('commentText')
 
        cy.get('@commentText').then((text) => {
          expect(text.length).to.be.at.least(1)})

        return cy.get('@commentText')
    }

    checkAndGetLastMariosUser(): Cypress.Chainable<JQuery<HTMLElement>>{
        cy.get('mat-grid-list').find('mat-grid-tile').eq(0).find('.headers-grid-container > span > span').invoke('text').as('firstUser')
 
        cy.get('@firstUser').then((text) => {
          expect(text.length).to.be.at.least(1)})

        return cy.get('@firstUser')
    }

    clickLastMariosTile(){
        cy.get('mat-grid-list').find('mat-grid-tile').eq(0).click()
    }


}


export const receivedMariosesPage = new ReceivedMariosesPage()