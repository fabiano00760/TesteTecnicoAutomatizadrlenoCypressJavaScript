class CheckoutPage {
  elements = {
    btnCheckout: () => cy.get('[data-test="checkout"]'),
    campoNome: () => cy.get('[data-test="firstName"]'),
    campoSobrenome: () => cy.get('[data-test="lastName"]'),
    campoCEP: () => cy.get('[data-test="postalCode"]'),
    btnContinue: () => cy.get('[data-test="continue"]'),
    btnFinish: () => cy.get('[data-test="finish"]'),
    msgSucesso: () => cy.get('.complete-header')
  }


  preencherInformacoes(nome, sobrenome, cep) {
    this.elements.campoNome().type(nome);
    this.elements.campoSobrenome().type(sobrenome);
    this.elements.campoCEP().type(cep);
  }

  clicarContinuar() {
    this.elements.btnContinue().click();
  }

  clicarFinalizar() {
    this.elements.btnFinish().click();
  }
}

export default new CheckoutPage();