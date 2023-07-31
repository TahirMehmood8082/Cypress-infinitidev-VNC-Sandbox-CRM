import leadDetailPage from "../PageObjects/LeadDetailPage";
import editLead from "../PageObjects/EditLead";
import newActivity from "../PageObjects/NewActivity"

describe("Lead Detail Page suit", () => {

  beforeEach(()=>{
    cy.log("*****************   Launch App  ********************")
    cy.successLoginVNCSandbox()
    
  })

    it.skip('Edit Lead', () => {

      const objEdit = new editLead()
      objEdit.clickEditButton()

      

    });

    it('New Activity', () => {

      const objLeadDeatilPage = new leadDetailPage()
      objLeadDeatilPage.clickLeadTitle()
      objLeadDeatilPage.checkDetailPageTitle()
      
      cy.log("now towards new activity")
      const objNewAct = new newActivity
      objNewAct.clickNewActivityButton()

     
      

      // return new Promise((resolve, reject) => {
      //   objLeadDeatilPage.clickLeadTitle().wait(34000).addEventListener('click',function(e) {
      //     /// do something to process the answer
      //     console.log("after lead detail loads");
      //     const objNewAct = new newActivity
      //     objNewAct.clickNewActivityButton()
      //   }, {once: true});
      // });  
    })
     
});