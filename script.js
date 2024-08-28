
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


    const container = document.querySelector("body")
    const rockButton = document.createElement("button");
    rockButton.innerText = "Rock";
    container.appendChild(rockButton); 
    const scissorsButton = document.createElement("button");
    scissorsButton.innerText = "Scissors";
    container.appendChild(scissorsButton);
    const paperButton = document.createElement("button");
    paperButton.innerText = "Paper";
    container.appendChild(paperButton);
    const scoreBoard = document.createElement("div");

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper"))
         {
            
            scoreBoard.append(`You win! ${humanChoice} beats ${computerChoice}`);
            const newLine = document.createElement("br");
            scoreBoard.append(newLine);
            humanScore++;
         }
        
        else if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper"))
        {   
            
            scoreBoard.append(`You lose! ${computerChoice} beats ${humanChoice}`);
            const newLine = document.createElement("br");
            scoreBoard.append(newLine);
            computerScore++;
        }
        else {
            scoreBoard.append(`You and computer both picked ${humanChoice}. Tie round!`);
            const newLine = document.createElement("br");
            scoreBoard.append(newLine);
        }
        
        let runningScore = `Human: ${humanScore} - Computer: ${computerScore}`;
        scoreBoard.append(runningScore);
        const newLine = document.createElement("br");
        scoreBoard.append(newLine);
    }


    
    const btns = document.querySelectorAll("button");
    let finalWinner = document.createElement("p")
    btns.forEach((btn) => {    
        btn.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
            playRound(btn.innerText.toLowerCase(), getComputerChoice());
            }
            if (humanScore == 5) {
                finalWinner.textContent = "Human wins!";
                scoreBoard.append(finalWinner);
            }
            if (computerScore == 5) {
                finalWinner.textContent = "Computer wins!";
                scoreBoard.append(finalWinner);
            }
        });
        });
 
    
    container.append(scoreBoard);
       