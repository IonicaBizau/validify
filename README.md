
# validify

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/validify.svg)](https://www.npmjs.com/package/validify) [![Downloads](https://img.shields.io/npm/dt/validify.svg)](https://www.npmjs.com/package/validify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Validation made easy.

## :cloud: Installation

```sh
$ npm i --save validify
```


## :clipboard: Example



```js
const validify = require("validify");

console.log(validify("Hello World", String, "The input should be a string.").valid);
// => true

console.log(validify(NaN, Number, "The input is not a valid number.").error);
// => [Error: The input is not a valid number.]

console.log(validify("foo@bar.com", /\S+@\S+/, "The email is invalid.").error);
// => null

console.log(validify("foobar.com", /\S+@\S+/, {
    message: "The email is invalid."
  , code: "INVALID_EMAIL"
}).error);
// => { [Error: The email is invalid.] code: 'INVALID_EMAIL' }

console.log(validify(42, x => x > 18 && x <= 42, "The input should be greater than 18 and lower or equal than 42.").error);
// => [Error: The input should be greater than 18 and lower or equal than 42.]
```

## :memo: Documentation


### `validify(input, type, errMessage)`
Validates the input against the validation method.

#### Params
- **Anything** `input`: The input value.
- **Function|String|RegExp** `type`: The validation type.
- **Object|Error|String** `errMessage`: The error message interpreted by [`err`](http://github.com/IonicaBizau/err).

#### Return
- **Object** An object containing:
 - `error` (Error|null): The `Error` object (if any), or `null`.
 - `valid` (Boolean): `true` if the input is valid, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`validate5`](https://github.com/IonicaBizau/validate5#readme)—Form validations made easy.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
