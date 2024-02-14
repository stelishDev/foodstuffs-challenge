# Use Vite and Vitest over Webpack and Jest

## Context and Problem Statement

When the project was started the defacto for a React application was using Webpack and Jest, which was encouraged by the documentation and scaffolded by the tool `create-react-app`.

Webpack is aging as a technology because it's a bundler and with the modern web the need for bundling is decreasing due to native ES module support.

Webpack tooling is bloated and webpack test runs slower compared to vitest.

## Considered Options

- [vite](https://vitejs.dev/) - Instant dev server start & instant HMR giving a great DX.
- [vitest](https://vitest.dev/) - Developed by the vite team and adoption makes sense due to Jest API compatibility and it provides for insanely fast HMR.

## Decision Outcome

Chosen option: "vite" and "vitest", because:

- It's a good bet for where the React community is likely to go
- The build times will improve
- DX will improve
