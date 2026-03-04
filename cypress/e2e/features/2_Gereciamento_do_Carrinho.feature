Feature: Automatic WEB - Carrinho

Background: 
    Given que eu esteja logado com o usuario "standard_user" e senha "secret_sauce"

 @Adicionar_Produto
 Scenario: Adicionar produto ao carrinho com sucesso
    When clico no botao "Add to cart" do produto "Sauce Labs Backpack"
    Then devo visualizar o icone do carrinho com o valor "1"

 @Remover_Produto
 Scenario: Remover produto do carrinho com sucesso
    Given que adicionei o produto "Sauce Labs Backpack" ao carrinho
    When clico no botao "Remove" do produto "Sauce Labs Backpack"
    Then o icone do carrinho deve ficar vazio

 @Validar_Valor_Total
 Scenario: Validar valor total da compra
    When adicionei os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" ao carrinho
    And clico no icone do carrinho
    And clico no btn Checkout
    And preencho o campo Nome "Fabiano"
    And preencho o campo Sobrenome "Silva"
    And preencho o campo CEP "12345"
    And clico no btn Continue
    Then o campo Item total deve exibir o valor "$39.98"