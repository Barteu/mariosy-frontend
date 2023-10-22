export class CreateMariosPage{
    checkBackButton(){
        cy.get('#back-button').should('contain.text', 'BACK');
    }

    clickBackButton(){
        cy.get('#back-button').click();
    }

    setTitle(text: string){
        cy.get('[formcontrolname="title"]').type(text)
    }

    clickMariosType(index: number){
        cy.get('mat-chip-option').eq(index).find('> span > button').click()
    }

    setSearchedReceiver(text: string){
        cy.get('#receivers-form-filed').find('input').type(text)
    }

    clickReceiver(receiverName: string){
        cy.get('.cdk-overlay-container').find('> div > div > div > mat-option').contains(receiverName).click()
    }
 
    setComment(text: string){
        cy.get('[formControlName="comment"]').type(text)
    }

    clickSend() {
        cy.get('button').contains("SEND").click()
    }

    checkCategoryErrorMessage(errorMessage: string){
        cy.get('#category-row-container').find('.error-text-category').contains(errorMessage)
    }

    checkTitleErrorMessage(errorMessage: string){
        cy.get('#title-row-container').find('.error-text').contains(errorMessage)
    }

    checkCommentErrorMessage(errorMessage: string){
        cy.get('#comment-row-container').find('.error-text').contains(errorMessage)
    }

}


export const createMariosPage = new CreateMariosPage()