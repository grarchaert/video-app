/// <reference types="cypress" />
import { mount } from '@cypress/react'
import VideoCard from '../../components/VideoCard'
import { locators } from '../../locators/videoCard.locator'

const video =  {
    id: 1,
    name: 'Test name 1',
    poster: 'poster.png'
}


describe('<VideoCard />', () => {

  it('renders video url link', () => {
    mount(<VideoCard video={video}/>)
    cy.get('article > div').should('have.attr', 'href').should('include', `/video/${video.id}`)
  })

  it('renders video name', () => {
    mount(<VideoCard video={video}/>)
    cy.findAllByTestId(locators.name).should('have.text', video.name)
  })

  it('renders video poster', () => {
    mount(<VideoCard video={video}/>)
    cy.findAllByTestId(locators.poster).should('have.attr', 'src').should('include','poster')
  })
})