class NewActivity{

    newActivityBtn = ".ms-auto > a.i-action-btn:nth-child(2)"
    //"a.i-action-btn:nth-child(2)"
    //"[href='/issues/new?for_module=crm&issue%5Bdeal_id%5D=72&issue%5Bproject_id%5D=66']"
    //".i-action-btn[target='_blank']"
   
    
   
    
    clickNewActivityButton(){

        cy.log("inside New Activity Button")

        cy.get("/issues/new?for_module=crm&issue%5Bdeal_id%5D=75&issue%5Bproject_id%5D=66")
        .click()
        // cy
        // .get(this.newActivityBtn)
        // .should('have.attr', 'target')

        // cy
        // .get(this.newActivityBtn)
        // .should('have.attr', 'href')
  
        // cy.get(this.newActivityBtn).then((el) => {
        //     cy.log(`Active button text value : ${el.text()}`) // Output the element to Cypress log for debugging
        //     cy.log(`Active button text value : ${el[0].textContent}`)
        //     cy.log(`Active button URL        : ${el.get(0)}`)
        //     cy.log(`Active button element    : ${el[0].outerHTML}`)
        //     //cy.log(`El is                    : ${el}`)
        //     el.text()
            
        // })

        // cy.log(`button pass in get method: ${this.newActivityBtn}`)

        // cy.get(".ms-auto > a.i-action-btn:nth-child(2)")
            
        //     .then(($el) => {
        //         $el[0].removeAttribute('target'); 
        //         cy.log(`Active button element After removal   : ${$el[0].outerHTML}`)
        // })
        
        // cy
        // .get(".ms-auto > a.i-action-btn:nth-child(2)")
        // .click()

        // cy
        // .get(".ms-auto > a.i-action-btn:nth-child(2)")
        // .invoke('removeAttr', 'target')
        // .click()
        // .invoke('removeAttr', 'target')
        // .invoke('removeAttr', 'href')
        // .then(() => {
        //     // Now that the .invoke() operation is completed, click the button
        //     cy.get(this.newActivityBtn).click()
        // })
        

        //cy.get(this.newActivityBtn).click()
        
        // cy.get(this.newActivityBtn).should("be.visible").invoke('css', 'z-index', '1').then((link) => {
            
        //     if (link && link.attr('target')) {
        //         // Use vanilla JavaScript to remove the 'target' attribute
        //         cy.log(`Link is : ${link[0].textContent}`)
        //         cy.log("removing........")
        //             try{
        //                 link[0].removeAttribute('target')
        //             }catch(error){
        //                 link[0].click()
        //                 cy.log(`Exception from code: ${error}`)
        //             }
        //         } else {

        //             cy.log('Link with target="_blank" not found')

        //         }

        //         // if (link.length > 0) {
        //         //     // Remove the 'target' attribute using vanilla JavaScript
        //         //     cy.log(`Link is : ${link[0].textContent}`)
        //         //     link[0].removeAttribute('target').click()
        //         // } else {
        //         //     // Handle the case when the link is not found
        //         //     cy.log('Link with target="_blank" not found')
        //         // }

        //        // cy.wrap(link).click();
        //     });
            

            //cy.log(`target removed------${this.newActivityBtn}`)
            //cy.get(this.newActivityBtn)?.invoke('removeAttr', 'target').should('be.visible')
            //cy.get(this.newActivityBtn)?.click()


        

        
        

        
    }

    newActivityForm(){

        cy.log("inside New Activity Form")
        cy.wait(120012)

    //     cy.get(this.editBtn)?.should('be.visible')
    //     //cy.get(this.editBtn).click()
    //     cy.get(".d-flex.flex-column.flex-md-row.mb-3").contains("Edit").click()
    //     cy.wait(9000)
    //    cy.log("inside edit form")
    //     cy.get(this.name).type('Lead 500').type("{enter}")

    //     cy.get(this.companyDropDown).click()
    //     cy.wait(2000)
    //     cy.get(this.name).scrollIntoView()
    //     cy.get(this.companyDropDownTxtField).type('cpmany').wait(2000).type("{enter}")

       
    }
    

}
export default NewActivity 