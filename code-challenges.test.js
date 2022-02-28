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

// array1 concat array2 
// console log arrays times 3
// having a had time with jest and just code layout i thought doing the example may help but its not i really feel like i need to go over this more im not sure if i just dont know exactly what to do or if im just doubting myself i cant seem to commit to a way of laying out any of these codes i thought more words and the comment texts working it out in there would help but falling short 

const arrays = numbersArray1.concat(numbersArray2)


{
    console.log(arrays * 3)
}


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// if (num1) is divisible three 
// then return "(numb1) is divisable by three"
// if (num2) is divisible three
// then return "(numb2) is divisable by three"
// if (num3) is divisible three 
// then return "(numb3) is divisable by three"

const if (numb1) is % 3  { return ""

}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// randomnouns1 concat randomnous2 equals words
// words equals lotswords split
// words map create function
// return word index of zero touppercase
// join

var words = randomNouns1.concat(randomNouns2)
var lotswords = words.split()

words.map() => {
    return [0].toUpperCase().join(" ");
}



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.


// ive been thinking about how to finish this code but java is getting to me like all those jumpstart people today bash my head a few times on the keyboard and sleep maybe the code will work its way into this test by osmosis jones
// the only way i can see this coming together is taking all the consts and running them through a loop that tells you if the vowel is in the string or not then running that through an indexof or a less than greater than index of loop in a function but i'm having a lot of trouble thinking of how even to begin that 


if (vowelTester1.includes("e"))
(vowelTester2.includes("a"))
(vowelTester3.includes("a"))
console.log (.indexof(" "))