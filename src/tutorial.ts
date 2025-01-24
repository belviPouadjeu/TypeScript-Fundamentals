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
 * ======================= SOLUTION CHALLENGE 1
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


/**
 * UNION AND ANY TYPE
 */

// ********** 1. UNION TYPE
let tax: number | string = 10;

tax = 100;
console.log(tax); // Reads the value of 'tax'

tax = '10FCFA';
console.log(`The tax is now: ${tax}`); // Reads 'tax' again


// fancy name - literal value type
// Declare a variable `requestStatus` with a union type that can only be one of three string literals: 'pending', 'success', or 'error'.
// Initialize it with the value 'pending'.
let requestStatus: 'pending' | 'success' | 'error' = 'pending';

// Update the value of `requestStatus` to 'success'.
requestStatus = 'success';

// Read or use the value of `requestStatus`
if (requestStatus === 'success') {
    console.log('The request was successful!');
}

// Update the value of `requestStatus` to 'error'.
requestStatus = 'error';

// Read the value again
if (requestStatus === 'error') {
    console.error('The request failed.');
}


// requestStatus = 'random';

// ********** 2. ANY TYPE

let notSure: any = 4;

// Update the value
notSure = 'maybe a string instead';
console.log(notSure); // Reads and uses the value

// Update the value again
notSure = false; // okay, definitely a boolean
if (typeof notSure === 'boolean') {
  console.log('It is now a boolean:', notSure); // Reads it again
}



/**
 * Practical Application of Type Annotation
 */

// Define an array of book titles
const books = ['2025', 'Brave New World', 'Fahrenheit 451'];

// Declare a variable to store the found book, which can be a string or undefined
let foundBook: string | undefined;

// Iterate through each book in the array
for (let book of books) {
    // Check if the current book is '2025'
    if (book === '2025') {
        // If found, assign the book to the `foundBook` variable
        foundBook = book;

        // Convert the found book title to uppercase
        foundBook = foundBook.toUpperCase();

        // Exit the loop since we found the book
        break;
    }
}

// Log the length of the found book (if it exists) using optional chaining
console.log(foundBook?.length);

/**
 * ======================= SOLUTION CHALLENGE 2
 */

// 1. Order Status

// Declare a variable `orderStatus` with a union type that can only be one of three string literals: 'processing', 'shipped', or 'delivered'.
// Initialize it with the value 'processing'.

// Declare `orderStatus` with a union type and initialize it with 'processing'.
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';

// Update the value of `orderStatus` to 'shipped'.
orderStatus = 'shipped';

// Read the value of `orderStatus` in a meaningful way.
if (orderStatus === 'shipped') {
    console.log('Your order has been shipped!');
}

// Update the value of `orderStatus` to 'delivered'.
orderStatus = 'delivered';

// Read it again.
if (orderStatus === 'delivered') {
    console.log('Your order has been delivered!');
}


/**
 *  ARRAYS - FUNDAMENTALS
 */

let prices: number[] = [100, 75, 42, 21, 60];

// Example: Read and use `prices`
console.log('Prices:', prices); // Output the array

let fruit: string[] = ['apple', 'orange'];

// Example: Use `fruit`
fruit.forEach((f) => console.log('Fruit:', f)); // Log each fruit

let array: (string | boolean)[] = ['apple', true, 'orange', false];

// Example: Use `array`
console.log('Mixed Array:', array); // Log the entire array


/**
 * ======================= SOLUTION CHALLENGE 3
 */

// 1. Temperatures
let temperatures: number[] = [20, 38, 16];
console.log(temperatures);

// TypeScript Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// temperatures.push('56'); // This will cause an error

// Fix: Push a number instead
temperatures.push(56); // Correct type
console.log(temperatures);

// 2. Colors
let colors: string[] = ['blue', 'red', 'yellow'];

// TypeScript Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
// colors.push(true); // This will cause an error

// Fix: Push a string instead
colors.push('green'); // Correct type
console.log(colors);

// 3. Mixed Array
let mixedArray: (number | string)[] = [20, 'blue', 38, 'yellow'];
console.log(mixedArray);

// TypeScript Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// mixedArray.push(true); // This will cause an error

// Fix: Only push `number` or `string` values
mixedArray.push(42); // Correct type
mixedArray.push('green'); // Correct type
console.log(mixedArray);




