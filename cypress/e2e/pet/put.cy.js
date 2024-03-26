describe('Pet modification', () => {
  beforeEach(() => {
    cy.fixture('pet.json').as('pet');
  });

    it('Modify a pet successfully', () => {
      cy.get('@pet').then((pet) => {
        //getting the example pet from fixtures file and changing the status attribute to unavailable
       pet.status = 'unavailable'
       //sending the updated pet test data to the custom cypress command updateAPet to change the status for the pet
       cy.updateAPet(pet).then((response) => {
         //checking if the status was correctly updated
        expect(response.body.status).to.eq('unavailable');
      });
      });
    })

    it('Modify unexisting pet', () => {
      cy.get('@pet').then((pet) => {
        // modifying the pet id from the example pet test data to get the pet not found error with an unexisting pet id
       pet.id = 1333330
       pet.status = 'unavailable'
       cy.updateAPet(pet).then((response) => {
        expect(response.status).to.eq(404);
      });
      });
    })

    it('Modify a pet getting a validation exception', () => {
     //there is not enough data in the swagger documentation to know how to get the 405 error
    })
  })