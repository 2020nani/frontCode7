describe('Editando e deletando adminProfile', () => {
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



    it('Update profile Sucesso ( senha)', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type(' almeida');
        cy.get('#email').click();
        cy.get('#email').type('com');
        cy.get('#oldPassword').click();
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('{backspace}');
        cy.get('#oldPassword').type('123456');
        cy.get('#password').click();
        cy.get('#password').type('1234567');
        cy.get('#confirmPassword').click();
        cy.get('#confirmPassword').type('1234567');
        cy.get('button:nth-child(7)').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast-body').should('contain', 'Perfil atualizado com sucesso!');


    })

    /*it('Update profile Sucesso (email, nome)', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type(' almeida');
        cy.get('#email').click();
        cy.get('#email').type('com');
        cy.get('button:nth-child(7)').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast-body').should('contain', 'Perfil atualizado com sucesso!');


    })*/

    it('Update profile failed oldpassword incorreto', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.sc-bwzfXH').click();
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('#name').click();
        cy.get('#name').type('{backspace}');
        cy.get('#name').type('{backspace}');
        cy.get('#name').type('{backspace}');
        cy.get('#name').type('{backspace}');
        cy.get('#name').type('her');
        cy.get('#email').click();
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('{backspace}');
        cy.get('#email').type('her2gmail.com');
        cy.get('#oldPassword').click();
        cy.get('#oldPassword').type('123456');
        cy.get('#password').click();
        cy.get('#password').type('1234567');
        cy.get('#confirmPassword').click();
        cy.get('#confirmPassword').type('1234567');
        cy.get('button:nth-child(7)').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast-body')
            .should('contain', 'Erro ao atualizar Perfil')


    })

    it('Logout sucesso', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('button:nth-child(4)').click();
        cy.url().should('contain', '/')
    })

    it('Validando link HOME', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('a').click();
        cy.url().should('contain', '/home')

    })


    it('Admin deletado com sucesso', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.sc-htoDjs').click();
        cy.get('a').click();
        cy.get('button:nth-child(3)').click();
        cy.get('.Toastify__toast-body')
            .should('contain', 'Perfil deletado com sucesso!');
    })



})