/// <reference types="cypress" />
import { mount } from '@cypress/react'
import Header from '../../components/header'
import { locators } from '../../locators/header.locator'


describe('<Header />', () => {

  it('renders link and go to home page', () => {
    mount(<Header/>)
    cy.findAllByTestId(locators.home).should('have.text', 'VIDEO APP');
  })

  it('renders link and go to Funzone page', () => {
    mount(<Header/>)
    cy.findAllByTestId(locators.funzone).should('have.text', 'Funzone');
  })

  it('renders link and go to Testimoniales page', () => {
    mount(<Header/>)
    cy.findAllByTestId(locators.testimoniales).should('have.text', 'Testimoniales');
  })

  it('renders mobile link and go to home page', () => {
    mount(<Header/>)
    cy.viewport('iphone-6')
    cy.findAllByTestId(locators.homeMobile).should('have.text', 'VIDEO APP');
  })

  it('renders mobile link and go to Funzone page', () => {
    mount(<Header/>)
    cy.viewport('iphone-6')
    cy.findAllByTestId(locators.funzoneMobile).should('have.text', 'Funzone');
  })

  it('renders mobile link and go to Testimoniales page', () => {
    mount(<Header/>)
    cy.viewport('iphone-6')
    cy.findAllByTestId(locators.testimonialesMobile).should('have.text', 'Testimoniales');
  })
})