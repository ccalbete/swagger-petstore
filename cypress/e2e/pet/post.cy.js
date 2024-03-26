describe('Pet creation', () => {
  //getting test data of a example pet provided by swagger and store in fixtures folder
  beforeEach(() => {
    cy.fixture('pet.json').as('pet');
  });

  it('Create a pet successfully', () => {
    //getting pet test data and saving it in pet variable
    cy.get('@pet').then((pet) => {
      //using a reusable cypress command for readable test case, creating a pet and checking if the response is http 200
      cy.createAPet(pet).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('Create a pet without body', () => {
    //attempting to test the 405 http status (invalid input) with an empty json but api response is 500
    cy.createAPet({}).then((response) => {
      expect(response.status).to.eq(405);
    });
  });

  it('Create 2 pets with same id', () => {
    cy.get('@pet').then((pet) => {
      cy.createAPet(pet).then((response) => {
        expect(response.status).to.eq(200);
      });

      // attempting to create 2 pets with same id and expecting to get an error (405) but system allows it
      cy.createAPet(pet).then((response) => {
        expect(response.status).to.eq(405);
      });
    });
  });
});
