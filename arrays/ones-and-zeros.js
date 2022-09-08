// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//     Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// PARAMETERS: an array containing ones and zeros, could be varying to length

// RESULT: an integer equivalent of the binary value represented in the array

// EXAMPLES:
    // Testing: [0, 0, 0, 1] ==> 1
    // Testing: [0, 0, 1, 0] ==> 2
    // Testing: [0, 1, 0, 1] ==> 5
    // Testing: [1, 0, 0, 1] ==> 9
    // Testing: [0, 0, 1, 0] ==> 2
    // Testing: [0, 1, 1, 0] ==> 6
    // Testing: [1, 1, 1, 1] ==> 15
    // Testing: [1, 0, 1, 1] ==> 11

// PSEUDOCODE: take the array and join the elements together into a string and then convert string and return the integer equivalent

const binaryArrayToNumber = arr => {
    console.log(parseInt(arr.join(''), 2))
};

binaryArrayToNumber([1,1,1,1])