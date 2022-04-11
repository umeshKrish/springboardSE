//double values
function doubleValuesWithMap(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}

//times index
function valTimesIndex(arr) {
    return arr.map(function (val, i) {
        return val * i;
    });
}

//extract key
function extractKey(obj, key) {
    return obj.map(function (val) {
        //Return an array with all the values of key
        let newArr = [];
        newArr.push(val[key]);
        return newArr;
    });
}

//full name
function extractFullName(obj) {
    return obj.map(function (val) {
        let fullName = "";
        let newArr = [];
        fullName = val['first'] + " " + val['last'];
        newArr.push(fullName);
        return newArr;
    });
}