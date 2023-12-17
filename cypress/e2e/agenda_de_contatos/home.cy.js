/// <reference types="cypress" />

describe("Testes para a home", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });

    it("deve inserir 1 usuário", () => {
        cy.get("input[type='text'][placeholder='Nome']").type("Mahaw");
        cy.get("input[type='email'][placeholder='E-mail']").type("mahaw@gmail.com");
        cy.get("input[type='tel'][placeholder='Telefone']").type("11123456789");
        cy.get(".adicionar").click();
        cy.get(".sc-beqWaB.eQdhbg.contato").should("have.length", 1);
        cy.screenshot("usuario_inserido")
    });

    it("deve alterar 1 usuário", () => {
        cy.get(".edit").first().click();
        cy.get("input[type='text'][placeholder='Nome']").clear().type("Ronaldo");
        cy.get("input[type='email'][placeholder='E-mail']").clear().type("ronaldo@gmail.com");
        cy.get("input[type='tel'][placeholder='Telefone']").clear().type("11123456787");
        cy.get(".alterar").click();
        cy.wait(1000);
        cy.screenshot("usuario_alterado")
    });

    it("deve remover 1 usuário", () => {
        cy.get(".delete").first().click();
        cy.get(".sc-beqWaB.eQdhbg.contato").should("have.length", 0);
        cy.screenshot("usuario_apagado")
    });
});