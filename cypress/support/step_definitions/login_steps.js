import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";
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

before(() => {
  cy.fixture("loginData").then((data) => {
    dados = data;
  });
});

Given("que esteja na pagina home {string}", (url) => {
  LoginPage.acessarPagina(url);
});

When("preencho o campo Usuario {string}", (tipoUsuario) => {
  if (dados[tipoUsuario]) {
    LoginPage.preencherUsuario(dados[tipoUsuario].usuario);
  } else {
    LoginPage.preencherUsuario(tipoUsuario);
  }
});

When("preencho o campo Senha {string}", (tipoUsuario) => {
  if (dados[tipoUsuario]) {
    LoginPage.preencherSenha(dados[tipoUsuario].senha);
  } else {
    LoginPage.preencherSenha(tipoUsuario);
  }
});

When("clico no btn Entra", () => {
  LoginPage.clicarBotaoEntrar();
});

Then("entao login realizado com sucesso", () => {
  cy.url().should("include", "/inventory.html");
});

Then("devo visualizar a mensagem de erro {string}", (tipoUsuario) => {
  const mensagemEsperada = dados[tipoUsuario]?.msg || tipoUsuario;

  LoginPage.elements.msgErro()
    .should("be.visible")
    .and("contain.text", mensagemEsperada);
});