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
            