function updateInventory(arr1, arr2) {
    let obj = {};
    arr1.forEach((item) => {
        obj[item[1]] = item[0];
    });
    arr2.forEach((item) => {
        if (obj.hasOwnProperty(item[1])) {
            obj[item[1]] += item[0];
            return;
        }
        obj[item[1]] = item[0];
    });

    return Object.entries(obj)
        .sort()
        .map((item) => [item[1], item[0]]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];

updateInventory(curInv, newInv)
