function selectionSort(array) {
  const swapArrayItems = (arrayToSwap, indexA, indexB) => {
    const previousElementForA = arrayToSwap[indexA];
    arrayToSwap[indexA] = arrayToSwap[indexB];
    arrayToSwap[indexB] = previousElementForA;
  };
  let minValue = { value: array[0], index: null, cycle: 0 };
  let shouldSwap = false;
  do {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (minValue.value > element && index >= minValue.cycle) {
        minValue.value = element;
        minValue.index = index;
        shouldSwap = true;
      }
    }
    if (shouldSwap) {
      swapArrayItems(array, minValue.index, minValue.cycle);
    }
    minValue.cycle += 1;
    minValue.value = array[minValue.cycle];
    shouldSwap = false;
  } while (minValue.cycle < array.length - 1);
  return array;
}
console.log(selectionSort([4, 9, 6, 2, 8, 18]));
// Implement Selection Sort:
// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
// TESTS:
// selectionSort should be a function.
// selectionSort should return a sorted array (least to greatest).
// selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
// selectionSort should not use the built-in .sort() method.
