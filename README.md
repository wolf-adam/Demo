# Hangman game demo

## Technics used in project:
- Function based SPA
- Context base status management
  - `useReducer` function usage
  - redux seemed overkill for these values as they don't change that frequently 
- Required value saving with `localStorage`
  - to let users continue their unfinished game even after the tab was closed (but the browser wass not)
- CSS modules usage
  - avoid classname clashes
- Responsivity
  - TODO ⏳
- Unit and integrity tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - TODO ⏳

### Steps to run application locally

1. Run `npm install`
- This will install all the necessary packages to run the project

2. After successsful installation run `npm start`
- Fires up app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Additional other script:

- `npm test`
  - Launches the test runner in the interactive watch mode.

- `npm run deploy -- -m "YOUR COMMIT'S MESSAGE" `
  - build production code and save it to build folder
  - update GH pages

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).