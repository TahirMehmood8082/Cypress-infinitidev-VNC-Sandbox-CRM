describe("VNC Sandbox CRM", () =>{

    // using PageObjectModel with fixtures
    it.skip('LoginTest with valid Credentials', ()=>{
        //cy.loginVNCSandbox()
        cy.successLoginVNCSandbox()
    }) 

    it('LoginTest with invalid credentials', ()=>{
        cy.failureLoginVNCSandbox()
    }) 
})