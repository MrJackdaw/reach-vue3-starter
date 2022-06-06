# reach-vue3x Application Scaffold

- [reach-vue3x Application Scaffold](#reach-vue3x-application-scaffold)
  - [What is it?](#what-is-it)
  - [What does it contain?](#what-does-it-contain)
  - [How do I use it?](#how-do-i-use-it)
    - [Reach Helpers](#reach-helpers)
  - [Available scripts](#available-scripts)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Run your unit tests](#run-your-unit-tests)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)

---

## What is it? 
Based on [the **Reach-Reach** starter](https://github.com/MrJackdaw/reach-reactjs-starter). This is a quick scaffold/template for building a `Vue3` and `Reach Lang` DApp. Excluding a few (mainly DApp-specific) additions, this is a standard **Vue3 Typescript** application. 

--- 

## What does it contain? 

* [Vue3](https://vuejs.org/guide/introduction.html) with [Typescript support](https://www.typescriptlang.org/): A popular front-end framework for building web applications 
* [Reach Language](https://docs.reach.sh/): A compiled language for building multi-chain smart contracts. This template includes **the JS dependency**, and [not the CLI](#installing-the-reach-cli).
* [Google's Material Icons](https://fonts.google.com/icons) for quick UI sugar
* SASS (no pre-defined style libraries: you can `npm install` any additional dependencies.)
* [🦆 raphsducks](https://github.com/JACK-COM/raphsducks): an unopinonated state manager.
* [🦆 reachduck](https://github.com/JACK-COM/reachduck): a simple API for interacting with the blockchain and/or a reach `stdlib` instance

---
## How do I use it?

1. Clone the project
2. `cd path/to/my-project`
3. `rm -rf .git && git init` (create a fresh git repository for your project)
4. `npm install` 
5. `npm run start` (launches at `localhost:3000`) 

Take a look at [Available Scripts](#available-scripts) for additional CLI commands.

---

### Reach Helpers
This project includes some helpful bits, including 
* A self-contained [state instance](https://github.com/JACK-COM/raphsducks). You can subscribe to it like any other state.
* A `connect` button that will automatically trigger a wallet connection.\
    Default network is Algorand, but if your `stdlib` instance is using `ETH`, it will trigger MetaMask.
* A stub `Reach` application to get you started on your multichain smart contracts. I personally use the directory to store my compiled contracts. 
* A [light API](https://www.npmjs.com/package/@jackcom/reachduck#methods) for interacting with your `@reach/stdlib` instance.


---
## Available scripts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
