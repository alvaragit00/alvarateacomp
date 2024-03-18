// Helper function to calculate the square of a number
function square(num) {
    return num * num;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(num) {
    return !isEven(num);
  }
  
  // Helper function to find the maximum number in an array
  function findMax(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Testing the helper functions
  console.log(square(5)); // Output: 25
  console.log(isEven(6)); // Output: true
  console.log(isOdd(7)); // Output: true
  console.log(findMax([3, 7, 2, 8, 1])); // Output: 8
  