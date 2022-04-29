# React app stack

* CRA
  * react
  * jest
  * eslint
* typescript

Project bootstrapped with create-react-app (CRA)

```bash
npx create-react-app <project-name> --template typescript
```

By default all dependencies are primary. Restructured to:

* dependencies
  * react
  * react-dom
  * web-vitals

theming:
https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1


## devDependencies history

* create-react-app [moved eslint config from package.json to .eslintrc.json; added lint script]
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
  * eslint-config-prettier
  * eslint-plugin-prettier
* CRACO [added craco.config.ts; changed package.json scripts to craco; added path alias to tsconfig.json and craco.config.ts]
  * @craco/craco  @7.0.0-alpha.3 https://github.com/gsoft-inc/craco/issues/415
  * @types/craco__craco
* scss
  * sass