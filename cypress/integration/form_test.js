describe("Testing our form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("adds texts to inputs and submits form", function () {
    cy.get('[data-cy="name"]').type("Emily").should("have.value", "Emily");
    cy.get('input[name="email"]')
      .type("email@email.com")
      .should("have.value", "email@email.com");
    cy.get("textarea")
      .type("I want to help people")
      .should("have.value", "I want to help people");
    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
    cy.get('[type="checkbox"]').check().should("be.checked");
    // cy.get('[data-cy="submit"]').click();
    cy.get("form").submit();
  });
});
