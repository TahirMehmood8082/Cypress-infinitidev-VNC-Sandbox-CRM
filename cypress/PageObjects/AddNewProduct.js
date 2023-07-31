import 'cypress-iframe'
class AddNewProduct{

    configurationTabBtn = "#top-sub-menu > :nth-child(3) > .crm-menu"
    topSubMenuBtn = "#top-sub-menu-btn"
    products = ".crm-admin-menu.menu-crm-products.products"
    closePopUp = ".ui-dialog-titlebar-close"
    newProduct = ".icon.icon-add"
    nameTxtFld = "#product_name"
    developmentProjectDropDown = "#product_development_project_id"
    iframeDiscriptionBox = "#mce_0_ifr"
    //"#tinymce > p:nth-child(1)"
    //"#mce_0_ifr"
    //'[data-layer="Content"]'
    //"#mceu_40"
    createProductBtn = "input[value='Create']"
    
    clickTopSubMenuBtn(){

        cy.get(this.topSubMenuBtn).click()
    }

    clickConfigurationTabButton(){
        
        cy.get(this.configurationTabBtn).click()
    }

    clickProducts(){
        
        cy.get(this.products).click()
    }

    clickClosePopUp(){
        
        cy.get(this.closePopUp).click()
    }

    clickNewProduct(){

        cy.get(this.newProduct).click()
    }

    fillNewProductForm(){

    //"Vehicle number: " + Math.random().toString(5).substring(2)
        cy.get(this.nameTxtFld).type("Vehicle number: " + Math.random().toString(5).substring(2))

        cy.get(this.developmentProjectDropDown)
        .select('Demo AB')
        //.should('have.value','Demo AB')

        cy.get(this.developmentProjectDropDown)
        .find('option:selected')
        .should('have.text', 'Demo AB')

        // cy.get(this.developmentProjectDropDown).invoke('text').then((allText) => {
        //     // 'selectedText' contains the text of the currently selected option
        //     cy.log(`Dropdown option All Text: ${allText}`)
        // })

        
        //cy.iframe('#myIframe').invoke('text', 'Its VNC Description box')

       cy.iframe(this.iframeDiscriptionBox)
        .find('p') // Find the <p> element inside the iframe
        .type('Its VNC company' + Math.random().toString(35).substring(200))

        cy.iframe(this.iframeDiscriptionBox)
        .find('p') // Find the <p> element inside the iframe
        .should('have.text','Its VNC company')

        // cy.get(this.iframeDiscriptionBox)
        // .contains('p')
        // .type('Its VNC Description box').wait(2000)
        cy.get(this.createProductBtn).click()
    }
    

}
export default AddNewProduct 