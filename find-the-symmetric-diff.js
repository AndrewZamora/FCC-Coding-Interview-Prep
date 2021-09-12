function sym(...args) {
  const noDoubles = args.map((item) => {
    return [...new Set(item)];
  });
  function getDiffNums(a, b) {
    let result = [];
    a.forEach((item) => {
      const indexOf = b.indexOf(item);
      if (indexOf > -1) {
        b.splice(indexOf, 1);
        return;
      }
      result.push(item);
    });
    return [...result, ...b];
  }
  let result = [];
  const [firstArg] = noDoubles.splice(0, 1);
  result = firstArg;
  for (let index = 0; index < noDoubles.length; index++) {
    result = [...getDiffNums(result, noDoubles[index])];
  }
  return result;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
