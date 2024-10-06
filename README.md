# Incubyte-TDD-Assessment

## 🧮 String Calculator

### Overview

The String Calculator is a simple implementation that takes a string of numbers and returns their sum. This project demonstrates Test-Driven Development (TDD) principles while handling various delimiters and negative numbers.

### Features

1. **Handles Empty String**:  
   - **Input**: `""`  
   - **Output**: `0`  
   - **Description**: Returns 0 for an empty input.

2. **Handles Single Number**:  
   - **Input**: `"1"`  
   - **Output**: `1`  
   - **Description**: Returns the number itself.

3. **Handles Multiple Numbers**:  
   - **Input**: `"1,5"`  
   - **Output**: `6`  
   - **Description**: Sums numbers in a comma-separated string.

4. **Handles New Line as Delimiter**:  
   - **Input**: `"1\n2,3"`  
   - **Output**: `6`  
   - **Description**: Supports both commas and new lines.

5. **Supports Custom Delimiters**:  
   - **Input**: `"//;\n1;2"`  
   - **Output**: `3`  
   - **Input**: `"//|\n2|3|5"`  
   - **Output**: `10`  
   - **Description**: Allows custom delimiters.

6. **Handles Negative Numbers**:  
   - **Input**: `"1,-2,3"`  
   - **Throws**: `Error: negative numbers not allowed: -2`  
   - **Description**: Throws an exception for negative numbers.

### Tech Stack

- **Node.js**: JavaScript runtime for executing server-side code.
- **npm**: Package manager for managing dependencies.
- **Express**: Framework for building APIs and web applications.
- **Mocha / Jest**: Testing frameworks for running tests.


## Installation

To get started with the String Calculator, follow these installation steps:

1. **Install Node.js**:
   - Make sure you have Node.js installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).

2. **Create a New Project Directory**:
   ```bash
   mkdir string-calculator
   cd string-calculator

3. **Initialize npm: Initialize a new npm project**:
   npm init -y

4. **Install Required Dependencies**
   npm install express
   npm install --save-dev mocha   # for Mocha
   # or
   npm install --save-dev jest     # for Jest

5. **Running the Application**
   npm server.js

6. **Running Tests**
   npm test


### Conclusion

The String Calculator project showcases the power of Test-Driven Development in creating robust and maintainable code. By implementing essential features such as handling various delimiters and managing negative numbers, this calculator not only demonstrates fundamental programming skills but also emphasizes best practices in software development. 

 Happy coding! 🚀
