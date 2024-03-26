describe('Endurance Testing', () => {
    beforeEach(() => {
      // Load the pet from the JSON file before each test case
      cy.fixture('pet.json').as('pet');
    });
  
    it('Maintain load on API for extended period', () => {
      // Define the duration of the test in milliseconds 
      const testDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      
      // Define the interval between requests 
      const requestInterval = 1000; // 1 second in milliseconds
      
      // Define the total number of requests to send during the test
      const totalRequests = testDuration / requestInterval;
      
      // Iterate to send multiple requests to the API at regular intervals
      for (let i = 0; i < totalRequests; i++) {
        // Access the pet fixture and update its name with a unique value
        cy.get('@pet').then((pet) => {
          pet.name = 'TestPet' + i;
          // Create a pet without validating the response
          cy.createAPet(pet);
        });
        // Wait for the specified interval before sending the next request
        cy.wait(requestInterval);
      }
    });
  });