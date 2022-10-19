const callCounter = (fn) => {
  let count = 0;
  console.log("callCounter called");

  return (...args) => {
    console.log(`${fn.name} has been called ${++count} times`);
    return fn(...args);
  };
};

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};
sum = callCounter(sum);

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5));

const arr = [];
if (arr.length) console.log("arr is empty");
