// STEP 1: Write logic to get computer's choice

// Create function getComputerChoice
    //Function takes no arguments and returns either Rock, Paper, or Scissors
        // Generate a random integer between 0 and 2
            // if integer is 0, return rock
            // if integer is 1, return scissors
            // if integer is 2, return paper

            function getComputerChoice() {
                let randomInt = Math.floor(Math.random()*3);
                //test: 
                    //console.log(randomInt)
                if (randomInt === 0) {
                    return "rock";
                }
                else if (randomInt === 1) {
                    return "scissors";
                }
                else {
                    return "paper";
                }
            };

            //test:
                //console.log(getComputerChoice())

//STEP 2: Write logic to prompt user and get their game action
    //Create function getUserChoice() 
        //Prompt user within the console to type the following:
            //if Rock or rock, return "rock"
            //Paper or paper, return "paper"
            //Scissors or scissors return "scissors"
            //if neither, print invalid input and reprompt user
    
    function getUserChoice() {
        let userInput = prompt("rock, paper, or scissors? Type your choice!",'');
            if (userInput.toLowerCase() === "rock") {
                return "rock";
            }
            else if (userInput.toLowerCase() === "paper") {
                return "paper";
            }
            else if (userInput.toLowerCase() === "scissors") {
                return "scissors";
            }
            else {
                console.log("Invalid input! Try again");
                getUserChoice();
            }
    };

    //test
    //console.log(getUserChoice());

    //STEP 3: Declare the players score variables
        //Create variable for computer score
        //Create variable for human score
    let computerScore = 0;
    let humanScore = 0;

    