// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string.Notice the colon and space in between.

//     Examples: (Input-- > Output)

//     []-- > []
//     ["a", "b", "c"]-- > ["1: a", "2: b", "3: c"]

// PARAMETERS: an array of varying length containing string values

// RESULTS: an array of strings containing the original values with the line numberand a colon

// EXAMPLES: 
    // it("test", () => {
    //     assert.deepEqual(number([]), [], 'Empty array should return empty array');
    //     assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
    // });

// PSEUDOCODE: iterate over each array valuen and prepend the line number starting with 1, and add a colon and a space between the line number and the value


var number=function(array) {
    console.log(array.map((alpha,index) => `${index + 1}: ${alpha}`))
}

number(['a','b','c'])