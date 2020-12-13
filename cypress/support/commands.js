// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0sskt0ZmWSFYMqscPIPG9SQtTd0nu4XWPFQOpN2RFotaSnBhbiInGVAxQ6yTGtRUfdy3v4vkeuVQubyzHWhWJ0QhUEokVVP2pu6Ck0j6nlNgifMyWfUrPmq6LJikOjdF1Gg%2BWw9UBcNeNiaYV6mkb4jToK5AA0DTzkNw0cuJ3VXrethAM4sZzwt1RfrQ1ECPAzyeuWBtdyjoe9cboSmlSdcQy1DwRDprBYTqiyAOGKKHBbbG75WkFVfVIgEGG1bSEfLm30EYHP%2FTYm4NXFbXt4TmqFqO3vk3509x5Rrlhj3SYAtCgUnUCC92aacZ20KbyhYIxZPS17YCoWlLYveTJMyvwUp08Fn1nFVIGrsXfUO0KeALwp3b9aMthrDD7UG%2BsHMfupSxHZu2FzsH3qnavr4%3D000313'
    )    
})
