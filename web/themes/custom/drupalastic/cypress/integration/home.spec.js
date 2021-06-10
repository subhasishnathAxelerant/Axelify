describe('home', () => {
  it('vr', () => {
    cy.visit('/');
    cy.screenshots('Home');
  });
});
