describe('Cypress type issue', () => {
  it('types a string containing parenthesis into an input element', () => {
  	cy.visit('/');

  	const value = 'A string (with parenthesis)';

  	cy.get('input')
  	  .type(value)
  	  .should('have.value', value);
  });
});
