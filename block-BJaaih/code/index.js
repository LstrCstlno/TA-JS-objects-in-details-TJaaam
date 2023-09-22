/*
1. Create a function named `myMap` and add the method to `Array.prototype`.
`myMap` will behave similar to how the `Array.map` works. To test the implementation use the code below.
*/



Array.prototype.myMap = function(cb) {
  let final = [];
  for(let i = 0; i < this.length; i++){
      final.push(cb(this[i]))
  }
  return final
}
// Test the myMap function you created above

let numbers = [1, 5, 6, 8, 9];
let words = 'quick brown fox jumped over a lazy dog'.split(
  ' '
);
let doubleNum = numbers.myMap(function (num) {
  return num * 2 - 1;
});

let capitalWords = words
  .myMap(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(' ');
console.log(doubleNum); // it should be [1, 9, 11, 15, 17]
console.log(capitalWords); // it should be 'Quick Brown Fox Jumped Over A Lazy Dog'

/*
2. Add a method named `myFilter` to Array.prototype. myFilter should behave similar to Array.filter.
After adding the function test it using the code below.
*/
Array.prototype.myFilter = function(cb) {
  let final = [];
  for(let i = 0; i < this.length; i++){
    if (cb(this[i])) {
      final.push(this[i])
    }
  }
  return final
}

let even = numbers.myFilter(function (num) {
  return num % 2 === 0;
});

let filteredWords = words
  .myFilter(function (word) {
    return word.length > 3;
  })
  .join(' ');
console.log(even); // it should be [6, 8]
console.log(filteredWords); // it should be 'quick brown jumped over lazy';

/*
3. Add a method named `shuffle` to Array.prototype. Using the method shuffle will return a
new array and in the new array the index of the elements will be shuffled (randomly reorders).
Make sure it does not the changes the original array.

*/
let numbers = [1, 2, 3, 4, 2, 3, 6, 7, 7]
Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5)
}

// Test to check the shuffle method (It will return different output every time you call)
console.log(numbers.shuffle());
console.log(numbers.shuffle());
console.log(words.shuffle());
console.log(words.shuffle());

/*
4. Add a method named `unique` to Array.prototype. Using the method will return a
new array and it should only contain unique elements in the array.
Unique means no element should come multiple times.
*/

Array.prototype.unique = function() {
  let newArray = [];
  for(let i = 0; i < this.length; i++){
    if(!newArray.includes(this[i])) {
      newArray.push(this[i])
    }
  }
  return newArray
}

// Test to check the unique method (It will return different output every time you call)
let num = [1, 2, 3, 4, 2, 3, 6, 7, 7];
let strings = 'helloworld'.split('');

console.log(num.unique()); // [1, 2, 3, 4, 6, 7]
console.log(strings.unique()); // ['h', 'e', 'l', 'o', 'w', 'r', 'd']

/*
5. Add a method named `intersection` to Array.prototype. The method intersection will accept an array and returns a new
array that will contain only element that is common in both the array.
*/

Array.prototype.intersection = function(array) {
  filter =  this.filter(item => array.includes(item))
    let newArray = [];
  for(let i = 0; i < filter.length; i++){
    if(!newArray.includes(filter[i])) {
      newArray.push(filter[i])
    }
  }
  return newArray;
}

// Test to check the shuffle method (It will return different output every time you call)
console.log(num.intersection([2, 7, 11, 32])); // [2, 7]
console.log(strings.intersection('heyworld'.split(''))); // ['h', 'e', 'o', 'w', 'r', 'l', 'd']

/*
6. Add a method named `chunk` to Array.prototype. The method chunk will accept one parameter `length`
and split the array into groups the length of size. If array can't be split evenly, the final
chunk will be the remaining elements. `length` should default to 1.
*/
Array.prototype.chunk = function(length = 1) {
  let arr = [...this]
  let newArr = [];
  for (let index = 0; arr.length > 1; index++) {
    newArr.push(arr.splice(0,length))
    if (length > arr.length) {
      newArr.push(arr.splice(0,1))
    }
  }
  return newArr;
}

// Test to check the shuffle method (It will return different output every time you call)
console.log(num.chunk(2)); // [[1, 2], [3, 4], [2, 3], [6, 7], [7]]
console.log(num.chunk()); // [[1], [2], [3], [4], [2], [3], [6], [7], [7]]
console.log(strings.chunk(3)); // [['h', 'e', 'l'], ['l', 'o', 'w'], ['o', 'r', 'l'], ['d']]
