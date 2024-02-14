# Use React Query

## Context and Problem Statement

Making API calls is a common challenge in front-end development. There are many libraries that can be used to make API calls. 

## Considered Options

- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Is a browser built-in function that can be used to make API calls. It is primitive but ubiquitous.
- [axois](https://www.axios.com/) - Is an abstraction over fetch and XHR offers interceptors and default configuration which speeds up development.
- [react-query](https://react-query.tanstack.com/) - Is a library that provides provides stale-while-revalidate semantics and convenient react hooks for productive front-end development.

## Decision Outcome

Chosen option: "react-query", because

- Improves perceived performance with [stale-while-revalidate](https://web.dev/stale-while-revalidate/) semantics.
- Improves development velocity with a built-in query cache, reasonable documentation and a great API with react hooks.
