/// <reference types="cypress" />
Cypress. on('uncaught:exception', (err, runnable) => { return false; });

describe('Some automation tests', () => {
  beforeEach(() => {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
    });
  it('Buttons section', () => {
    cy.get('#idExample').click().go('back');
    cy.get('.buttonClass').click().go('back');
    cy.contains('Button').click().go('back');
    //cy.url().should('eq', 'https://ultimateqa.com/link-success/') 
    cy.visit('https://ultimateqa.com/link-success/');
  })

  it('Radio buttons', () => {
    cy.get('.et_pb_blurb_6 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form');
    cy.get('[type="radio"]').check('male');
  });

  it('Checkboxes', () => {
    cy.get('.et_pb_blurb_7 > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > form');
    cy.get('[type="checkbox"]').check('Car');
  });

  it('Dropdown', () => {
    cy.get('select').select('Audi').should('have.value','audi');
    //cy.get('select').select('Audi').should('have.value', 'Audi');
  });

  it('Tabs', () => {
    cy.get('.et_pb_tab_1 > a').click();
    cy.get('.et_pb_tab_0 > a').click();
  });

  it('Advanced Controls', () => {
    cy.get('.et_pb_toggle_1');
    cy.get('.et_pb_toggle_1 > .et_pb_toggle_title').click();
    //cy.get('.et_pb_module et_pb_toggle et_pb_toggle_1 et_pb_toggle_item et_pb_toggle_open')
  });

  it('Common Scenarios', () => {
    cy.contains('Go to login page').click();
  });

  it('Highlight', () => {
    cy.get('.et_pb_column_9 > .et_pb_module > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header > span')
  .then($button => {
    $button.css('border', '1px solid blue')
  })
  });
})