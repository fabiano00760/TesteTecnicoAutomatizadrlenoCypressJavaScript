import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../page_objects/CheckoutPage";

let dados;

Before(() => {
  cy.fixture("loginData.json").then((data) => {
    dados = data;
  });
});

Given("que eu tenha um produto no carrinho", () => {
  cy.contains('.inventory_item', 'Sauce Labs Backpack')
    .find('button')
    .click();
});


When("clico no btn Finish", () => {
  CheckoutPage.clicarFinalizar();
});

Then("devo visualizar a mensagem de finalizacao {string}", (mensagem) => {
  const mensagemFinal =
    dados.checkout.sucesso === mensagem
      ? dados.checkout.sucesso
      : mensagem;

  CheckoutPage.elements.msgSucesso()
    .should("be.visible")
    .and("have.text", mensagemFinal);
});