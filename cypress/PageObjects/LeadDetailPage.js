class LeadDetailPage{

    leadTitle = "#crm_deal_75_card > .i-card-box > .i-card-head > .me-auto > a"
    //"section[id='crm_deal_75_card'] h2[class='me-auto'] a[target='_blank']"
    //#crm_deal_75_card > .i-card-box > .i-card-head > .me-auto > a
    //"section[id='crm_deal_75_card'] h2[class='me-auto']"
    //"#crm_deal_72_card > .i-card-box > .i-card-head > .me-auto > a"
    //#crm_deal_75_card > .i-card-box > .i-card-head > .me-auto > a
    leadSummaryLabel = "#crm_deal_75_summary > .p-4 > .d-flex > .row-collapse > h4"
    
    clickLeadTitle(){

        //.invoke('removeAttr', 'target')
       // cy.get(this.leadTitle)?.click()
        //cy.log(this.leadTitle)?.click() it requires dom element

        cy
        .get(this.leadTitle)
        .should('be.visible')
        .should('have.attr', 'target')
  
        cy
        .get(this.leadTitle)
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click()
        

        // cy.get(this.leadTitle)
        // .should('be.visible')
        // .click()

        // cy.get(this.leadTitle).then((link) => {
        //     // Remove the target attribute
        //     link[0].removeAttribute('target')
      
        //     // Click on the link
        //     cy.wrap(link).click()
        // })
       
        
    }

    checkDetailPageTitle(){
        
        cy.get(this.leadSummaryLabel)?.should('have.text', "Lead Summary")
    }

}
export default LeadDetailPage 