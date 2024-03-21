# Matrix Task

## Description

This project aims to provide functionality for manipulating matrices.

## Installation

To use this project, you'll need to have Node.js and npm (Node Package Manager) installed on your system.

1. Clone this repository to your local machine: 

2. Navigate to the project directory:

3. Install dependencies:

## Usage

### Running the Application

To run the application, use the following command:

npm start <array>*

This will execute the `index.ts` file using `ts-node`.

* Important: array should not have any whitespaces, therefore:
 [[ 1, 2, 3], [ 0, 5, 6],[ 7, 8, 9]] // bad
 [[1,2,3],[0,5,6],[7,8,9]] // good

Example usage: npm start [[1,2,3],[0,5,6],[7,8,9]]

### Testing

To run tests, use the following command:

npm test

This will execute the Jest test suite.

