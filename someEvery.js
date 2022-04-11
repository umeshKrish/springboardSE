//has odd number
function hasOddNumber(arr) {
    return arr.some(function (val) {
        return val % 2 !== 0;
    })
}

//has a zero
function hasAZero(num) {
    let arr = Array.from(String(num), Number);
    console.log(num);
    return arr.some(function (val) {
        return val === 0;
    })
}

//only odds
function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
        return val % 2 !== 0;
    })
}

//no duplicates
function hasNoDuplicates(arr) {
    return arr.every(function (val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

//certain key
function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val
    })
}

//certain value
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (val) {
        return val[key] === searchValue;
    })
}