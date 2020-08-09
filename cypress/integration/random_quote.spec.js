describe('Random quote machine tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should contain main elements', () => {
    cy.get('#quote-box');
    cy.get('#quote-box #author');
    cy.get('#quote-box #text');
    cy.get('#new-quote');
    cy.get('#tweet-quote');
  });

  it('Should retrieve a different quote on button click', () => {
    cy.get('#text').then(($text) => {
      const initial_quote = $text.text();
      cy.get('.refresh-btn').click();
      cy.get('#text').should(($second_quote) => {
        expect($second_quote.text()).not.to.eq(initial_quote);
      });
    });
  });

  it('Should contain an anchor with correct href', () => {
    const expected_href = 'https://twitter.com/intent/tweet';

    cy.get('#tweet-quote').should('have.attr', 'href');
    cy.get('#tweet-quote').should(($tweetBtn) => {
      const href = $tweetBtn[0].href;

      expect(href).eq(expected_href);
    });
  });
});
