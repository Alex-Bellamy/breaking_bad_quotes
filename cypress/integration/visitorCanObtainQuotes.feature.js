describe('Vistors can see quotes', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://www.breakingbadapi.com/api/quotes',
      response: "fixture:quotes.json",
    });
    cy.visit("/");
  });
  it("Visitors can see quote 1", () => {
    cy.get('#quote-1').within(() => {
      cy.get('#quote').should('contain', "I am not in danger, Skyler. I am the danger!")
      cy.get('#author').should('contain', "Walter White")
    })
  });

  it("Visitors can see quote 102", () => {
    cy.get('#quote-102').within(() => {
      cy.get('#quote').should('contain', "S'all good, man.")
      cy.get('#author').should('contain', "Jimmy McGill")
    });
  });
})