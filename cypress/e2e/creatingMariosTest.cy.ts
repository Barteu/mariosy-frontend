/// <reference types="cypress" />

import { homePage } from "../support/page_objects/homePage";
import { mariosDialogPage } from "../support/page_objects/mariosDialogPage";
import { sentMariosesPage } from "cypress/support/page_objects/sentMariosesPage";
import { createMariosPage } from "cypress/support/page_objects/createMariosPage";
import { getTextNthWord } from "../support/utils"

describe('Basic Marioses browsing tests', () => {

  beforeEach("Open home page", () => {
    cy.openHomePage();
    cy.wait(100);
  });

  it("Visit marios form and type incorect title", () => {
      homePage.checkLastMariosLabel()
      homePage.checkSentMariosesCountEqual(10)
      homePage.checkAddButton()
      homePage.clickAddButton()

      createMariosPage.checkBackButton()

      cy.fixture('uncorrectMariosLongTitle').then((marios) => {
        createMariosPage.setSearchedReceiver(marios.searchReceiverText)
        createMariosPage.clickReceiver(marios.receiverName)
        createMariosPage.clickMariosType(marios.type)
        createMariosPage.setTitle(marios.title)
        createMariosPage.setComment(marios.comment)
        createMariosPage.clickSend()

        createMariosPage.checkTitleErrorMessage('Title can not be longer than')
      })
      createMariosPage.clickBackButton()

      homePage.checkLastMariosLabel()
      homePage.checkAddButton()
      homePage.checkSentMariosesCountEqual(10)
  });


  it("Visit marios form and fill only receiver", () => {
    homePage.checkLastMariosLabel()
    homePage.checkSentMariosesCountEqual(10)
    homePage.checkAddButton()
    homePage.clickAddButton()

    createMariosPage.checkBackButton()

    cy.fixture('correctMarios').then((marios) => {
      createMariosPage.setSearchedReceiver(marios.searchReceiverText)
      createMariosPage.clickReceiver(marios.receiverName)
      createMariosPage.clickSend()

      createMariosPage.checkCategoryErrorMessage('Category is required')
      createMariosPage.checkTitleErrorMessage('Title is required')
      createMariosPage.checkCommentErrorMessage('Comment is required')

    })
    createMariosPage.clickBackButton()

    homePage.checkLastMariosLabel()
    homePage.checkAddButton()
    homePage.checkSentMariosesCountEqual(10)
});
 

it("Send marios form and display new marios", () => {
  let initialMariosesCount = 10

  homePage.checkLastMariosLabel()
  homePage.checkSentMariosesCountEqual(initialMariosesCount)
  homePage.checkAddButton()
  homePage.clickAddButton()

  createMariosPage.checkBackButton()

  cy.fixture('correctMarios').then((marios) => {
    createMariosPage.setSearchedReceiver(marios.searchReceiverText)
    createMariosPage.clickReceiver(marios.receiverName)
    createMariosPage.clickMariosType(marios.type)
    createMariosPage.setTitle(marios.title)
    createMariosPage.setComment(marios.comment)
    createMariosPage.clickSend()

    homePage.checkLastMariosUserContains(marios.receiverName)
    homePage.checkLastMariosCommentContains(marios.comment.slice(0,20))

    homePage.checkLastMariosLabel()
    homePage.checkAddButton()
    homePage.checkSentMariosesCountEqual(initialMariosesCount+1)

    homePage.clickSentMariosesCard()
    sentMariosesPage.checkSentMariosLabel()
    sentMariosesPage.checkBackButton()
    sentMariosesPage.checkMariosesCountGreaterThan(0)
    sentMariosesPage.checkSentMariosesCount(initialMariosesCount+1)

    let lastMariosComment = sentMariosesPage.checkAndGetLastMariosComment()
    let commentFirstWord = getTextNthWord(lastMariosComment,1)
    let mariosFirstUser = sentMariosesPage.checkAndGetLastMariosUser()

    sentMariosesPage.clickLastMariosTile()

    mariosDialogPage.checkCommentFirstWord(commentFirstWord)
    mariosDialogPage.checkFirstUser(mariosFirstUser)

    mariosDialogPage.checkCommentContains(marios.comment.slice(0,20))
    mariosDialogPage.checkUsersContains(marios.receiverName)
    mariosDialogPage.clickCloseButton()
  })
});

});