"use strict";

const typpy = require("typpy")
    , Err = require("err")
    ;

/**
 * validify
 * Validates the input against the validation method.
 *
 * @name validify
 * @function
 * @param {Anything} input The input value.
 * @param {Function|String|RegExp} type The validation type.
 * @param {Object|Error|String} errMessage The error message interpreted by [`err`](http://github.com/IonicaBizau/err).
 * @returns {Object} An object containing:
 *
 *  - `error` (Error|null): The `Error` object (if any), or `null`.
 *  - `valid` (Boolean): `true` if the input is valid, `false` otherwise.
 */
module.exports = function validify(input, type, errMessage) {


    let isValid = typpy(type, RegExp)
                    ? typpy(input, String)
                      ? type.test(input)
                      : false
                    : typpy(input, type)
      , err = isValid ? null : new Err(errMessage)
      ;

    return {
        error: err
      , valid: isValid
    };
};
