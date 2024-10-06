// Import the 'add' function from the stringCalculator module
const { add } = require('../stringCalculator/stringCalculator');

// Test case to check if the function returns 0 for an empty string
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0); // Expect the output to be 0 when the input is an empty string
});

// Test case to check if the function returns 1 for the input "1"
test('should return 1 for "1"', () => {
    expect(add("1")).toBe(1); // Expect the output to be 1 when the input is "1"
});

// Test case to check if the function correctly sums "1" and "5" to return 6
test('should return 6 for "1,5"', () => {
    expect(add("1,5")).toBe(6); // Expect the output to be 6 when the input is "1,5"
});
