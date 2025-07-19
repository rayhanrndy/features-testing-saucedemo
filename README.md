# Functional Testing Saucedemo

![Cypress](https://img.shields.io/badge/Testing-Cypress-brightgreen)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![CI/CD](https://img.shields.io/badge/CI/GitHub%20Actions-blue)

## 📌 Overview

This repository contains functional testing project for the [SauceDemo](https://www.saucedemo.com/) website.  
It is built using **Cypress**, with **BDD Cucumber**, and integrated with **GitHub Actions CI/CD pipeline**.

The tests cover critical user flows on SauceDemo, ensuring core functionalities work as expected.

---

## 🚀 Tech Stack

- 🧪 **Testing Framework:** Cypress
- 📝 **BDD:** Cucumber (Gherkin syntax)
- 💻 **Language:** JavaScript
- 🔀 **Automation Pattern:** Page Object Model (POM)
- ⚙️ **CI/CD:** GitHub Actions
- 📊 **Reporting:** Mochawesome

---

## 🧩 Features Tested

✅ User Login  
✅ Shopping Cart (Add & Remove Items)  
✅ Checkout Process  
✅ Order Overview & Complete  
✅ Negative Tests (Invalid login credentials, etc)

---

## ⚙️ Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/rayhanrndy/features-testing-saucedemo.git
   cd features-testing-saucedemo
2. Install dependencies:
   ```bash
   npm install
🏃‍♂️ Running Tests
- Run all tests in headless mode
  ```bash
  npm run test:cypress
- Run tests with UI
  ```bash
  npx cypress open
- Merge test report
  ```bash
  npm run report:merge
- Generate test report
  ```bash
  npm run report:generate
  npm run report:open

---

## 🔄 CI/CD

This project uses GitHub Actions to automatically:
- Install dependencies
- Run tests on every push to main
- Generate test reports

See .github/workflows/ci.yml for workflow details.
