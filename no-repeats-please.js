function permAlone(str) {
  const arr = str.split('');
  let output = [];
  let regex = /\S*(\w)(?=\1+)\S*/;
  const generatePermutations = (n, heapArr) => {
    // This was not intuitive. I had to look up Heap's algorithm to figure this out.
    // Also, understanding recursion and call stacks helped me understand what was going on in this function 
    // https://en.wikipedia.org/wiki/Heap%27s_algorithm
    const swapArrayItems = (arrayToSwap, indexA, indexB) => {
      const previousElementForA = arrayToSwap[indexA];
      arrayToSwap[indexA] = arrayToSwap[indexB];
      arrayToSwap[indexB] = previousElementForA;
    }
    if (n === 1) {
      const permutation = heapArr.slice().join('');
      if (!regex.test(permutation)) {
        output.push(permutation);
      }
      return;
    }

    generatePermutations(n - 1, heapArr);

    for (let index = 0; index < n - 1; index++) {
      if (n % 2 === 0) {
        swapArrayItems(heapArr, index, n - 1)
      } else {
        swapArrayItems(heapArr, 0, n - 1)
      }
      generatePermutations(n - 1, heapArr)
    }
  }

  generatePermutations(arr.length, arr.slice());

  return output.length;
}

console.log(permAlone('abfdefa'));

// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations(aab, aab, aba, aba, baa, baa), but only 2 of them(aba and aba) don't have the same letter (in this case a) repeating.
// Tests:
// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.

