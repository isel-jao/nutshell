"use strict";

////////////////////////////////   Creating strings   ///////////////////////////////
// let string1 = "holaaaaaaaaaa"
// let string2 = 'friend'
// let string3 = `hello ${string2}`
// let string4 = new String("hello world")

////////////////////////////////   Character access   ///////////////////////////////

// return 'cat'.charAt(1) // returns "a"
// return 'cat'[1] // returns "a"

////////////////////////////////   Comparing strings   ///////////////////////////////
// In C, the strcmp() function is used for comparing strings.
// In JavaScript, you just use the less-than and greater-than operators:

////////////////////////////////   Static methods   ///////////////////////////////

//// String.fromCharCode() ////
// let str = String.fromCharCode(num1, num2, ... , numN)
// let str = String.fromCharCode(num1, num2, ... , numN)
// returns a string  created from the specified sequence of UTF-16 code units.

//// String.fromCodePoint() ////
// let str = String.fromCodePoint(num1, num2, ... , numN)
// returns a string  created from the specified sequence of UTF-16 code units.

//// String.raw() ////

// Syntax
// String.raw(callSite, ...substitutions)
// String.raw`templateString`

// String.raw`Hi\n${2 + 3}!`; // 'Hi\\n5!'
// String.raw`Hi\u000A!`; // 'Hi\\u000A!'
// let name = 'Bob';
// String.raw`Hi\n${name}!`;// 'Hi\\nBob!',
// raw: ['foo', 'bar', 'baz']}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'

////////////////////////////////   String Methods   ///////////////////////////////
// charAt()			string[index] or empty string instead of undefined
// charCodeAt()		Returns the Unicode of the character at the specified index
// concat()			Joins two or more strings, and returns a new joined strings
// endsWith()		Checks whether a string ends with specified string/characters
// includes()		Checks whether a string contains the specified string/characters
// indexOf()		Returns the first found occurrence if found , -1 if not
// lastIndexOf()	Returns the last found occurrence if found , -1 if not
// repeat()			Returns a new string with a specified number of copies of an existing string
// search()			str.search(string) | str.search(regex) , return first match index
// slice			slice(start = 0, end = lenght)
// split()			Splits a string into an array of substrings
// substr()			substr(start, length) C like 
// substring()		substr(index1, index2) // 
// trim()			rmove white spaces form start and end

