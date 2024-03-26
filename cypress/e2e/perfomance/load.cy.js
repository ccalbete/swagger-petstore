describe('Load Testing', () => {
    beforeEach(() => {
        cy.fixture('pet.json').as('pet');
      });
    it('Simulate heavy load on pet creation API', () => {
      // Defining number of requests to do
      const numRequests = 100;
      
      // executing multiple post request
      for (let i = 0; i < numRequests; i++) {
        cy.get('@pet').then((pet) => {
            //using a reusable cypress command for readable test case, creating a pet and checking if the response is http 200
            cy.createAPet(pet).then((response) => {
              expect(response.status).to.eq(200);
            });
          });
      }
    });
  });