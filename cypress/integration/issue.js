describe('Cypress request', () => {
  it('gets both values', () => {
    const assertData = value => {
      cy.get('select').select(value);
      cy.wait('@data');
      cy.get('#renderedData').contains(`{"id":${value}}`);
    };

    cy.server();
    cy.route('/api/*').as('data');
    cy.visit('/');

    assertData('1');
    assertData('2');
  });
});
