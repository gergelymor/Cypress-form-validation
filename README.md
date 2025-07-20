**My first take on learning basic testing with Cypress.**

Run in headless mode: ```npx cypress run```

Run in browser: ```npx cypress open```

For CI/CD: run in headed mode in Chrome, specifying the filename: ```npx cypress run --headed --browser chrome --spec "cypress/e2e/testing-forms.cy.js"```

To make Intellisense (autocomplete) work ion VS Code, copy/paste this on the top of each file: ```/// <reference types="Cypress" />``` OR create an **index.d.ts** file under support folder, and **tsconfig.json** file under cypress folder, with the provided content in the repo.
