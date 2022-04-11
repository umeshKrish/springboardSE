//forEach

//Doubles
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });
    return newArr;
}

//Evens
function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        if (val % 2 == 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

//First and Last
function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        let firstLast = "";
        for (let i in val) {
            if (i == 0) {
                firstLast += val[i];
            }
            else if (i == val.length - 1) {
                firstLast += val[i];
                newArr.push(firstLast);
            }
        }
    });
    return newArr;
}

//Key Value
function addKeyAndValue(arr, newKey, newValue) {
    arr.forEach(function (val) {
        val[newKey] = newValue;
    });
    return arr;
}

//Vowel count
function vowelCount(str) {
    str = str.toLowerCase();
    let splitArr = str.split("");
    let obj = {};
    let usedVowels = [];
    splitArr.forEach(function (val) {
        let count = 0;
        if (val == 'a' || val == 'e' || val == 'i' || val == 'o' ||
            val == 'u') {
            if (usedVowels.includes(val)) {
                //do nothing
            }
            else {
                for (i in str) {
                    if (str[i] == val) {
                        count++;
                    }
                }
                //Add val as a key and count as a value
                obj[val] = count;
            }
        }
    });
    return obj;
}