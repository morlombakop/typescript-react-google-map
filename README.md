# React Google Map Sample App

This app is build:

- React + ReactDOM (16.8.4)
- Typescript (with TSLint setting)
- Prettier + tslint-config-prettier
- Test configuration using Jest and [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- Parcel bundler (1.12.0~)
- End to End Automation test with [Cypress](https://github.com/cypress-io/cypress)

## Quick start

1. Ensure you have node version 8.11.0 and above as well as npm version 6.0.0 and above installed
2. From your terminal navigate to `typescript-react-google-map` directory
3. run `npm i` to install project dependencies.
4. run `npm run develop` to transpile typescript and start the app with type checking.
5. run `npm run start` to transpile typescript and start the app. View the app on `localhost:1234`
6. run `npm run test` to execute the unit tests.
7. run `npm run test:e2e` to execute the automated UI text or e2e tests. Please ensure the no other process related to this repository is running. This commend will start the App and kick start automated tests.
8. run `npm run build` to build the app for production. The production files will be available in the `dist directory`
