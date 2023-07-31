import addProduct from "../PageObjects/AddNewProduct";
describe("Add New Product", () => {

    it('Add New Product', () => {
  
      cy.successLoginVNCSandbox()

      const obj = new addProduct()
      obj.clickTopSubMenuBtn()
      obj.clickConfigurationTabButton()
      obj.clickProducts()
      //obj.clickClosePopUp()
      obj.clickNewProduct()
      //obj.clickClosePopUp()
      obj.fillNewProductForm()
  
    });
     
  });