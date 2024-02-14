# Use TailwindCSS

## Context and Problem Statement

At the infancy of the project the UI designs were unconfirmed and high level, lacking UI interaction specifications. Selecting a UI library requires knowing exactly what UI is desired and then overlaying that with an appropriate UI library. This process can be long if there is no clear direction.

## Considered Options

- [TailwindCSS](https://tailwindcss.com/) - As of 2021 is a very popular and flexible CSS framework, which doesn't create restrictive guardrails for the UI look-and-feel. To use TailwindCSS with ReactJS, you need to use `craco` to integrate PostCSS: https://tailwindcss.com/docs/guides/create-react-app. To enable rapid development, there is [HeadlessUI](https://headlessui.dev/) which provides free UI components. HeadlessUI isn't very complete so still requires authoring custom components.
- Custom CSS - It's always an option to use no library at all, and simply create custom CSS using a pre-processor. This means coming up with conventions and could delay the development of the product.

## Decision Outcome

Chosen option: "TailwindCSS", because

- It's popular and flexible to support a project where the design would evolve with the project and be confirmed at a future point in time.
