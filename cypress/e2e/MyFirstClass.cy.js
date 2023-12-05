describe ('Test Case, ex.: Login Function', ()=>{

  it('TC1 - Check page title - Positive', () =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
  
  })

  it('TC2 - Check page title - Negative', () =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM123')
  
  })

 })





