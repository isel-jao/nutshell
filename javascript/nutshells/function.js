"use strict";

// ///////////////////////////////////////////////////////////////////
// //////////////////////////// Functions ////////////////////////////
// ///////////////////////////////////////////////////////////////////

// //////////////////////////// Function Declaration ////////////////////////////
// function function_name1(parameter1, parameter2, ...parameterN) {
//   // arguments[0] = parameter1
//   // arguments[1] = parameter2
//   // parameterN = arguments.splice(2)
//   // parameterN.lenght = arguments.length - 2
// }

// //////////////////////////// Function Expressions. ////////////////////////////
// let function_name2 = function (parameter1, parameter2, ...parameterN) {};

// //////////////////////////// Arrow functions ////////////////////////////
// // let func = (arg1, arg2, ..., argN) => expression
// // exemaple
// let min = (a, b) => (a < b ? a : b);

// // multiple arguments
// // PS --> arguments pseudo-parameter is not defined.
// let greeting = (...args) => {
//   for (let value of args) console.log("hello " + value);
// };

// // A Function Expression is created when the execution reaches it and is usable only from that moment.
// // A Function Declaration can be called earlier than it is defined.
// // In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// //////////////////////////// Local variables ////////////////////////////
// // A variable declared inside a function is only visible inside that function.

// //////////////////////////// Outer variables ////////////////////////////
// // The function has full access to the outer variable. It can modify it as well.

// // If a same-named variable is declared inside the function then it shadows the outer one.

// /// Default values ////////////////////////////
// function function_name3(name = "isel", age = 28) {
//   console.log("name: " + name);
//   console.log("age: " + age);
// }

// //////////////////////////// Callback functions ////////////////////////////
// function say_hello(param = "friend") {
//   console.log("hello " + param);
// }
// function waza() {
//   console.log("wazzzzzzzzzzzzzzzzzzz");
// }

// function function_name4(func1, func2) {
//   func1();
//   func2();
// }

////////////////////////////////// my function ///////////////////////////////////////

let ft = {
  min: function (...args) {
    if (args.length > 0) return args.reduce((min, v) => (min < v ? min : v));
  },

  max: function (...args) {
    if (args.length > 0) return args.reduce((max, v) => (max > v ? max : v));
  },
  clone: function (value) {
    if (typeof value != "object" || !value) return value;
    if (Array.isArray(value))
      return value.map((v) => (typeof value != "object" ? v : ft.clone(v)));
    let clone = {};
    for (let key in value) clone[key] = ft.clone(value[key]);
    return clone;
  },
};

console.log(90 / 10);
console.log(~~(90 / 10));
