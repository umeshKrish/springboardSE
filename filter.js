//filter by value
function filterByValue(obj, key) {
    return obj.filter(function (val) {
        return key in val;
    });
}

//find
function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
}

//find in obj
function findInObj(obj, key, value) {
    return obj.filter(function (val) {
        return val[key] === value;
    })[0];
}

//remove vowels
function removeVowels(str) {
    str = str.toLowerCase();
    let splitArr = str.split("");
    return splitArr.filter(function (val) {
        return val != 'a' &&
            val != 'e' &&
            val != 'i' &&
            val != 'o' &&
            val != 'u';
    }).join("");
}

//double odd numbers
function doubleOddNumbers(arr) {
    return arr
        .filter(function (val) {
            return val % 2 !== 0;
        })
        .map(function (val) {
            return val * 2;
        });
}