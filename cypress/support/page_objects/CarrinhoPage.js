class CarrinhoPage {
  elements = {
    iconeCarrinho: () => cy.get('.shopping_cart_link'),
    badgeCarrinho: () => cy.get('.shopping_cart_badge'),
    btnCheckout: () => cy.get('[data-test="checkout"]'),
    campoNome: () => cy.get('[data-test="firstName"]'),
    campoSobrenome: () => cy.get('[data-test="lastName"]'),
    campoCEP: () => cy.get('[data-test="postalCode"]'),
    btnContinue: () => cy.get('[data-test="continue"]'),
    itemTotalLabel: () => cy.get('.summary_subtotal_label'),
    
    // Função para pegar o botão de um produto específico pelo nome
    btnProduto: (nomeProduto) => 
      cy.contains('.inventory_item', nomeProduto).find('button')
  }

  clicarBotaoProduto(nomeProduto) {
    this.elements.btnProduto(nomeProduto).click();
  }

  clicarNoCarrinho() {
    this.elements.iconeCarrinho().click();
  }

  preencherDadosCheckout(nome, sobrenome, cep) {
    this.elements.campoNome().type(nome);
    this.elements.campoSobrenome().type(sobrenome);
    this.elements.campoCEP().type(cep);
  }
}

export default new CarrinhoPage();