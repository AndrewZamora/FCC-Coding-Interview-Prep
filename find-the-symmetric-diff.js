function sym(...args) {
  function getDiffNums([...a], [...b]) {
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
  const result = args
    .map((arg) => [...new Set(arg)])
    .reduce(getDiffNums(previousValue, currentValue), []);
  return result;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
