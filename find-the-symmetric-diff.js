function sym(...args) {
  const result = args.reduce((currentVal, previousVal) => {
    const noDuplicates = [...new Set(previousVal)]
    noDuplicates.forEach(val => {
      if (currentVal.has(val)) {
        currentVal.delete(val)
        return
      }
      currentVal.add(val)
    })
    return currentVal
  }, new Set());
  return [...result]
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
