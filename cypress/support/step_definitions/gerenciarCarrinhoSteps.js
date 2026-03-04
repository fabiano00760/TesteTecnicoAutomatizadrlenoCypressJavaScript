import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CarrinhoPage from "../page_objects/CarrinhoPage";
import { After } from "@badeball/cypress-cucumber-preprocessor";

After(function (scenario) {
  // Checa se já tirou screenshot
  if (!this.screenshotTaken) {
    this.screenshotTaken = true; // marca como tirado

    const nomeCenario = scenario.pickle.name.replace(/ /g, "_");
    const nomeFeature = scenario.pickle.uri
      .split("/")
      .pop()
      .replace(".feature", "")
      .replace(/ /g, "_");

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const status = scenario.result?.status || "UNKNOWN"; // evita undefined

    const screenshotPath = `${nomeFeature}/CENARIO_${nomeCenario}_${status}_${timestamp}`;
    cy.screenshot(screenshotPath);
  }
});


Given("que eu esteja logado com o usuario {string} e senha {string}", (usuario, senha) => {
  cy.session([usuario, senha], () => {
    // 1. Visita a página inicial para garantir que o domínio está carregado
    cy.visit('https://www.saucedemo.com/'); 
    
    // 2. Realiza o login para criar a sessão
    cy.get('[data-test="username"]').type(usuario);
    cy.get('[data-test="password"]').type(senha);
    cy.get('[data-test="login-button"]').click();
    
    cy.url().should('include', '/inventory.html');
  });


  cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
  
  cy.get('.inventory_list').should('be.visible');
});

When("clico no botao {string} do produto {string}", (acao, nomeProduto) => {
  CarrinhoPage.clicarBotaoProduto(nomeProduto);
});

Then("devo visualizar o icone do carrinho com o valor {string}", (valor) => {
  CarrinhoPage.elements.badgeCarrinho().should('have.text', valor);
});

Given("que adicionei o produto {string} ao carrinho", (nomeProduto) => {
  CarrinhoPage.clicarBotaoProduto(nomeProduto);
});

Then("o icone do carrinho deve ficar vazio", () => {
  CarrinhoPage.elements.badgeCarrinho().should('not.exist');
});

When("adicionei os produtos {string} e {string} ao carrinho", (p1, p2) => {
  CarrinhoPage.clicarBotaoProduto(p1);
  CarrinhoPage.clicarBotaoProduto(p2);
});

When("clico no icone do carrinho", () => {
  CarrinhoPage.clicarNoCarrinho();
});

When("clico no btn Checkout", () => {
  CarrinhoPage.elements.btnCheckout().click();
});

When("preencho o campo Nome {string}", (nome) => {
  CarrinhoPage.elements.campoNome().type(nome);
});

When("preencho o campo Sobrenome {string}", (sobrenome) => {
  CarrinhoPage.elements.campoSobrenome().type(sobrenome);
});

When("preencho o campo CEP {string}", (cep) => {
  CarrinhoPage.elements.campoCEP().type(cep);
});

When("clico no btn Continue", () => {
  CarrinhoPage.elements.btnContinue().click();
});

Then("o campo Item total deve exibir o valor {string}", (valorEsperado) => {
  CarrinhoPage.elements.itemTotalLabel().should('contain.text', valorEsperado);
});