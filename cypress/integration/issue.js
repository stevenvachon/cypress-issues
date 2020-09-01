describe('Cypress visits', () => {
  it('completes all route changes', () => {
    cy.visit('/1.html');
    cy.visit('/2.html');
    cy.visit('/3.html');
    cy.visit('/2.html');
    cy.visit('/3.html');
    cy.visit('/2.html');
    cy.visit('/4.html');
  });
});
