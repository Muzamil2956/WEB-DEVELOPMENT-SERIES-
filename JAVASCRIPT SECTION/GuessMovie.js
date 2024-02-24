// create a logic if the user enters a movie name is correct guess or not
let movie = "Avatar";
let guess = prompt("Enter Guess");
while (guess != movie && guess != "quit")  {
    console.log("wrong");
    guess =  prompt("Enter Guess");
}