// const user = {
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//   },
// };

// const user1 = Object.create(
//   Object.getPrototypeOf(user),
//   Object.getOwnPropertyDescriptors({
//     firstName: "John",
//     lastName: "Doe",
//   })
// );
// console.log(user1.fullName); // undefined undefined

// const deepCopy = (obj) => {
//   const clone = Object.create(Object.getPrototypeOf(obj));
//   const props = Object.getOwnPropertyDescriptors(obj);
//   return Object.defineProperties(clone, props);
// };

// const user1 = deepCopy(obj);
// obj.firstName = "Jane";
// console.log(user1.firstName); // John

// console.log(Object.getPrototypeOf(obj));

// String.prototype.capitalize = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// console.log("hello world".capitalize());
