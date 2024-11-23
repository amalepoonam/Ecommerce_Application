
import createAccountPage from './createAccount';

class signInPage{
    user=require('../fixtures/userData.json')
    clickToSignInLink(){
        cy.get(".panel.header a[href*='/account/login']").click();
    }

    // generateUniqueEmail() {
    //     const timestamp = Date.now(); // Generate a unique timestamp
    //     const randomPart = Math.random().toString(36).substring(2, 7); // Generate a random string
    //     return `poonam${timestamp}_${randomPart}@example.com`; // Construct a unique email address
    //   }
     
    enterUserEmailId(uniqueEmailId) {
        //  const uniqueEmailId=this.generateUniqueEmail()
       cy.get("#email").type(uniqueEmailId);
      
     }

    enterUserPassword() {
        cy.get("#pass[title]").type(this.user.userPwd);
    }
    
    clickSignInBtn() {
        cy.contains('button','Sign In').click();
        }


    }
export default signInPage


