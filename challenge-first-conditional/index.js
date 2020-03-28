// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

//const time = "morning" // could be "afternoon", "evening" and "night"

const morning = false;
const afternoon = false;
const evening = false;
const night = false;

if (morning) {
    console.log("Good Morning!");
} else if (afternoon) {
    console.log("Good Afternoon!");
} else if (evening) {
    console.log("Good Evening!");
} else if (night) {
    console.log("Good Night!");
} else {
    console.log("Good Day!");
}

const time = "morning";

switch (time) {
    case "morning":
        console.log("Good Morning!");
         break;
    case "afternoon":
        console.log("Good Afternoon!");
         break;
    case "evening":
        console.log("Good Evening!");
         break;
    case "night":
        console.log("Good Night!");
        break;
    default:
        console.log("Good Day!");
}


