// 1 Make a function add that takes two arguments (numbers) and sums them together
const sum = (num1, num2) => {
    return num1 + num2;
  }
  
  // 2 Make a function subtract that takes two arguments (numbers) and subtracts them
  const subtract = (num1, num2) => {
    return num1 - num2;
  }
  
  // 3 Make a function multiply that takes two arguments and multiplies them
  const multiply = (num1, num2) => {
    return num1 * num2;
  }
  // 4 Make a function divide that takes two arguments and divides them
  const divide = (num1, num2) => {
    return num1 / num2;
  }
  // 5 Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
  const calculate = (num1, num2, operates) => {
    return operates(num1, num2);
  }
  // 6 Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  
  
  // 7 Call calculate 4 times, each time using one of the operation functions you wrote
  
  // console.log(calculate(1, 2, sum));
  // console.log(calculate(1, 2, multiply));
  // console.log(calculate(1, 2, subtract));
  // console.log(calculate(1, 2, divide));
  
  
  const bar = () => {
      console.log('bar here');
  }
  
  
  const foo = () => {
      console.log('foo here');
  }
  
  bar();
  foo();
  
  // Error reading
  // What is meant by the error(s) this produces?
  //Answer: foo is defined after it is invoked.

  // Section 3 Array Methods with Callbacks
// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// Every
// 1. Determine if every number is greater than or equal to 0
  for(num of nums) {
    if (num > 0) {
      //console.log(num);
    }
  }
// 2. determine if every word shorter than 8 characters
  for (word of panagram) {
    if (word.length < 8) {
      //console.log(word)
    }
  }
// Filter
// 1. filter the array for numbrs less than 4
let newArray = nums.filter((num) => {
  if(num < 4) {
    return num;
  }
})

//console.log(newArray);

// 2. filter words that have an even length
let newWords = panagram.filter((word) => {
  if(word.length % 2 === 0) {
    return word;
  }
})

//console.log(newWords);

// Find
// 1. Find the first value divisible by 5
let divisByFive = nums.find((num) => {
  console.log(num);
  if (num % 5 ===0){
    return num
  }
})

//console.log(divisByFive);

// 2. find the first word that is longer than 5 characters
let wordLengthFive = panagram.find((word)=>{
  if (word.length > 5) {
    console.log(word);
  }
})

//console.log(wordLengthFive);

// Find Index
// 1. find the index of the first number that is divisible by 3
let indexOfNum = nums.findIndex((num) => {
  if (num % 3 ===0) {
    return num;
  }
})

//console.log(indexOfNum);

// 2. find the index of the first word that is less than 2 characters long

let indexOfWord = panagram.findIndex((word) => {
  if(word.length < 2) {
    return word;
  }
})

// console.log(indexOfWord);

// For Each
// 1. console.log each value of the nums array multiplied by 3
let multiplyBy3 = nums.forEach((num)=> {
  //console.log(num * 3);
})
// 2. console.log each word with an exclamation point at the end of it
panagram.forEach((word)=> {
  console.log(word + '!');
})