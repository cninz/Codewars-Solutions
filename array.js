// Sum of positive
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                  // add arr[i] to total
        }
    }
    return total;                         // return total
}

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// Remove String Spaces
function noSpace(x) { return x.split(' ').join('') }

function noSpace(x) {
    return x.replace(/\s/g, '');
}

// Square(n) Sum
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}

// Counting Sheep...
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}

// Abbreviate a Two Word Name

function abbrevName(name) {

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name) {

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

// Convert number to reversed array of digits
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

// Beginner - Lost Without a Map

// Beginner - You only need one

// Fake Binary

// Array plus array

// Sentence Smash

// Sum Mixed Array

// 