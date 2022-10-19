"use strict";

//// Methods and properties are: ////

// new Map()			– creates the map.
// map.set(key, value)	– stores the value by the key.
// map.get(key)			– returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key)			– returns true if the key exists, false otherwise.
// map.delete(key)		– removes the value by the key.
// map.clear()			– removes everything from the map.
// map.size				– returns the current element count.

///// Chaining ////

// Every map.set call returns the map itself, so we can “chain” the calls:
// .set('1', 'str1').set(1, 'num1').set(true, 'bool1');

//// Iteration over Map ////

// map.keys()		– returns an iterable for keys,
// map.values()		– returns an iterable for values,
// map.entries()	– returns an iterable for entries [key, value], it’s used by default in for..of.

// Besides that, Map has a built-in forEach method, similar to Array

//// Object.entries: Map from Object ////

// returns an array of key/value pairs for an object exactly in that format.
// let map = new Map(Object.entries({name: "issam", age: 28}));

//// Object.fromEntries: Object from Map ////

// let person = Object.fromEntries([["name", "issam"], ["age", 28]])

// let map = new Map()
// map.set("name", "issam").set( "age", 28);
// let person = Object.fromEntries(map);

/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////  SET  ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

//// Iteration over Set ////

// set.values() 	– returns an iterable object for values,
// set.keys() 		– also returns an iterable object for values,
// set.entries() 	– also returns an iterable object for values,
