/// <reference types="cypress" />

export function getTextNthWord(element: Cypress.Chainable<JQuery<HTMLElement>>, n: number): Cypress.Chainable<JQuery<HTMLElement>>{
    element.then((text) => {
      return text.split(' ')[n-1]}).as('textFirstWord')
    return cy.get('@textFirstWord')
}