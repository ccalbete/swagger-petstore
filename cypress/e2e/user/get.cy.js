describe('Getting users', () => {
    it('Get a user by username successfully', () => {
     cy.getUserByUsername('user1').then((response) => {
      expect(response.status).to.eq(200);
  })
    })

    it('Get unexisting user by username', () => {
      //trying to get an user with username 1, which I know doesn't exists
      cy.getUserByUsername(1).then((response) => {
       expect(response.status).to.eq(404);
   })
     })
  })