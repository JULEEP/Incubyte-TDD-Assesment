function add(numbers) {
    // Step 1: Return 0 for an empty string
    if (numbers === "") return 0;

    // Step 2: Check for custom delimiter declaration
    let delimiters = [",", "\n"]; // Default delimiters include comma and newline
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        const customDelimiter = parts[0].substring(2);
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
        return acc + (isNaN(parsedNum) ? 0 : parsedNum); // Sum the numbers
    }, 0);

    // Step 6: Throw an error if there are negative numbers
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    return sum; // Return the total sum
}

// Export the 'add' function as a module so it can be imported and used in other files
module.exports = { add };
