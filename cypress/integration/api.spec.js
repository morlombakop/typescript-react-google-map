/// <reference types="Cypress" />
import { random } from 'faker'

const baseUrl = 'http://localhost:5000/drivers'
describe.only('Drivers api tests', () => {
  beforeEach(() => {
    cy.request('http://localhost:5000/drivers?count=1')
  })
  
  it('Api returns proper response', () => {
    const count =  random.number({ min: 1, max: 50 })
    cy.request({ url: baseUrl, qs: { count } })
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers') 
        expect(isNaN(response.body.pickup_eta)).to.be.false
        expect(Array.isArray(response.body.drivers)).to.be.true
        expect(response.body.drivers).to.have.length(count)

        const driver = response.body.drivers[0]
        expect(!driver.driver_id).to.be.false
        expect(driver.location).to.be.an('object')
        expect(isNaN(driver.location.bearing)).to.be.false
        expect(isNaN(driver.location.latitude)).to.be.false
        expect(isNaN(driver.location.longitude)).to.be.false
    })
  })
})
