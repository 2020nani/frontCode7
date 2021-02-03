describe('dividas clientes', () => {
    it('Option cliente nao estar vazio', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('select')
            .select('Leanne Graham').should('have.value', '1')

    });

    it('Nao salva campo vazio', () => {
        cy.visit('http://localhost:3000/');
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('input:nth-child(4)').click();
        cy.get('.sc-htoDjs > button:nth-child(1)').click();
        cy.get('.formulario').submit();

    })


})