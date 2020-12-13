/// <reference types="cypress"/>

context('Compra', () => {
    it('Efetuar uma de produto', () => {
      cy.backgroundLogin()
      cy.pause
      //http://automationpractice.com/index.php 
      cy.visit('/') ;

      let nomeProduto = 'Faded Short Sleeve T-shirts';

      cy.contains(nomeProduto).trigger('mouseover')

      cy.contains(nomeProduto)
        .parent() //h5
        .siblings('div.button-container')
        .children('a')
        .first() // add to cart
        .click()

        cy.get(".button-container a[href$='controller=order']").click()

        cy.get(".cart_navigation a[href$='order&step=1']").click()

        // comentado pra fazer login via backgroud por cookies
        //cy.get('#email').type('semana-agilizei@mail.com')
        //cy.get('#passwd').type('12345')
        //cy.get('button#SubmitLogin').click()

        //cy.pause

        cy.get('button[name=processAddress]').click()

        cy.get('[type=checkbox]#cgv').check()

        cy.get('button[name=processCarrier]').click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation button[type=submit]')
          .find('span')
          .contains('I confirm my order')
          .click()

        cy.get('.cheque-indent strong')
          .should('contain.text', 'Your order on My Store is complete.')
        
        
        cy.get('div.box').invoke('text').then((text) => {
          //console.log(text)

          //console.log(text.match(/[A-Z][A-Z]+/g[1]))
          //0 -> RTP
          //1 -> Id do pedido
          // cria arquivo pra fazer regex achar apenas numero pedido
          cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z][A-Z]+/g[1]) }`})
        })

        cy.get(".cart_navigation a[href$='history']").click()

        // leitura arquivo
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
           
          cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
        })
    });
});