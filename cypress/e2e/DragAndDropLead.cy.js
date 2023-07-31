require("@4tw/cypress-drag-drop")

describe("Drag and Drop Lead", () => {

  it('Drag Lead from new to active', () => {

    cy.successLoginVNCSandbox()
    cy.get("#crm_deal_69_card")
    .drag(".i-cards-block.lead-column.crm-column.ui-sortable[data-column='61']");

  });
   
});