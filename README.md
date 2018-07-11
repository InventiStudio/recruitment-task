<p align="center">
  <img alt="Wallet: InventiStudio recruitment task" src="design/assets/logo.svg" />
  <br>
  <br>
</p>

# [InventiStudio](https://inventi.studio) Front-end recruitment task

Hello Stranger!

Since you got here, you're probably taking a part in our recruitment process for Front-end developer position, right? We're super happy to hear that!
Getting right to it — the main purpose of this task it to check out your HTML, CSS and JavaScript skills. We'd like to get to know your aproach of solving the following problems:
- Implement functionalities for the User stories (first one is already done),
- use [Vuejs](https://vuejs.org/) UI library with it's related ecosystem parts like Vuex and Vue-Router,
- provide the best possible User Experience (being strict with the designs, responsiveness, hover/focus states of interactive elements — everything to your liking and ideas),
- write a code that follows project's guidelines (e.g linters).

Feel free to open an issue if you got any questions or sugestions! Once it's ready, send us a repository link at [hello@inventi.studio](mailto:hello@inventi.studio)!

Happy coding and cheers,

Kamil & Piotrek, [InventiStudio](https://inventi.studio)

#### Table of Contents
- [User stories](#user-stories)
- [Design](#design)
- [API](#api)
- [Setup](#setup)
- [Development](#development)
- [Production](#production)

## User stories
- [x] As a guest I am able to sign in.
- [ ] As a user I am able to sign out.
	Create wallet component +
	Add new route +
	Add singOut component + 
	Add logout/delete sesion storage method +
	Add css
	Create linters config
- [ ] As a user I am able to see all my transactions.
- [ ] As a user I am able to see all my withdrawals (transactions where I took money out of my wallet).
- [ ] As a user I am able to see all my additions (transactions where I added money to my wallet).
- [ ] As a user I am able to see wallet summary.

## Design
At `/design` directory you can find previews of User Interface, design guidelines and all the required assets.

![SignInView](design/preview/WalletView.jpg?raw=true)

# API

**API Url**: *http://217.182.66.13:4000/*  
**E-mail**: *john.doe@mail.com*  
**Password**: *password*

**Endpoints**:

- [Transactions](#transaction)
	- [GET Transactions](#get-transactions)

- [Session](#session)
	- [GET Session](#get-session)
	- [POST Session](#post-session)
	- [DELETE Session](#delete-session)

# Transaction

## GET Transactions

Get all transactions.

	GET /transactions

### Headers

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| x-auth-token | uuid | Session's token.

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| transaction | Object[] | List of transactions.
| transaction.name | String | Transaction's name.
| transaction.amount | Number | Amount of money withdrawn/added.

# Session

## GET Session

Validate token.

	GET /sessions/:token

### Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| token | uuid | Session's token.

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| session | Object | - |
| session.expiresAt | Date | Date of session's expiry. |

## POST Session

Create new session.

	POST /sessions/

### Success 201

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| session | Object | - |
| session.id | uuid | Session's token. |

## DELETE Session

Destroy session.

	DELETE /sessions/:token

### Success 204

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| - | - | - |

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

## Disclaimer

It's just a recruitment task, we won't use it in any commercial way!
