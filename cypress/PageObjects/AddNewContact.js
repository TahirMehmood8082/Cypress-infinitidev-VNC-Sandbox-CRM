class AddNewContact{

    mainActionBtn = ".project_menu.main-action-button.mdi.mdi-dots-horizontal.crm-floating-btn"
    addContactBtn = ".floating-buttons.i-icon-user"
    firstNameTxtFld = "input[name='crm_contact[first_name]']"
    middleNameTxtFld = "input[name='crm_contact[middle_name]']"
    lastNameTxtFld  = "input[name='crm_contact[last_name]']"
    jobTitleTxtFld = "input[name='crm_contact[job_title]']"
    companyTxtFld = "input[name='crm_contact[company]']"
    emailTxtFldFirst = "#crm_contact_emails_attributes_0_email"
    emailTypeDropDownFirst = "#crm_contact_emails_attributes_0_email_type"
    emailTxtFldDynamic = ""
    emailTypeDropDownDynamic = ""
    formNestedFields = "div.modal-body.new-contact-form > div:nth-child(5)"
    emailNestedItem = "div.modal-body.new-contact-form > div:nth-child(5) > div:nth-child(2)"
    
    /*
    `body > div:nth-child(453) > div:nth-child(1) > 
    div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > 
    div:nth-child(5)`
    */

    /*
    + `> div:nth-child(2) > div:nth-child(1)
    > div:nth-child(3) > div:nth-child(1)
    > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`
    */
    //"#crm_contact_emails_attributes_0_email"
    
    //emailTypeDropDown = this.formNestedFields 
    //"#crm_contact_emails_attributes_0_email_type"

     /*
    + `> div:nth-child(2) > div:nth-child(1)
    > div:nth-child(3) > div:nth-child(1)
    > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)`
    */

    addMoreEmailbtn = "#add-new[title='Add E-Mail']"
   
    
    clickMainActionBtn(){

        cy.get(this.mainActionBtn).click()
    }

    clickAddContactButton(){
        
        cy.get(this.addContactBtn).click()
    }


    fillAddContactForm(){

    //"abc" + Math.random().toString(5).substring(2).slice(0,10)
        cy.get(this.firstNameTxtFld).type("First: " + Math.random().toString(5).substring(2).slice(0,3))
        cy.get(this.middleNameTxtFld).type("Middle: " + Math.random().toString(5).substring(2).slice(0,3))
        cy.get(this.lastNameTxtFld).type("Last: " + Math.random().toString(5).substring(2).slice(0,3))

        cy.get(this.jobTitleTxtFld).type("Job: " + Math.random().toString(5).substring(2).slice(0,3))
        cy.get(this.companyTxtFld).type("Company: " + Math.random().toString(5).substring(2).slice(0,3))

        //cy.get(this.emailTxtFld).should('exist').should('be.visible').debug()
        //.should('be.visible')
        // cy.get(this.formNestedFields).then((el) => {
            
        //     cy.log(`email Html    : ${el[0].outerHTML}`)
            
        // })

        cy.log(`Form nested Fields: ${this.formNestedFields}`)

        cy.get(this.addMoreEmailbtn).click().click().click().click()

        cy.get(this.emailTxtFldFirst)
        .should('exist')
        .type("ABC: " + Math.random().toString(5).substring(2).slice(0,3)+"@gmail.com")
        cy.get(this.emailTypeDropDownFirst)
        .select('work')
        .should('have.value','work')

        

        var noOfRowNestedFields 

        cy.get(this.emailNestedItem) // Replace `this.emailNestedItem` with the correct selector for the parent element
        .children() // Get the nested row fields
        .then(($children) => {
            // Get the number of row nested fields
            noOfRowNestedFields = $children.length;

            // Now you can use the noOfRowNestedFields variable as needed
            cy.log(`No of row nested fields from then: ${noOfRowNestedFields}`);

            //expect(noOfRowNestedFields).to.be.greaterThan(0)
        })
        .then(()=>{

            var input = [3, 1, 1, 1, 2]
            var select = [3, 1, 2, 1, 2]

            var noOfDivs = input.length + 1

            cy.log(`no of divs to add: ${noOfDivs}`)
            cy.log(`no of Rows : ${noOfRowNestedFields}`)
            for (let i = 0; i < noOfRowNestedFields - 1; i++) {

                this.emailTxtFldDynamic = this.emailNestedItem
                this.emailTypeDropDownDynamic = this.emailNestedItem

                for (let j = 0; j < noOfDivs; j++) {

                    if (j == 0) {
                        this.emailTxtFldDynamic += `> div:nth-child(${i + 2})`

                        this.emailTypeDropDownDynamic += `> div:nth-child(${i + 2})`
                    }

                    this.emailTxtFldDynamic += `> div:nth-child(${input[i]})`

                    this.emailTypeDropDownDynamic += `> div:nth-child(${select[i]})`

                }

                cy.get(this.emailTxtFldDynamic).should('exist').type(`Dynamic index: ${i + 1}` + Math.random().toString(5).substring(2).slice(0, 3) + "@gmail.com")
                cy.get(this.emailTypeDropDownDynamic)
                    .select('work')
                    .should('have.value', 'work')



            }
        })
        
        

        // cy.log(`Email textField after loop  : ${this.emailTxtFld}`)
        // cy.log(`Email select drop-down after loop  : ${this.emailTypeDropDown}`)


        // cy.get(this.emailTxtFld).should('exist').type("ABC: " + Math.random().toString(5).substring(2).slice(0,3)+"@gmail.com")
        // cy.get(this.emailTypeDropDown)
        // .select('Work')
        // //.should('have.value','Demo AB')

        // cy.get(this.emailTypeDropDown)
        // .find('option:selected')
        // .should('have.text', 'Work')






















        /*
        cy.get(this.emailTxtFld).should('exist').type("abc" + Math.random().toString(5).substring(2).slice(0,3) +"@gmail.com")

        cy.get(this.emailTypeDropDown)
        .select('Other')

        cy.get(this.emailTypeDropDown)
        .find('option:selected')
        .should('have.text', 'Other')
        */

        
        
        // cy.get(this.developmentProjectDropDown)
        // .select('Demo AB')
        // //.should('have.value','Demo AB')

        // cy.get(this.developmentProjectDropDown)
        // .find('option:selected')
        // .should('have.text', 'Demo AB')

       
    }
    

}
export default AddNewContact 