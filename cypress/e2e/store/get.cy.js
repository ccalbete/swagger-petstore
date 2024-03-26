describe('Getting stores information', () => {
    it('Get inventory by status', () => {
        cy.getStoreInventory().then((response) => {
            expect(response.status).to.eq(200);
            //checking if the response includes quantity for inventories approved, placed and delivered
            expect(response.body).to.have.all.keys('approved', 'placed', 'delivered');
        })
    })

    it('Get an order successfully', () => {
        //using the cypress custom command for getting the order with id 1
        cy.getOrderById(1).then((response) => {
            //checking receiving http 200 since I know order with id 1 exists
            expect(response.status).to.eq(200);
        })
    })
    it('Get unexisting order', () => {
        // trying to get the order with id 10, which I know doesn't exists
        cy.getOrderById(10).then((response) => {
            //checking if the response was order not found
            expect(response.status).to.eq(404);
        })
    })

    it('Get invalid order id', () => {
        //trying to get an unexisting order with the id 'invalid'
        cy.getOrderById('invalid').then((response) => {
            //checking if response is 400
            expect(response.status).to.eq(400);
        })
    })
  })