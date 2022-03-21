// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
 //console.log(cohort.split(""))

// a) Your answer:
// This code will "split" the string "Alpha 2022" into an array.
// Output --> ["A", "l", "p", "h", "a", 2, 0, 2, 2]

// b) Verify and explain: 
// I was right becuase the split command turns and string into an array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: 
//This code will take, the information of the students name and present it in a greeting. Structured either "Hello,(students name information) LEARN Student" or "Hello, LEARN Student (students name information)".


// b) Verify and explain: 
//I was wrong because, I didnt notice the fact that "LEARN Student" is undefined. I need to pay closer attention, to if everything is valued or defined in the code. If it was defined correctly I believe, the code would come out as stated above.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 //console.log(multBy2)

// a) Your answer: 
//This should log the array provided and times each value by 2.

// b) Verify and explain: 
// I was wrong because "value" is undefined. if defined it would run like stated above.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: 
// This should "filter" out 12 and 14 because it is an even number. Then console log the array above with only odd numbers.
// Output --> [11, 13, 15]

// b) Verify and explain:

// I was correct. The resulting math removes all the numbers, that are either divisable by 2 or have remainder of zero. Removing both 12 and 14.
// Output --> [11, 13, 15]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 //console.log(myCodingSkills.languages[0])

// a) Your answer: I think it will console log Javascript, because its on the 0 of the index. Under languages for the address of the information of the subsection myCodingSkills/languages. I also i question if databases and versionControls values need brackets, or not being alone in their own sections of the array.

// b) Verify and explain: I was correct because its at the 0 index of the subset information languages.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
