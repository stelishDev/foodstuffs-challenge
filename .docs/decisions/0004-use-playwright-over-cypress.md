# Use Playwright over Cypress

## Context and Problem Statement

Cypress was useful when we started the project because it allows for stubbed UI testing and allows visualising the steps taken during the test run and has tools for authoring UI tests. However, the main challenges we face with Cypress:

1. It is slow to execute tests, it feels bulky. We want a fast running test suite for the flows and unless it's fast we are loathed to build it out to include unhappy path test cases as well.
2. The Chainable commands API is unintuitive leading to bugs when used incorrectly and the team is unproductive because of it.
3. The data mocking API built into Cypress also has a clunky API.

## Considered Options

- [Playwright](https://playwright.dev/) - The team have used Playwright in the past and it provides a much better interface than Cypress, allowing for natural async code via async/await. The tests also run very fast compared to Cypress. There's support for Chromium-based browsers (Chrome, Edge), Firefox and Safari just like Cypress and has a test recorder which authors test steps which is a great boon for productivity.

## Decision Outcome

Chosen option: "Playwright", because:

- The team has proven experience with the tool
- The team has done a spike and performance of the tool is much better
- The API is remarkably better than Cypress
