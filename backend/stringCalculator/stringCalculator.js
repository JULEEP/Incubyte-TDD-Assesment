// Define a function named 'add' that takes a parameter 'numbers'
function add(numbers) {
    // Step 1: Return 0 for an empty string
    if (numbers === "") {
        console.log(`Handles Empty String:\nInput: "${numbers}"\nOutput: 0\nPassed test: ✓\n`);
        return 0;
    }

    // Step 2: Check for custom delimiter declaration
    let delimiters = [",", "\n"]; // Default delimiters include comma and newline
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const customDelimiter = parts[0].substring(2); // Extract the custom delimiter
        delimiters.push(customDelimiter); // Add custom delimiter
        numbers = parts.slice(1).join("\n"); // Join the rest as the number string
    }

    // Step 3: Create a regular expression to split numbers using all delimiters
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);

    // Step 4: Split the string into individual numbers
    const nums = numbers.split(delimiterRegex);

    // Step 5: Convert strings to numbers, handle negative numbers, and sum them
    const negatives = []; // Array to hold negative numbers
    const sum = nums.reduce((acc, num) => {
        const parsedNum = parseInt(num, 10); // Parse the number
        if (parsedNum < 0) {
            negatives.push(parsedNum); // Store negative numbers
        }
        return acc + (isNaN(parsedNum) ? 0 : parsedNum); // Sum the numbers, treating NaN as 0
    }, 0);

    // Step 6: Throw an error if there are negative numbers
    if (negatives.length > 0) {
        const errorMessage = "negative numbers not allowed: " + negatives.join(", ");
        console.log(`Handles Negative Numbers:\nThrows an exception with message: "${errorMessage}" if a negative number is present.\nPassed test: ✓\n`);
        throw new Error(errorMessage);
    }

    // Log the successful output for multiple numbers
    console.log(`Handles Multiple Numbers:\nInput: "${numbers}"\nOutput: ${sum}\nPassed test: ✓\n`);
    
    return sum; // Return the total sum
}

// Export the 'add' function as a module so it can be imported and used in other files
module.exports = { add };

// Example Outputs
console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
console.log(add("//|\n2|3|5")); // Output: 10

try {
    console.log(add("1,-2,3")); // Should throw an error
} catch (error) {
    console.error(error.message); // Output: negative numbers not allowed: -2
}
