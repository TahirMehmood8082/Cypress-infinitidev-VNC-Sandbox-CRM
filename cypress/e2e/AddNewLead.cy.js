import addLead from "../PageObjects/AddNewLead";
describe("Add New Lead", () => {

    it('Add New Lead', () => {
  
      cy.successLoginVNCSandbox()

      const obj = new addLead()
      obj.clickAddButton()
      obj.fillForm()
  
    });
     
  });