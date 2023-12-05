

describe('Login', () =>{ 

    beforeEach (()=>{

        //Visit the page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    
  it('Valid Login', () => {

    //Fill in the username field with a valid username
    cy.get("input[placeholder='Username']").type('Admin')

    //Fill in the Password field
    cy.get("input[placeholder='Password']").type('admin123')

    //Click the submit button
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()

    
})

  it('Invalid Password', () =>{

     //Fill in the username field with a valid username
     cy.get("input[placeholder='Username']").type('Admin')

     //Fill in the Password field
     cy.get("input[placeholder='Password']").type('123admin')
 
     //Click the submit button
     cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()

     //Check if the message error appears
     cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('exist' , 'Invalid credential')

  })

})