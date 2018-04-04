# Wallet: [InventiStudio](https://inventi.studio) recruitment task

#### Table of Contents
- [Setup](#setup)
- [Development](#development)
- [Production](#production)

## Setup
#### Requirements
- [NodeJS](https://nodejs.org), *>= 8.0.0*
- [Yarn](https://yarnpkg.com/lang/en/), *>= 0.21.3*

## Development
```bash
# Clone repo and install deps
yarn
```

```bash
# Run dev server with hot reload at localhost:8080
yarn dev
```

#### Linters
```bash
# Run sass-lint
yarn lint:sass

# Run ESlint
yarn lint:es

# Run all linters
yarn lint
```

#### Tests
```bash
# Run Unit tests
yarn test:unit
```

```bash
# Run e2e tests
yarn test:e2e
```

## Production
```bash
# Build for production with minification
yarn build

# Build for production and view the bundle analyzer report
yarn build --report

# Run production server
yarn start
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
