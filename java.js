
let humanscore = 0
let botscore = 0


    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
    let bot = choices[Math.floor(Math.random() * 3)];
    return bot

}


function playRound() {
    const humanchoice = prompt("Pick one bitch! Rock, Paper or Scissors?").toLowerCase();
    const botchoice = getComputerChoice();
    if (humanchoice === botchoice) 
    {
        console.log("Power is evenly matched!")
    }

    else if 
        (humanchoice === "rock" && botchoice === "scissors" ||
            humanchoice === "scissors" && botchoice === "paper" ||
            humanchoice === "paper" && botchoice === "rock") {
            console.log("you smashed them!") 
            humanscore ++; }

            else if 
            (botchoice === "rock" && humanchoice === "scissors" ||
                botchoice === "scissors" && humanchoice === "paper" ||
                botchoice === "paper" && humanchoice === "rock") {
                console.log("get fucked on!")
                botscore ++; }
        }
    
    


playRound()