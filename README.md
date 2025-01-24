This project stands as an in-depth guide to TypeScript, meticulously covering its fundamental basics and progressing to its more advanced concepts. It starts with basic setup instructions for creating a TypeScript project using Vite and progresses through a series of tutorials covering various TypeScript features and best practices. Key topics include type annotations, type inference, practical applications of type annotation, union types, handling of "any", "unknown", and "never" types, arrays, and objects fundamentals, challenges to reinforce learning, and functions with their complexities.

The project also delves into advanced TypeScript features such as generics, fetching data with TypeScript, working with the Zod library for data validation, understanding TypeScript declaration files, and class-based programming with TypeScript. Each tutorial is designed to provide hands-on experience with TypeScript.

Overall, the project is an in-depth TypeScript learning resource, ideal for developers who wish to gain a thorough understanding of TypeScript, from basic to advanced levels, through practical examples and challenges.


TypeScript is a **powerful tool** that enhances JavaScript development by adding **static typing**, **better tooling**, and **improved code quality**. It’s especially valuable for large-scale projects, team collaboration, and modern web development. By catching errors early and providing a more structured approach to coding, TypeScript helps developers build **robust** and **maintainable** web applications.

--- 

An interface in TypeScript is a **structure** that defines the **shape** of an object.

## Install

```sh
npm create vite@latest typescript -- --template vanilla-ts
```

## Setup

- create src/tutorial.ts
- import tutorial in src/main.ts

```ts
import './tutorial.ts';
```

- write code in tutorial


## Type Annotations

TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties.

```ts
let awesomeName: string = 'belvinard';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;

console.log(awesomeName);

let amount: number = 12;
amount = 12 - 1;
// amount = 'pants';

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'belvinard';
```

## Type Inference

The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are working in the typescript file 😄

```ts
let awesomeName = 'belvinard';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
// awesomeName = 20;
```

## Challenge 1

- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference

## Setup Info

- even with error you can run the project but you won't be able to build it "npm run build"

## Union Type

In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up.

```ts
let tax: number | string = 10;
tax = 100;
tax = '10FCFA';
console.log(`The tax is now: ${tax}`); 

// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';
```

```ts
// fancy name - literal value type
let requestStatus: 'pending' | 'success' | 'error' = 'pending';

requestStatus = 'success';

if (requestStatus === 'success') {
  console.log('The request was successful!');
}

requestStatus = 'error';

if (requestStatus === 'error') {
  console.error('The request failed.');
}
```

## Type - "any"

In TypeScript, the "any" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - "unknown" and "never"

```ts
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let notSure: any = 4;
notSure = 'maybe a string instead';
console.log(notSure);

notSure = false; 
if (typeof notSure === 'boolean') {
  console.log('It is now a boolean:', notSure); 
}

```

## Practical Application of Type Annotation

```ts
const books = ['2025', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '2025') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);
```

The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.

## Challenge 2

- Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
- Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

## Arrays - Fundamentals

In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations.

```ts
let prices: number[] = [100, 75, 42, 21, 60];

// Example: Read and use `prices`
console.log('Prices:', prices); // Output the array

let fruit: string[] = ['apple', 'orange'];

// Example: Use `fruit`
fruit.forEach((f) => console.log('Fruit:', f)); // Log each fruit

let array: (string | boolean)[] = ['apple', true, 'orange', false];

// Example: Use `array`
console.log('Mixed Array:', array); // Log the entire array
```

## Challenge 3

- Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
- Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
- Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.

## Objects - Fundamentals

In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.

```ts
let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property
```

## Challenge 4

- Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
- Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
- Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
