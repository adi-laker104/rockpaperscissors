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

    //STEP 4: Write the logic to play a single round of the game
        //Create a new function named playRound.
            //playRound takes two inputs, the humanChoice and the computerChoice
            //Human WINS if:
                // H is rock and C is scissors
                // H is paper and C is rock
                // H is scissors and C is paper
                     //print "You win, HumanChoice beats ComputerChoice"
                    //humanScore gets increased by 1
            //Computer WINS if:
                // C is rock and H is scissors
                // C is paper and H is rock
                // C is scissors and H is paper
                    //print "You lose, ComputerChoice beats HumanChoice"
                    //computerScore gets increased by 1
            //ELSE tie
                    //print "You picked the same choice as the computer. Tie round!"
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper"))
         {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
         }
        
        else if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper"))
        {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        else {
            console.log("You picked the same choice as the computer. Tie round!");
        }
        //TEST: console.log(computerScore);
        //TEST: console.log(humanScore);
    };

//TEST playRound function
//const humanSelection = getUserChoice();
//const computerSelection = getComputerChoice();
//playRound(humanSelection, computerSelection);