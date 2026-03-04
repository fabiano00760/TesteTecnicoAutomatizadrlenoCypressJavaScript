Feature: Automatic WEB - Checkout
Background: 
    Given que eu esteja logado com o usuario "standard_user" e senha "secret_sauce"
    And que eu tenha um produto no carrinho

 @Checkout_Sucesso
 Scenario: Preencher formulário e finalizar compra com sucesso
    When clico no icone do carrinho
    And clico no btn Checkout
    And preencho o campo Nome "Fabiano"
    And preencho o campo Sobrenome "Silva"
    And preencho o campo CEP "12345"
    And clico no btn Continue
    And clico no btn Finish
    Then devo visualizar a mensagem de finalizacao "Thank you for your order!"

