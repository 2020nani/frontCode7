describe('Cadastro', () => {
 
    it('Novo admin', () => {
        cy.visit('http://localhost:3000');
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type('hernani');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.url().should('not.contain', '/cadastro')

    });

    it('email de Administrador ja existe', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type('jio');
        cy.get('#email').click();
        cy.get('#email').type('jami@joseno.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast')
            .should('contain', 'Falha no cadastro verifique seus dados!');
    })

    it('campo nome nao preenchido retorna erro', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.get('#email').click();
        cy.get('#email').type('jr@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span')
            .should('contain', 'O nome é obrigatório');
    })

    it('campo email nao preenchido retorna erro', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type('hernani');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span')
            .should('contain', 'O e-mail é obrigatório');
    })

    it('campo senha nao preenchido retorna erro', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type('hernani');
        cy.get('#email').click();
        cy.get('#email').type('jr@hotmail.com');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span')
            .should('contain', 'A senha é obrigatória');
    })

    it('nenhum campo preenchido retorna erro', () => {
        cy.visit('http://localhost:3000');
        cy.get('a').click();
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span:nth-child(2)').click()
            .should('contain', 'O nome é obrigatório');
        cy.get('span:nth-child(4)').click()
            .should('contain', 'O e-mail é obrigatório');
        cy.get('span:nth-child(6)').click()
            .should('contain', 'A senha é obrigatória');

    })

    it('Validando Link ja tenho login', () => {
        cy.visit('http://localhost:3000/cadastro');
        cy.get('a').click();
        cy.url().should('not.contain', '/cadastro')

    })

    it('Admin deletado com sucesso', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('a:nth-child(3)').click();
        cy.get('button:nth-child(3)').click();
        cy.get('.Toastify__toast-body')
            .should('contain', 'Perfil deletado com sucesso!');
    })

})