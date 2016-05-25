## Documentation

You can see below the API reference of this module.

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

