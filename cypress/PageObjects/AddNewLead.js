class AddNewLead{

    addBtn = "a[data-controller='ajax-modal'][data-url='/crm/deals/new?deal_type=lead&result_type=card&status_id=60']"
    name = "input[placeholder='Name']"
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
    
   
    
    clickAddButton(){
        
        cy.get(this.addBtn).click()
    }

    fillForm(){

    
        cy.get(this.name).type('Lead 800').type("{enter}")

        cy.get(this.companyDropDown).click()
        cy.wait(2000)
        cy.get(this.name).scrollIntoView()
        cy.get(this.companyDropDownTxtField).type('VNC').wait(2000).type("{enter}")

        cy.get(this.partnerDropDown).click()
        cy.wait(2000)
        cy.get(this.partnerDropDownTxtField).type('Samsung').wait(3000).type("{enter}")

        cy.get(this.statusDropDown).click()
        cy.get(this.statusDropDownTxtfield).type('Converted').type("{enter}")

        cy.get(this.campaignsDropDown).click()
        cy.get(this.campaignsDropDownTxtfield).type('Campaign 3').type("{enter}")

        cy.get(this.priorityDropDown).click()
        cy.get(this.priorityDropDownTxtfield).type('Urgent').type("{enter}")
        
        cy.get(this.leadSourceDropDown).click()
        cy.wait(2000)
        cy.get(this.leadSourceDropDownTxtField).type('Trade Show').wait(2000).type("{enter}")

        cy.get(this.dealClassDropDown).click()
        cy.get(this.dealClassDropDownTxtfield).type('B').type("{enter}")

        cy.get(this.salesPersonDropDown).click().wait(2000)
        cy.get(this.salesPersonDropDownTxtField).type('adam young').type("{enter}{enter}")

        cy.get(this.projectDropDown).click()
        cy.get(this.projectDropDownTxtfield).type('CRM Testing').type("{enter}")


        cy.get(this.noOfUsers).type(2023)

        cy.get(this.descriptionTxtBox).type("This is my description")

        // cy.get(this.productsBtn).invoke('show').click()
        // cy.get(this.productsTxtField).type('Test product 3').type("{enter}")

        // cy.get(this.productsBtn).click()
        // cy.get(this.productsTxtField).type('Test product 7').type("{enter}")

        cy.get(this.attachmentBtn).scrollIntoView().should('be.visible').dblclick()
        //cy.get(this.saveBtn).click()


       

       

        

       
    }
    

}
export default AddNewLead 