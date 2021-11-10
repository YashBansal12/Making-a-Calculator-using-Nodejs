## Calculator

This Project contains simple calculator to perform various operations: Addition , Subtraction

### Features

- It performs Calculations
- performs Unit Testing
- Linting(Eslint) is used
- Documentation(Jsdoc)

## Prerequisites

### Installation

-> First install [npm](https://nodejs.org/en/)

-> Install Jest(for Unit testing)

- **[Jest](https://jestjs.io/docs/getting-started)** is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

```bash
    npm intall --save-dev jest
```

-> Install Jsdoc(For documentation)

- **[Jsdoc](https://jsdoc.app/)** is an open source API documentation generator for Javascript. It allows developers to document their code through comments. ... Once your code is fully documented you can easily generate a website containing all the API documentation by running a simple command.

```bash
    npm intall --save-dev jsdoc
```

-> Install Elint for linting

- **[ESLint](https://eslint.org/docs/user-guide/getting-started)** From my experience however, linters most useful function is that it makes the app look like it was written by one person. Every developer has their own style, and using ESLint means you have a written agreement about how your JavaScript code base should look like. ... ESLint can catch those code and returns error.

```bash
    npm intall --save-dev eslint
```

### Configuration

Replace the following with the script object in package.json file

```JSON
"scripts": {
    "jsdoc": "jsdoc -c jsdoc.json",
    "test": "jest --coverage",
    "lint": "eslint src/.",
    "fix": "eslint src/. --fix"
  }
```

Create a jsdoc.jason file in the main folder

```JSON
{
  "plugins": ["plugins/markdown"],
  "source": {
    "include": ["src"],
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|docs)"
  },
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true,
    "default": {
      "outputSourceFiles": false
    }
  },
  "opts": {
    "destination": "./jsdoc",
    "recurse": true,
    "readme": "./readme.md",
    "template": "./default"
  }
}
```

Create a .eslintignore file and copy the following in it

```
/node_modules
```

### Run the components

### Jest

To run Jest for unit testing run the given command in your terminal

```Bash
npm run test
```

### Jsdoc

To run Jsdoc for documentation run the given command in your terminal

```Bash
npm run jsdoc
```
### Eslint

Add this to Scripts in package.json as

```json
    "lint": "eslint testcases./"
```

So we can just run the lint using the Command

```bash
    npm run lint
```