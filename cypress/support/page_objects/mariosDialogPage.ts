export class MariosDialogPage{
    
    checkCommentFirstWord(commentFirstWord: Cypress.Chainable<JQuery<HTMLElement>>){
        commentFirstWord.then((text) => {
            cy.get('#marios-dialog').find('#comment-text').should('contain.text', text)
        })
    }

    checkFirstUser(firstUser: Cypress.Chainable<JQuery<HTMLElement>>){
        firstUser.then((text) => {
            cy.get('#marios-dialog').find('#from-text').should('contain.text', text.trim().replace('...',''))
        })
    }

    clickCloseButton(){
        cy.get('#marios-dialog').find('#close-dialog-button').click()
    }

    checkCommentContains(text: string){
        cy.get('#marios-dialog').find('#comment-text').should('contain.text', text)
     }

    checkUsersContains(text: string){
        cy.get('#marios-dialog').find('#from-text').should('contain.text', text)     
    }

}

export const mariosDialogPage = new MariosDialogPage()