function insertionSort(array) {
  let sorted = [];

  for (let index = 0; index < array.length; index++) {
    if (!sorted.length) {
      sorted.push(array[index]);
    } else {
      for (let j = sorted.length - 1; j >= 0; j--) {
        const element = sorted[j];
        if (array[index] > element) {
          sorted.splice(j + 1, 0, array[index]);
          break;
        }
        if (j === 0) {
          sorted.unshift(array[index]);
        }
      }
    }
  }
  return sorted;
}

console.log(insertionSort([5, 4, 33, 2, 8]));

// Implement Insertion Sort
// The next sorting method we'll look at is insertion sort.
// This method works by building up a sorted array at the beginning of the list.
// It begins the sorted array with the first element.
// Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position.
// It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end.
// This algorithm has quadratic time complexity in the average and worst cases.
// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// Tests:
// insertionSort should be a function.
// insertionSort should return a sorted array (least to greatest).
// insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
// insertionSort([5, 4, 33, 2, 8]) should return [2, 4, 5, 8, 33].
// insertionSort should not use the built-in .sort() method.
