# React app stack

* CRA
  * react
  * jest
  * eslint
* typescript
* router
* redux

Project bootstrapped with create-react-app (CRA)

```bash
npx create-react-app <project-name> --template typescript
```

By default all dependencies are primary. Restructured to:

* create-react-app
  * react
  * react-dom
  * web-vitals
* router
  * react-router-dom
* redux
  * @reduxjs/toolkit
  * react-redux

theming:
https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1
https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/

## devDependencies history

* create-react-app [moved eslint routes from package.json to .eslintrc.json; added lint script]
  * @testing-library/jest-dom
  * @testing-library/react
  * @testing-library/user-event
  * @types/jest
  * @types/node
  * @types/react
  * @types/react-dom
  * react-scripts
  * typescript
* prettier [added files: .prittierrc, .pritterignore; added prettier to .eslintrc.json]
  * prettier
  * eslint-routes-prettier
  * eslint-plugin-prettier
* CRACO [added craco.routes.ts; changed package.json scripts to craco; added path alias to tsconfig.json and craco.routes.ts]
  * @craco/craco  @7.0.0-alpha.3 https://github.com/gsoft-inc/craco/issues/415
  * @types/craco__craco
* scss
  * sass
* router
  * @types/react-router-dom

|                           | redux toolkit                  | mobx                                                         |
|---------------------------|--------------------------------|--------------------------------------------------------------|
| Github stars              | redux - 58.1k, toolkit - 7.8k  | 25.3k                                                        |
| Dependencies to project   | 2                              | 2                                                            |
| Coding style              | functional                     | preferable classes                                           |
| Code style strictness     | opinionated                    | free (many ways to achieve the same goal)                    |
| Store structure           | one store sliced into reducers | many autonomous stores (communication via RootStore pattern) |
 | Unit testing covered      | 67% (only reducers)            | 92% statements                                               |
| Debugging                 | redux tools (good)             | MobX tools (bad)                                             |
| Mutability                | immutable                      | mutable                                                      |
| Complexity                | simple                         | simple                                                       |
| Amount of boilerplate     | low                            | low                                                          |
| Pure function reducers    | true                           | false                                                        |
| Require additional config | no                             | tsconfig "useDefineForClassFields": true                     |
| Additional features       | RTK Query                      | Computed, Reactions                                          |
