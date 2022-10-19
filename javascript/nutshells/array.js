"use strict";

///////////////////////////////////////////////////////////////////
/////////////////////////////  Array  /////////////////////////////
///////////////////////////////////////////////////////////////////

/////////////////////////////  Declaration  /////////////////////////////

// let arr1 = [];
// let arr2 = ["element1", 3, {}, []];

/////////////////////////////  Array Properties  /////////////////////////////
// constructor	??
// length		--> capacity not size
// prototype	??

///////////////////////////// pop/push shift/unshift /////////////////////////////

// push			adds an element to the end. return new length
// pop			takes an element from the end and return it.
// unshift		adds an element to the beginning. return new length
// shift		takes an element from the beginning and return it.

/////////////////////////////  slice/splice  /////////////////////////////

// slice		syntax ==> array.slice(start = 0, end = EndOfArray)
//				returns selected elements in an array, as a new array.
//				selects the elements starting at start and ends at end, but does not include it
//				does not change the original array.
//splice		array.splice(index, howmany, item1, ....., itemX)

///////////////////////////// other methods /////////////////////////////

// concat()			Joins two or more arrays, and returns a copy of the joined arrays
// join()			array.join(separator = ",")
// isArray()		syntax ==> Array.isArray(obj)
// copyWithin()		method is not supported in Internet Explorer.
//					array.copyWithin(target, start, end)
// toString()		Converts an array to a string, and returns the result

////  (function 	func(value, index, arr)) ///
// find()			Returns the value of the first element in an array that pass a test
//findIndex()		Returns the index of the first element in an array that pass a test
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// forEach()		calls a function once for each element in an array, in order.
// map()			method creates a new array with the results of calling a function for every array element.
// filter()			creates an array filled with all array elements that pass a test

// every()			returns true if all elements in an array pass a test
// some()			Checks if any of the elements in an array pass a test

// reduce()			Reduce the values of an array to a single value (going left-to-right)
//					array.reduce(function(accumilator, currentValue, currentIndex, arr), initialValue)
//reduceRight()		Reduce the values of an array to a single value (going right-to-left)

// reverse()		Reverses the order of the elements in an array.
// sort()			array.sort(compareFunction = (a, b) => strcmp(a, b))

// function sum_arr(arr) {
// 	if (arr.length == 1)
// 		return [arr];
// 	if ()
// }

// function sum_arr(arr) {
//   let sum = 0;
//   for (let value of arr) sum += value;
//   return sum;
// }

// function sum(num) {
//   if (num < 0) return 0;

//   let count = 1;
//   let i;
//   let arr = [num];
//   while (arr.some((v) => v != 1)) {
//     // console.log(arr);
//     count++;
//     for (i = 0; i < arr.length - 1 && arr[i + 1] != 1; i++);
//     arr.splice(i, arr.length, arr[i] - 1);
//     while (sum_arr(arr) + arr[i] <= num) arr.push(arr[i]);
//     if (sum_arr(arr) < num) arr.push(num - sum_arr(arr));
//   }
//   return count;
// }

// var spiralize = function (size) {
//   let small_arr = [];
//   for (let i = 0; i < size + 2; i++) small_arr.push(0);
//   let arr = [];
//   for (let i = 0; i < size + 2; i++) arr.push(small_arr.map((v) => v));

//   let i = 0;
//   let j = 0;
//   let inc = 0;
//   while (true) {
//     for (; i < size && arr[j][i + 1] != 1; i++) {
//       arr[j][i] = 1;
//       inc++;
//     }
//     i--;
//     if (inc < 2) break;
//     inc = 0;
//     for (; j < size && arr[j + 1][i] != 1; j++) {
//       arr[j][i] = 1;
//       inc++;
//     }
//     if (inc < 2) break;
//     j--;
//     inc = 0;
//     for (; i >= 0 && arr[j][i - 1] != 1; i--) {
//       arr[j][i] = 1;
//       inc++;
//     }
//     if (inc < 2) break;
//     i++;
//     inc = 0;
//     for (; j >= 2 && arr[j - 1][i] != 1; j--) {
//       arr[j][i] = 1;
//       inc++;
//     }
//     if (inc < 2) break;
//     j++;
//     inc = 0;
//   }

//   arr = arr.splice(0, size);
//   for (let i = 0; i < size; i++) arr[i] = arr[i].splice(0, size);
//   for (let v of arr) console.log(v);
// }-
