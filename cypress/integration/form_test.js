describe("Form - testing our form inputs", function () {
  // this block will execute before first and before second test.
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // first test
  it("add text to inputs and submit form", function () {
    // we added 'data-cy' attributes to inputs inside of Form.js
    cy.get('[data-cy="name"]').type("Emily").should("have.value", "Emily");
    cy.get('[data-cy="email"]')
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
    cy.get("[data-cy=motivation]")
      .type("I want to help")
      .should("have.value", "I want to help");

    // uses id to find element, not recommended
    cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");

    // uses type attribute to find element. not recommended. will break if multiple checkboxes in form.
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.get("[data-cy=submit]").click();
  });

  // run a second test
  it("adds text to textarea", () => {
    cy.get("textarea").type("hey");
  });
});
