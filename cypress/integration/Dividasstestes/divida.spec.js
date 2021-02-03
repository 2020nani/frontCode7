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

    it.only('Tem que Salvar objeto dividas', () => {
        cy.visit('http://localhost:3000/home');
        cy.get('#email').click();
        cy.get('#email').type('nani@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('select').select('1')
        cy.get('input:nth-child(4)').click();
        cy.get('input:nth-child(4)').type('cartao');
        cy.get('input:nth-child(6)').click();
        cy.get('input:nth-child(6)').type('900.00');
        cy.get('input:nth-child(8)').click();
        cy.get('input:nth-child(8)').type('11/10/1987');
        cy.get('.sc-htoDjs > button:nth-child(1)').click();
        cy.get('.formulario').submit();
        cy.url().should('contains', 'http://localhost:3000/index.js');
        
    
        
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