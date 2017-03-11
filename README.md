# Sports editor desktop in react

## pre-requisites
node, npm, yarn, karma

## install
yarn

## running
yarn start

## testing
yarn test

## How to
### Add a page
1. Find right module. 
2. Add a folder and create/copy scss jsx for the form/other html template. 
3. Add a page jsx file for the page that refers to the form jsx, it will also contain any logic. It will pass over the methods and properties to the template/form via props. 
4. Add a test js file to test the form/template, using jest and enzyme. Name it finishing with test.js and jest will pick it up.
5. Add a test js file to test the page logic. Use jest as well (it's superset of jasmine)
6. Add any actions and tests into actions folder in module.
7. Add epic into epics folder if you need to access server, and any tests
8. Add the reducers into reducers folder, with tests. These are jest/jasmine as well.
9. Add page to routes for module

### Change main app
It follows the same structure as the modules, so is effectively the root module
