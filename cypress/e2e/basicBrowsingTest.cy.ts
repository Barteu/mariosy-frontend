/// <reference types="cypress" />

import { homePage } from "../support/page_objects/homePage";
import { mariosDialogPage } from "../support/page_objects/mariosDialogPage";
import { receivedMariosesPage } from "cypress/support/page_objects/receivedMariosesPage";
import { sentMariosesPage } from "cypress/support/page_objects/sentMariosesPage";
import { getTextNthWord } from "../support/utils"

describe('Basic Marioses browsing tests', () => {

  beforeEach("Open home page", () => {
    cy.openHomePage();
    cy.wait(100);
  });

  it("Display last marios", () => {

    homePage.checkLastMariosLabel()
    homePage.checkLastMariosesCount(9)
 
    let lastMariosComment = homePage.checkAndGetLastMariosComment()
    let commentFirstWord = getTextNthWord(lastMariosComment,1)
    let mariosFirstUser = homePage.checkAndGetLastMariosUser()

    homePage.clickLastMariosTile()
    
    mariosDialogPage.checkCommentFirstWord(commentFirstWord)
    mariosDialogPage.checkFirstUser(mariosFirstUser)
  });

  
  it("Display received marioses", () => {
    let expectedReceivedMariosesCount = 15

    homePage.checkLastMariosLabel()
    homePage.checkReceivedMariosesCountGreaterThan(0)
    homePage.checkReceivedMariosesCount(expectedReceivedMariosesCount)
   
    homePage.clickReceivedMariosesCard()
    receivedMariosesPage.checkReceivedMariosLabel()
    receivedMariosesPage.checkBackButton()
    receivedMariosesPage.checkMariosesCountGreaterThan(0)
    receivedMariosesPage.checkReceivedMariosesCount(expectedReceivedMariosesCount)

    let lastMariosComment = receivedMariosesPage.checkAndGetLastMariosComment()
    let commentFirstWord = getTextNthWord(lastMariosComment,1)
    let mariosFirstUser = receivedMariosesPage.checkAndGetLastMariosUser()

    receivedMariosesPage.clickLastMariosTile()

    mariosDialogPage.checkCommentFirstWord(commentFirstWord)
    mariosDialogPage.checkFirstUser(mariosFirstUser)
    mariosDialogPage.clickCloseButton()

    receivedMariosesPage.clickBackButton()
    homePage.checkLastMariosLabel()
  })


  it("Display sent marioses", () => {
    let expectedSentMariosesCount = 10

    homePage.checkLastMariosLabel()
    homePage.checkSentMariosesCountGreaterThan(0)
    homePage.checkSentMariosesCountEqual(expectedSentMariosesCount)
   
    homePage.clickSentMariosesCard()
    sentMariosesPage.checkSentMariosLabel()
    sentMariosesPage.checkBackButton()
    sentMariosesPage.checkMariosesCountGreaterThan(0)
    sentMariosesPage.checkSentMariosesCount(expectedSentMariosesCount)

    let lastMariosComment = sentMariosesPage.checkAndGetLastMariosComment()
    let commentFirstWord = getTextNthWord(lastMariosComment,1)
    let mariosFirstUser = sentMariosesPage.checkAndGetLastMariosUser()

    sentMariosesPage.clickLastMariosTile()

    mariosDialogPage.checkCommentFirstWord(commentFirstWord)
    mariosDialogPage.checkFirstUser(mariosFirstUser)
    mariosDialogPage.clickCloseButton()

    sentMariosesPage.clickBackButton()
    homePage.checkLastMariosLabel()
  })

});
