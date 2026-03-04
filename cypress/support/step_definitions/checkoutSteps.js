import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../page_objects/CheckoutPage";
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