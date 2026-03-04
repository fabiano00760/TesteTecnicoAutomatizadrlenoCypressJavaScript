# 🧪 Automação Web com Cypress + Cucumber

Projeto de automação de testes End-to-End utilizando **Cypress**, **JavaScript** e **Cucumber (BDD)**.

Aplicação utilizada para testes: https://www.saucedemo.com

---

# 📌 Tecnologias Utilizadas

* Cypress
* Cucumber (BDD)
* JavaScript
* Page Object Model (POM)
* Fixtures (Massa de Dados)
* multiple-cucumber-html-reporter

---

# 📂 Estrutura do Projeto

```
cypress/
 ├── e2e/
 │    └── features/
 │         ├── 1_login.feature
 │         └── 2_gerenciamento_do_carrinho.feature
 │         ├── 3_checkout.feature
 ├── fixtures/
 │    └── loginData.json
 │
 ├── support/
 │    ├── page_objects/
 │    │     ├── LoginPage.js
 │    │     └── CheckoutPage.js
 │    │
 │    └── step_definitions/
 │          ├── loginSteps.js
 │          └── checkoutSteps.js
 │
 └── reports/
 │    ├── screenshots
 │    │     
 │    │
 │    └── vdeos
 │          
 │          
```

---

# ▶️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js (versão 16 ou superior recomendada)
* NPM

Verificar versões instaladas:

```bash
node -v 
npm -v
```

---

# ⚙️ Instalação do Projeto

Clone o repositório:

```bash
git clone https://github.com/fabiano00760/TesteTecnicoAutomatizadrlenoCypressJavaScript.git
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

---
# 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run cypress:open` | Abre a interface interativa do Cypress |
| `npm run cypress:run` | Executa os testes em modo headless |
| `npm run report:generate` | Gera relatório HTML |
| `npm run test:all` | Executa testes + gera relatório |


# 🚀 Executando os Testes

## 🔹 Abrir interface interativa do Cypress

```bash
npm run cypress:open
```

ou

```bash
npx cypress open
```

Selecione o arquivo `.feature` desejado para executar.

---

## 🔹 Executar em modo headless

```bash
npm run cypress:run
```

ou

```bash
npx cypress run
```

---

# 📊 Gerar Relatório HTML

Após a execução dos testes:

```bash
npm run report:generate
```

O relatório será gerado na pasta configurada no projeto.

Para executar testes + gerar relatório automaticamente:

```bash
npm run test:all
```

---

# 🧠 Padrões Aplicados

## ✅ BDD (Behavior Driven Development)

Os cenários são escritos no padrão Gherkin:

```
Given
And
When
Then
```

---

## ✅ Page Object Model (POM)

Separação da lógica da página em arquivos específicos:

* LoginPage
* CheckoutPage
* CarrinhoPage
  
Isso torna o projeto:

* Mais organizado
* Reutilizável
* Fácil manutenção

---

## ✅ Fixtures (Massa de Dados)

Os dados de teste ficam centralizados em:

```
cypress/fixtures/loginData.json
{
  "valido": {
    "usuario": "standard_user",
    "senha": "secret_sauce"
  },
  "invalido": {
    "usuario": "usuario_errado",
    "senha": "senha_errada",
    "msg": "Epic sadface: Username and password do not match any user in this service"
  },
  "checkout": {
  "nome": "Fabiano",
  "sobrenome": "Silva",
  "cep": "12345",
  "sucesso": "Thank you for your order!"
}
}
```

Isso permite:

* Alterar dados sem modificar os testes
* Reutilização de massa
* Melhor organização

---

# 🧪 Cenários Automatizados

### ✔ teste de login com sucesso

### ✔ Teste de login com credenciais incorretas

### ✔ Teste de login com campos vazios

### ✔ Adicionar produto ao carrinho com sucesso

### ✔ Remover produto do carrinho com sucesso

### ✔ Validar valor total da compra

### ✔ Preencher formulário e finalizar compra com sucesso

---

# 📌 Boas Práticas Aplicadas

* Separação de responsabilidades
* Uso de Hooks (Before)
* Centralização de dados
* Reutilização de Steps
* Organização por Features

---

# 👨‍💻 Autor

Fabiano de Barros Silva

---

# 📎 Observações

Caso ocorra erro relacionado a fixtures:

Verifique se o arquivo está em:

```
cypress/fixtures/loginData.json
```

E reinicie o Cypress após criar novos arquivos.

---

Demonstrar conhecimento em:

* Automação de testes E2E
* Estruturação de framework
* BDD com Cucumber
* Organização profissional de testes

```
# 📚 Conceitos Fundamentais de JavaScript

Este documento resume conceitos essenciais de JavaScript, focando em boas práticas e funcionalidade assíncrona, fundamentais para o desenvolvimento de testes automatizados com **Cypress**.

---

## 1. Diferenças entre `var`, `let` e `const`

No JavaScript moderno (ES6+), a gestão de variáveis é feita principalmente por `let` e `const`, evitando comportamentos inesperados do antigo `var`.

| Característica | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Escopo** | Global ou de Função | Bloco `{ }` | Bloco `{ }` |
| **Redeclaração** | Sim | Não | Não |
| **Reatribuição** | Sim | Sim | **Não** |
| **Hoisting** | Inicializa como `undefined` | Erro (Temporal Dead Zone) | Erro (Temporal Dead Zone) |

> **Boas Práticas:** Use `const` por padrão. Use `let` apenas se o valor da variável precisar ser alterado (ex: contadores). Evite o uso de `var`.

---

## 2. Assincronismo: Promises e Async/Await

Essencial para lidar com operações que não são instantâneas, como requisições de rede ou leitura de arquivos.

### **Promise (Promessa)**
Representa um valor que pode estar disponível agora, no futuro ou nunca. Possui três estados:
* **Pending (Pendente):** Estado inicial.
* **Fulfilled (Realizada):** Operação concluída com sucesso.
* **Rejected (Rejeitada):** Operação falhou.

### **Async / Await**
É uma "açúcar sintático" (*syntactic sugar*) sobre as Promises, permitindo escrever código assíncrono de forma sequencial e mais legível.

```javascript
// Exemplo prático
async function obterDados() {
  try {
    const resposta = await fetch('[https://api.exemplo.com/dados](https://api.exemplo.com/dados)');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro na requisição:", erro);
  }
}
```
