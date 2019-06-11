/// <reference types="Cypress" />

describe('App UI test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })

  it('Should have proper title and root element', () => {
    cy.title().should('eq', 'Typescript React Google Map')
    cy.root().should('match', 'html')
  })

  it('Should dismiss Google Map alert modal if exist', () => {
    const googleAlertText = `This page can't load Google Maps correctly.`
    cy.contains(googleAlertText).then(element => {
      if (element) {
        cy.get('.dismissButton').click()
      }
      cy.get('.dismissButton').should('not.exist')
    })
  })

  it('Should render maps, slider and default markers', () => {
    const splytMarkerUrl = 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png'
    const taxiMarkerUrl = 'http://maps.google.com/mapfiles/kml/pal4/icon62.png'

    cy.get('[data-testid="range-slider-container"]').should('exist')
    // Ensure the map has at least one spotlight marker
    cy.get('[data-testid="map-container"]')
      .find('img')
      .filter(`[src="${splytMarkerUrl}"]`)
      .its('length')
      .should('be.gte', 1)

    // Ensure the map has at least 25 taxi marker
    cy.get('[data-testid="map-container"]')
      .find('img')
      .filter(`[src="${taxiMarkerUrl}"]`)
      .its('length')
      .should('be.gte', 25)
  })
})
