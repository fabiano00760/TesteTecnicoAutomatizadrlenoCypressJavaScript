Feature: Automatic WEB

Background: 
    Given que esteja na pagina home "https://www.saucedemo.com"

 @Login_valido
 Scenario: teste de login com sucesso
  When preencho o campo Usuario "valido"
  And preencho o campo Senha "valido"
  And clico no btn Entra
  Then entao login realizado com sucesso

  @Login_invalido
  Scenario: Teste de login com credenciais incorretas
  When preencho o campo Usuario "invalido"
  And preencho o campo Senha "invalido"
  And clico no btn Entra
  Then devo visualizar a mensagem de erro "invalido"

  @Login_vazio
  Scenario: Teste de login com campos vazios
  When preencho o campo Usuario ""
  And preencho o campo Senha ""
  And clico no btn Entra
  Then devo visualizar a mensagem de erro "Epic sadface: Username is required"

    