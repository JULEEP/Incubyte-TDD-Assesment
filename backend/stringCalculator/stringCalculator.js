// Define a function named 'add' that takes a parameter 'numbers'
function add(numbers) {
    // Step 1: Return 0 for an empty string
    if (numbers === "") return 0; 

    // Step 2: Check for custom delimiter declaration
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        // The format for the custom delimiter is "//[delimiter]\n[numbers…]"
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2); // Get the custom delimiter after "//"
        numbers = parts.slice(1).join("\n"); // Join remaining parts as they could contain numbers
    }

    // Step 3: Split numbers using the specified delimiter (including new lines)
    const nums = numbers.split(new RegExp(`[${delimiter}\n]`));

    // Step 4: Convert strings to numbers, handle negative numbers, and sum them
    const negatives = []; // Array to hold negative numbers
    const sum = nums.reduce((acc, num) => {
        const parsedNum = parseInt(num, 10) || 0; // Parse the number
        if (parsedNum < 0) {
            negatives.push(parsedNum); // Store negative numbers
        }
        return acc + parsedNum; // Sum the numbers
    }, 0);

    // Step 5: Throw an error if there are negative numbers
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    return sum; // Return the total sum
}

// Export the 'add' function as a module so it can be imported and used in other files
module.exports = { add };
