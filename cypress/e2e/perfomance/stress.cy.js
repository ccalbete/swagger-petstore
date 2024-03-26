describe('Stress Testing', () => {
    beforeEach(() => {
      // Load the pet from the JSON file before each test case
      cy.fixture('pet.json').as('pet');
    });
  
    it('Gradually increase load on API', () => {
      // Define the maximum number of requests to send
      const maxRequests = 1000;
      
      // Iterate to send multiple requests to the API
      for (let i = 0; i < maxRequests; i += 100) {
        // Perform a series of pet creation requests to the API
        for (let j = 0; j < 100; j++) {
          // Access the pet fixture and update its name with a unique value
          cy.get('@pet').then((pet) => {
            pet.name = 'TestPet' + (i + j);
            // Create a pet and validate the response
            cy.createAPet(pet).then((response) => {
              expect(response.status).to.eq(200);
            });
          });
        }
        // Wait for a brief period of time before sending more requests
        cy.wait(1000);
      }
    });
  });