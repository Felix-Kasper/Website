JavaScript Utility Functions
Overview

This repository contains a set of foundational JavaScript utility functions developed during early university coursework. The focus is on core programming concepts such as input validation, arithmetic operations, use of rest parameters, and dynamic HTML generation.

The code emphasizes clarity, correctness, and understanding of fundamental language features rather than framework-specific solutions.

Features
Input Validation
Validate numeric input and check for positive values
Safe Arithmetic Operations
Division with explicit handling of division-by-zero
Flexible addition using both arguments and ES6 rest parameters
Dynamic HTML Generation
Create HTML structures from arrays
Generate structured event markup with variable participants
Functions
isPositiveNumber(value)

Checks whether a value is a valid number greater than zero.

dividiere(a, b)

Performs division with safe handling of division by zero.

createHTMLFromArray(startTag, endTag, values)

Generates an HTML string by wrapping array elements in specified tags.

addiere(...args)

Adds an arbitrary number of values using the arguments object.

addiereMitParameter(...numbers)

Adds numbers using modern ES6 rest parameters.

addiereMitParameter1(a, b, ...numbers)

Adds at least two numbers with support for additional inputs.

createHTMLVeranstaltung(name, location, ...participants)

Builds a structured HTML representation of an event with participants.

Technical Highlights
Use of ES6 features (rest parameters)
Understanding of JavaScript internals (arguments object)
Basic defensive programming (input checks, edge cases)
String-based HTML generation logic
Example
addiereMitParameter(1, 2, 3, 4); // 10

createHTMLFromArray("<li>", "</li>", ["A", "B"]);
// "<li>A</li><li>B</li>"
Future Improvements
Replace string concatenation with template literals
Add input validation and error handling
Introduce unit tests
Refactor HTML generation using DOM APIs
Purpose

This project demonstrates a solid understanding of JavaScript fundamentals and serves as a base for more advanced development in front-end and full-stack environments.
