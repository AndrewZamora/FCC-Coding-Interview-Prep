function pairwise(arr, arg) {
  // Store target pair as key and index as value to prevent extra iteration
  let potentialPairs = {};
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const pairKey = arg - element;
    const isPair = potentialPairs[element] !== undefined && potentialPairs[element].length;
    if (isPair) {
      // Add up index sum and remove pair
      sum += index + potentialPairs[element][0];
      potentialPairs[element].splice(0, 1);
    } else {
      // Store pair
      if (potentialPairs[pairKey] === undefined) {
        potentialPairs[pairKey] = [index];
      } else {
        potentialPairs[pairKey] = [...potentialPairs[pairKey], index];
      }
    }
  }
  return sum;
}

console.log(pairwise([1, 1, 1], 2));
// Pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// You may use multiple pairs that have the same numeric elements but different indices.
// Each pair should use the lowest possible available indices.
// Once an element has been used it cannot be reused to pair with another element.
// For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices and values.

// Index 	0 	1 	2 	3 	4
// Value 	7 	9 	11 	13 	15

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

// TESTS:
// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.
