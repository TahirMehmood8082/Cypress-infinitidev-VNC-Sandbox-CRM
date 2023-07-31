class EditLead{

    editBtn = ".i-action-btn[data-controller='ajax-modal']" 
    //".flex-column > .ms-auto > [data-controller='ajax-modal']"
    //"section[id='crm_deal_72_card'] h2[class='me-auto'] a[target='_blank']"
    name = ":nth-child(7) > .form-control"
    //".flex-column > .ms-auto > [data-controller='ajax-modal']"
    //"input[placeholder='Name']"
    companyDropDown = ":nth-child(7) > :nth-child(1) > .form-outline > .select2 > :nth-child(1)"
    //:nth-child(10) > :nth-child(1) > .form-outline > .select2 > :nth-child(1)"
    //body > div:nth-child(253) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1)
    //cy.get('#select2-crm_dealcompany_id-fl-container')
    //"#select2-crm_dealcompany_id-4t-container"
    companyDropDownTxtField = "span[class='select2-search select2-search--dropdown'] input[role='textbox']"
    partnerDropDown = ":nth-child(7) > :nth-child(2) > .form-outline > .select2 > .selection > .select2-selection"
    //.select2-selection.select2-selection--single[aria-haspopup='true'][aria-expanded='true']"
    partnerDropDownTxtField = ".select2-dropdown > .select2-search > .select2-search__field"
    //span[class='select2-search select2-search--dropdown'] input[role='textbox']
    //span[class='select2-search select2-search--dropdown'] input[role='textbox']
    statusDropDown = "#select2-new_crm_deal_status-container"
    statusDropDownTxtfield = "span[class='select2-search select2-search--dropdown'] input[role='textbox']"
    campaignsDropDown = "#select2-new_crm_deal_campaign-container"
    campaignsDropDownTxtfield = ".select2-dropdown > .select2-search > .select2-search__field"
    priorityDropDown = "#select2-new_crm_deal_priority-container"
    priorityDropDownTxtfield = ".select2-dropdown > .select2-search > .select2-search__field"
    leadSourceDropDown = "#select2-new_crm_deal_lead_source-container"
    leadSourceDropDownTxtField = ".select2-dropdown > .select2-search > .select2-search__field"
    //.select2-dropdown > .select2-search > .select2-search__field"
    dealClassDropDown = "#select2-new_crm_deal_class-container"
    dealClassDropDownTxtfield = ".select2-dropdown > .select2-search > .select2-search__field"
    salesPersonDropDown = ":nth-child(10) > :nth-child(2) > .form-outline > .select2 > .selection > .select2-selection"
    //:nth-child(9) > :nth-child(1) > .form-outline > .select2 > .selection > .select2-selection"
    //.select2-selection select2-selection--single   
    //#select2-select-sale-person-container
    //span[class='select2-search select2-search--dropdown'] input[role='textbox']
    salesPersonDropDownTxtField = ".select2-dropdown > .select2-search > .select2-search__field"
    //"span[class='select2-search select2-search--dropdown'] input[role='textbox']"
    projectDropDown = "#select2-project_crm_deal-container"
    projectDropDownTxtfield = "span[class='select2-search select2-search--dropdown'] input[role='textbox']"
   
    noOfUsers = "input[name='crm_deal[users_count]']"

    descriptionTxtBox = ".jstEditor > :nth-child(1)"

   //productsBtn = "span[class='select2 select2-container select2-container--default select2-container--focus'] li[class='select2-search select2-search--inline']"
    //.select2-dropdown > .select2-search > .select2-search__field
    //".select2-dropdown > .select2-search > .select2-search__field"
    //".select2-dropdown > .select2-search > .select2-search__field"
    //".select2-dropdown > .select2-search > .select2-search__field"
    //"#modal-body > div > form > div:nth-child(14) > span > span.selection > span > ul > li.select2-search.select2-search--inline"
    //".select2-selection__rendered > :nth-child(1)"
   //productsTxtField = "span[aria-expanded='true'] li[class='select2-search select2-search--inline']"
    //".select2-dropdown > .select2-search > .select2-search__field"
    //".select2-dropdown > .select2-search > .select2-search__field"
    //"span[class='select2-search select2-search--dropdown'] input[role='textbox'][class='select2-search__field']"
    
    attachmentBtn  = ".file_selector"
    //"input[name='attachments[dummy][file]']"
    saveBtn = ".btn-standard"
    //"input[class='btn-standard fill-blue']"
    
   
    
    clickEditButton(){

        //.invoke('removeAttr','target')
        // cy.get(this.leadTitleBtn).scrollIntoView().wait(1000).then(($element) => {
        //     $element[0].removeAttribute('target');
        // }).click()
        // cy.screenshot()
        // cy.screenshot()
        this.editForm()
        //cy.wait(15000)
        // if(cy.get(this.editBtn)){
            
        //     cy.get(this.editBtn)?.should('be.visible').wait(2000).click().then(() => {
        //         this.editForm()
        //     });
        // }
        //cy.visit('about:blank')
        
    }

    editForm(){

        cy.get(this.editBtn)?.should('be.visible')
        //cy.get(this.editBtn).click()
        cy.get(".d-flex.flex-column.flex-md-row.mb-3").contains("Edit").click()
        cy.wait(9000)
       cy.log("inside edit form")
        cy.get(this.name).type('Lead 500').type("{enter}")

        cy.get(this.companyDropDown).click()
        cy.wait(2000)
        cy.get(this.name).scrollIntoView()
        cy.get(this.companyDropDownTxtField).type('cpmany').wait(2000).type("{enter}")

        cy.get(this.partnerDropDown).click()
        cy.wait(2000)
        cy.get(this.partnerDropDownTxtField).type('Tv2U').wait(3000).type("{enter}")

        cy.get(this.statusDropDown).click()
        cy.get(this.statusDropDownTxtfield).type('Lost').type("{enter}")

        cy.get(this.campaignsDropDown).click()
        cy.get(this.campaignsDropDownTxtfield).type('Campaign 2').type("{enter}")

        cy.get(this.priorityDropDown).click()
        cy.get(this.priorityDropDownTxtfield).type('High').type("{enter}")
        
        cy.get(this.leadSourceDropDown).click()
        cy.wait(2000)
        cy.get(this.leadSourceDropDownTxtField).type('Web').wait(2000).type("{enter}")

        cy.get(this.dealClassDropDown).click()
        cy.get(this.dealClassDropDownTxtfield).type('C').type("{enter}")

        cy.get(this.salesPersonDropDown).click().wait(2000)
        cy.get(this.salesPersonDropDownTxtField).type('Ramiz Raja').type("{enter}{enter}")

        cy.get(this.projectDropDown).click()
        cy.get(this.projectDropDownTxtfield).type('Testing').type("{enter}")


        cy.get(this.noOfUsers).type(2023)

        cy.get(this.descriptionTxtBox).type("This is Edited description")

        // cy.get(this.productsBtn).invoke('show').click()
        // cy.get(this.productsTxtField).type('Test product 3').type("{enter}")

        // cy.get(this.productsBtn).click()
        // cy.get(this.productsTxtField).type('Test product 7').type("{enter}")

        cy.get(this.attachmentBtn).scrollIntoView().should('be.visible').dblclick()
        cy.get(this.saveBtn).click()


       

       

        

       
    }
    

}
export default EditLead 