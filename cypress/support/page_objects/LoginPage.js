class LoginPage {
  elements = {
    campoUsuario: () => cy.get('[data-test="username"]'),
    campoSenha: () => cy.get('[data-test="password"]'),
    botaoLogin: () => cy.get('[data-test="login-button"]'),
    msgErro: () => cy.get('[data-test="error"]') 
  }

  acessarPagina(url) {
    cy.visit(url);
  }

  preencherUsuario(valor) {
    // Adicionamos um check: se o valor for vazio, apenas limpa o campo
    if (valor === "") {
      this.elements.campoUsuario().clear();
    } else {
      this.elements.campoUsuario().type(valor);
    }
  }

  preencherSenha(valor) {
    if (valor === "") {
      this.elements.campoSenha().clear();
    } else {
      this.elements.campoSenha().type(valor);
    }
  }

  clicarBotaoEntrar() {
    this.elements.botaoLogin().click();
  }
}

export default new LoginPage();