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

/**
 *  OBJECTS - FUNDAMENTALS
 */

// Car example
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue'; // Error: Property 'color' does not exist on type '{ brand: string; year: number }'

// Use car1 to avoid the "never read" error
let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
console.log(car1.brand); // Use the variable

// let car2: { brand: string; year: number } = { brand: 'audi' }; // Error: Property 'year' is missing

// Items example
let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// // Create a new object with the updated title
// items[0] = { ...items[0], title: 'new book' };
// console.log(items[0].title); // Output: new book

// Remove `readonly` to allow modifications
let items: { title: string; cost?: number }[] = [book, pen, notebook];

// Now this works
items[0].title = 'new book';
console.log(items[0].title); // Output: new book

/**
 * ======================= SOLUTION CHALLENGE 4
 */

// 1: Create the bike Object
let bike: { brand: string, year: number } = { brand: 'toto', year: 2021 };

// Try to assign a string to the year property (this will cause an error)
// bike.year = '2022'; // Error: Type 'string' is not assignable to type 'number'.

// Correct: Assign a number to the year property
bike.year = 2022;

// 2: Create the laptop Object
let laptop: { brand: string, year: number } = { brand: 'toto', year: 2021 };
console.log(laptop.brand); // Use the variable to avoid the "never read" error

// let laptop2: { brand: string, year: number } = { brand: 'toto' }; // Error: Property 'year' is missing.

// 3. Create Products
let product1 = { title: 'Shirt', price: 20 };
let product2 = { title: 'Pants' };
let products: { title: string; price?: number }[] = [product1, product2];
console.log(products); // Use the variable to avoid the "never read" error

// Try to add an object with a price property of type string (this will cause an error)
// products.push({ title: 'Shoes', price: 'expensive' }); // Error: Type 'string' is not assignable to type 'number'.


/**
 *  FUNCTIONS- FUNDAMENTALS
 */

function sayHi(name: string){
    console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi('Belvinard');
// sayHi(3)
// sayHi('peter', 'random');

function calculateDiscount(price: number): number{
    // price.toUpperCase();
    const hasDiscount = true;
    if(hasDiscount){
        return price;
        // return 'Discount Applied';
    }

    return price * 0.9;

}

const finalPrice = calculateDiscount(500);
console.log(finalPrice);

// "any" example
function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
}
    const result = addThree(2);
    const someValue = result;
console.log(someValue);


// run time error
// someValue.myMethod();


/**
 * ======================= SOLUTION CHALLENGE 5
 */
// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

// Step 1: Create an array of names
let arrayNames: string[] = ["toto", "zoa", "Yapo", "Rico"];

// Step 2: Write a function to check if a name exists in the array
function checkNameInArray(name: string): boolean {
    for (let tempName of arrayNames) {
        if (tempName === name) { // Check if the current name matches the input name
            return true; // Return true if the name is found
        }
    }
    return false; // Return false if the name is not found
}

// Step 3: Use the function to check for various names and log the results
console.log(checkNameInArray("toto")); // true
console.log(checkNameInArray("Yapo")); // true
console.log(checkNameInArray("Alice")); // false
console.log(checkNameInArray("Rico")); // true
console.log(checkNameInArray("John")); // false