export class purchaseProduct{
    locator =require('../fixtures/Locator/insideStore.json');
    enterEmailAddress(){
        cy.get('a').contains('sign in ').click();
        cy.get(this.locator.emailAddress).type(data.emailAddress)
    }
   
}