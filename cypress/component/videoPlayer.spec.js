/// <reference types="cypress" />
import { mount } from '@cypress/react'
import VideoPlayer from '../../components/VideoPlayer'
import { locators } from '../../locators/videoPlayer.locator';

const url = 'testUrl.com';

describe('<VideoPlayer />', () => {

  it('renders video has url', () => {
    mount(<VideoPlayer url={url}/>)
    cy.findAllByTestId(locators.player).click();
    cy.get('video').should('have.attr', 'src').should('include', url);
  })

})