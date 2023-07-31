import addContact from "../PageObjects/AddNewContact";
describe("Add New Contact suit", () => {

    it('Add New Contact test', () => {
  
      cy.successLoginVNCSandbox()

      const obj = new addContact()
      obj.clickMainActionBtn()
      obj.clickAddContactButton()
      obj.fillAddContactForm()
  
    });
     
  });