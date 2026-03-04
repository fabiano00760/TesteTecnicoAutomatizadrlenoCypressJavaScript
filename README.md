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
 │         └── 3_checkout.feature
 │
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
git clone <URL_DO_REPOSITORIO>
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
When
Then
```

---

## ✅ Page Object Model (POM)

Separação da lógica da página em arquivos específicos:

* LoginPage
* CheckoutPage

Isso torna o projeto:

* Mais organizado
* Reutilizável
* Fácil manutenção

---

## ✅ Fixtures (Massa de Dados)

Os dados de teste ficam centralizados em:

```
cypress/fixtures/loginData.json
```

Isso permite:

* Alterar dados sem modificar os testes
* Reutilização de massa
* Melhor organização

---

# 🧪 Cenários Automatizados

### ✔ Login com sucesso

### ✔ Login inválido

### ✔ Login com campos vazios

### ✔ Checkout com finalização de compra

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

# 🏆 Objetivo do Projeto

Demonstrar conhecimento em:

* Automação de testes E2E
* Estruturação de framework
* BDD com Cucumber
* Organização profissional de testes

```
```
