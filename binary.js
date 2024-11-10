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

// Example usage
//const arr = [1, 3, 5, 7, 9, 11, 13];
//const target = 7;

const arr=a[30];
console.log('Enter element in array');
for(int i=1; i<)
const result = binarySearch(arr, target);
if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
