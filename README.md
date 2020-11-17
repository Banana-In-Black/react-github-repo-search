# React Github Repository Search

Initial by [Create-React-App](https://github.com/facebook/create-react-app), and [Demo](https://codesandbox.io/s/react-github-repo-search-92lie) host on CodeSandbox.
Or you can download it from [github](https://github.com/facebook/create-react-app) and use `npm i && npm start` to run it on the local dev server.

## Features

- Search repos by input on changing, with debounced api call.
- Implement simple infinity scroll to load more repos if there's more result than first page.

## API Reference

- [Github Search API v3](https://docs.github.com/en/free-pro-team@latest/rest/reference/search)
- [@octokit/core](https://github.com/octokit/core.js#readme)

## Project Architecture

- `/component`: Reusable react components, most of them are uncontrolled.
  - `/Input`: Base text input with some fancy visual effect.
  - `/LoadingIcon`: A pure CSS animation loading icon. (from [loading.io](https://loading.io/css/))
  - `/SearchBox`: Every UI that search needed is put together here.
  - `/RepoList`: Ugh.. github repository list, the search result will be display here.
- `/api`: Use `@octokit/core` to send search request to github. Since the feature is not complex, so I put searching state here instead of using `redux` or `Context`.
- `/hook`: Two features, two hooks.
  - `/infinityScroll`: Currently it calculate the `document.body` scroll info to determine whether to execute the given callback or not. With throttled scroll event handler.
  - `/search`: Handle debounced search and loading state.

## CSS (SCSS)

Using `BEM` as a naming convention, and to avoid complex or nested css rules. Futhermore, use `SCSS` to make it easier to write BEM classnames.