// stringCalculator.test.js

const { add } = require('../stringCalculator/stringCalculator');

// Test cases to verify functionality
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return 1 for "1"', () => {
    expect(add("1")).toBe(1);
});

test('should return 6 for "1,5"', () => {
    expect(add("1,5")).toBe(6);
});

// New test case for handling new lines
test('should return 6 for "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
});

// New test case for handling custom delimiters
test('should return 3 for "//;\n1;2"', () => {
    expect(add("//;\n1;2")).toBe(3); // Expect 1 + 2 = 3
});

// New test case for handling custom delimiters with new lines
test('should return 6 for "//;\n1;2\n3"', () => {
    expect(add("//;\n1;2\n3")).toBe(6); // Expect 1 + 2 + 3 = 6
});

// Test case for negative numbers
test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('should throw an error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});

// New test case for handling different custom delimiters
test('should return 10 for "//|\n2|3|5"', () => {
    expect(add("//|\n2|3|5")).toBe(10); // Expect 2 + 3 + 5 = 10
});

// New test case for handling different custom delimiters with mixed delimiters
test('should return 10 for "//;\n2;3\n5"', () => {
    expect(add("//;\n2;3\n5")).toBe(10); // Expect 2 + 3 + 5 = 10
});
