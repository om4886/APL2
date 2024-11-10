const readline = require('readline');

// Binary Search Function
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === target) {
            return mid;  // Target found
        }

        if (guess > target) {
            high = mid - 1;  // Search the left half
        } else {
            low = mid + 1;  // Search the right half
        }
    }

    return -1;  // Target not found
}

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for the array and target element
rl.question('Enter the elements of the array, separated by spaces: ', (arrInput) => {
    const arr = arrInput.split(' ').map(Number); // Convert input to array of numbers

    rl.question('Enter the target element: ', (targetInput) => {
        const target = Number(targetInput);

        // Perform binary search
        const result = binarySearch(arr, target);
        if (result !== -1) {
            console.log(`Element found at index ${result}`);
        } else {
            console.log("Element not found");
        }

        rl.close();  // Close the readline interface
    });
});
