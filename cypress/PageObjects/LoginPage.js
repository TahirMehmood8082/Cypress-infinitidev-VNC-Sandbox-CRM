class Login{

    selector_username = "#username"
    selector_password = "#password"
    selector_login_btn = "input[value='Login']"
    users_dashboard = ".crm-menu.menu-pipelines.pipeline" //Pipeline
    
    selector_avatar_menu = ".avatar-menu"
    logout_btn = '.user-info-button > a'
    Invalid_login_credentials_error = ".error"
    selector_SignIn_btn = ".button-submit"
    login_Screen = "https://vncproject.sandbox.vnc.de/crm"

    setUserName(username){
        cy.get(this.selector_username).type(username)
    }

    setPassword(password){
        cy.get(this.selector_password).type(password)
    }

    clickLogin(){
        cy.get(this.selector_login_btn).click()
    }

    verifyLogin(){
        cy.get(this.users_dashboard).should('have.text', "Pipeline")
    }

    verifyFailedLogin(){
        cy.get(this.Invalid_login_credentials_error).contains("Either no user with the given username could be found, or the password")                             
    }

    logout(){
        cy.get(this.selector_avatar_menu).click()
        cy.wait(2000)
        cy.get(this.logout_btn).click()
        cy.wait(1000)
        cy.visit(this.login_Screen)
        cy.wait(10000)
    }
}

export default Login