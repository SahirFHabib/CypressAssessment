import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as loginPageElement from "../../page_object/loginPageElement";
import * as  loginPageData from "../../testData/login.json";

Given('I am on the Sauce Demo Login Page', () => {
  cy.visit(loginPageData.url);
});

When('I fill the account information for account StandardUser into the Username field and the Password field', () => {
  cy.get(loginPageElement.userName).type(loginPageData.stdUser);
  cy.get(loginPageElement.password).type(loginPageData.pwd);
});

When('I fill the account information for account LockedOutUser into the Username field and the Password field', () => {
  cy.get(loginPageElement.userName).type(loginPageData.lockedUser);
  cy.get(loginPageElement.password).type(loginPageData.pwd);
});

When('I click the Login Button', () => {
  cy.get(loginPageElement.loginButton).click();
});

Then('I am redirected to the Sauce Demo Main Page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I verify the App Logo exists', () => {
  cy.get(loginPageElement.appLogo).should('be.visible');
})

Then('I verify the Error Message contains the text {string}', (err) => {
  cy.get(loginPageElement.errorMessage).should('contain.text', err);
});
