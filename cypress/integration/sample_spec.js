describe('My First Test', function() {
  it('Visits the contact us page', function() {
    cy.visit('http://localhost:3000/contact');
    cy.url().should('include', '/contact');
  });

  it('Fills out the form succesfully', function() {
    cy.visit('http://localhost:3000/contact');
    cy.get('#fullName')
      .type('Full name')
      .should('have.value', 'Full name');

    cy.get('#email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
