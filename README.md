# @navigraph/pkce

Generates a Proof Key for Code Exchange ([PKCE](https://www.oauth.com/oauth2-servers/pkce/authorization-request/)) challenge pair in browser environments that does not have the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) interface exposed like Coherent GT in Microsoft Flight Simulator 2020.

## Installation

```bash
npm install @navigraph/pkce
```

or

```bash
yarn add @navigraph/pkce
```

## Usage

```js
const pkce = require("@navigraph/pkce");
pkce();
```

Returns an object with `code_verifier` and `code_challenge` like this:

```js
{
    code_verifier: 'YnV4cVnTBbubIHcn-zOuTvi26G9bI0cSb-28loIj27g',
    code_challenge: 'XniLYb3i4x_gmyTcl8fvklzHagRKIIO4dSX-ZZl-cP4'
}
```
