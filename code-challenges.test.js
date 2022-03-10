// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


// a describe method that lists the name of the function OR naming of the particular test.
describe("divide", () => { 

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
  

        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"


      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(divide(num1)).toEqual("15 is divisible by three")
      expect(divide(num2)).toEqual("0 is divisible by three")
      expect(divide(num3)).toEqual("-7 not divisible by three")
    })
  })
//good failure
// FAIL  ./code-challenges.test.js
// divide
// ✕ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)

// ● divide › takes a number as an argument and decides if the number is evenly divisble by three or not.

// ReferenceError: divide is not defined



// b) Create the function that makes the test pass.
//it passed
// make a function named divide
// looks at a paramater (number)
// use modulo operator to determine
// if use string interpolation `${number}` is divisable by 3 



const divide = (number) => {
    if(number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} not divisible by three`
    }
}

//   divide
//     ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


//------------notes
//if() {}
//else{}
//const name = (number) => {return}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// a describe method that lists the name of the function OR naming of the particular test.
describe("upper", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes in an array of words and returns an array with all the words capitalized.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(upper(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(upper(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
  })

// good fail
//   Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// b) Create the function that makes the test pass.

// name function upper
//takes in paramater array 
// returns an array of the same length
//with the first letter capitolized
//i need to find something that will allow me to split this word
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

const upper = (array) => { 
    
    return array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
}





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.



// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.


// a describe method that lists the name of the function OR naming of the particular test.
describe("vowelIndex", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes in a string and logs the index of the first vowel.", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(vowelIndex(vowelTester1)).toEqual(1)
      expect(vowelIndex(vowelTester2)).toEqual(0)
      expect(vowelIndex(vowelTester3)).toEqual(2)
    })
  })


   const vowelIndex = (string) => { 
    let vowel = (["A","a","E","U","e","u","i","I","O","o"])
    for (let i=0; i<string.length; i++){
        if (vowel.includes(string[i])=== true) {
        return (i)
    }

   }
   }


//    PASS  ./code-challenges.test.js
//    divide
//      ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (5 ms)
//    upper
//      ✓ that takes in an array of words and returns an array with all the words capitalized. (2 ms)
//    vowelIndex
//      ✓ that takes in a string and logs the index of the first vowel. (1 ms)
 
//  Test Suites: 1 passed, 1 total
//  Tests:       3 passed, 3 total