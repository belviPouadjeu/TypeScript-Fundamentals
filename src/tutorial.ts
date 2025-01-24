let awesomeName: string = 'belvinard';
awesomeName = 'something';
awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20;

let amount: number = 20;
amount = 10 - 1;
console.log(amount); // Use the variable

// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome); // Use the variable

// isAwesome = 'belvinard'


/**
 *  CHALLENGE 1
 */

// 1. String
let greeting: string = 'Hello, TypeScript!';
greeting = greeting.toUpperCase(); // This should work fine

// 2. Number
let age: number = 25;
age = age + 5; // This should work fine

// 3. Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult; // This should work fine

// 4. Assigning different types
// Uncommenting any of these will result in a TypeScript error
// greeting = 10; // Error: Type 'number' is not assignable to type 'string'
// age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'
// isAdult = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'