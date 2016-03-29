"use strict";

const validify = require("../lib");

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
