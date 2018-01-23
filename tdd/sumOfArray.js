function sum(firstInputArray, secondInputArray) {
    if (arrayLengthEqual(firstInputArray, secondInputArray) === false){
        return null;
    }
    var index;
    var resultArray = [];
    for (index = 0; index < firstInputArray.length; index++) {
        resultArray[index] = firstInputArray[index] + secondInputArray[index];
    }
    // console.log(typeof resultArray);

    return resultArray;



}

function arrayLengthEqual(firstInputArray, secondInputArray){
    if (firstInputArray.length === secondInputArray.length){
        return true;
    } else {
        console.log("Size Mismatch happened! ");
        return false;
    }
}

function checkEqual(firstInputArray, secondInputArray) {
    if (arrayLengthEqual(firstInputArray, secondInputArray) === false) {
        return false;
    }
    for (let index = 0; index < firstInputArray.length; index++) {
        if (firstInputArray[index] !== secondInputArray[index]){
            console.log("Array Content Mismatch Happened! ");
            return false;
        }
    }
    return true; // if this line execute that implies everything is fine.
}


console.log("Should pass the base test case ", checkEqual(sum([1,2,3], [2,4,7]), [3,6,10]));
console.log("Should pass the failing test case ", sum([1], [2,3]) === null);
console.log("Should pass the failing test case ", sum([1], [2,3]) === null);
