describe('dadosPessoa', () => {
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

    it('Cadastro pessoa com Sucesso', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('#firstname').click();
        cy.get('#firstname').type('teste');
        cy.get('#lastname').click();
        cy.get('#lastname').type('teste');
        cy.get('#participation').click();
        cy.get('#participation').type('50');
        cy.get('[data-testid=form]').submit();
        cy.url().should('contain', '/home')
    })
    it('Erro validacao campos', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('button:nth-child(4)').click();
        cy.get('[data-testid=form]').submit();
        cy.get('[data-testid="form"] > span:nth-child(2)')
            .should('contain', 'firstname is a required field');
        cy.get('span:nth-child(4)')
            .should('contain', 'lastname is a required field');
        cy.get('span:nth-child(6)')
            .should('contain',
                'participation must be a `number` type, but the final value was: `NaN` (cast from the value `""`).');

    })

    it('Erro campo participation nao recebe letras', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('#firstname').click();
        cy.get('#firstname').type('nani');
        cy.get('#lastname').click();
        cy.get('#lastname').type('almeida');
        cy.get('#participation').click();
        cy.get('#participation').type('y');
       // cy.get('button:nth-child(4)').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span:nth-child(4)')
            .should('contain',
                'participation must be a `number` type, but the final value was: `NaN` (cast from the value `"y"`).'
            );

    })

    it('erro campo participation(valor inserido tem que ser menor 100%)', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('#firstname').click();
        cy.get('#firstname').type('teste');
        cy.get('#lastname').click();
        cy.get('#lastname').type('teste');
        cy.get('#participation').click();
        cy.get('#participation').type('101');
        cy.get('[data-testid=form]').submit();
        cy.get('span:nth-child(4)')
            .should('contain', 'valor maximo e 100')

    })

    it('erro campo participation(valor dividido entre os usuarios nao pode ultrapassar a 100%)', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('#firstname').click();
        cy.get('#firstname').type('teste');
        cy.get('#lastname').click();
        cy.get('#lastname').type('teste');
        cy.get('#participation').click();
        cy.get('#participation').type('51');
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast-body')
            .should('contain', 'porcentagem acima dos 100% permitido')

    })

    it('Atualizar dados pessoa ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('tr:nth-child(3) > td > button > svg').click();
        cy.get('.sc-htoDjs #firstname').click();
        cy.get('.sc-htoDjs #firstname').type('junao');
        cy.get('.sc-htoDjs #lastname').click();
        cy.get('.sc-htoDjs #lastname').type('almeida');
        cy.get('.sc-htoDjs #participation').click();
        cy.get('.sc-htoDjs #participation').click();
        cy.get('.sc-htoDjs #participation').type('15');
        cy.get('.sc-htoDjs button').click();
        cy.url().should('contain', '/modalupdate')

    })

    it('Cancela Atualizar dados pessoa', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('tr:nth-child(3) > td > button > svg').click();
        cy.get('a:nth-child(5)').click();
        cy.url().should('contain', '/modalupdatecancel')

    })


    it('Deleta pessoa e dados por id', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr8@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('tr:nth-child(2) #remover path').click();
        cy.url().should('contain', '/modaldelete')

    })

    it('Validando Link criar conta', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.url().should('contain', '/cadastro')

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