describe('Security Testing', () => {
  it('Verify user creation without authentication fails', () => {
    // Send a request to create a user without authentication
    cy.request({
      method: 'POST',
      url: '/user',
      failOnStatusCode: false 
    }).then((response) => {
      // Expect the response status code to be 401 or 403
      expect(response.status).to.be.oneOf([401, 403]);
    });
  });
});