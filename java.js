
    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
    let bot = choices[Math.floor(Math.random() * 3)];
    return bot

}

let humanscore = 0;
let botscore = 0;


function playGame() {



for(let i=0; i<5; i++) {
    playRound()
}

if (i=5) {
    console.log("Game Over Motherfucker! the score is, YOUR DUMB ASS:" + `${humanscore}` + "COMPUTER:" + `${botscore}`)
    let answer = prompt("Want to go again bitch ass?" + "" + "YES/NO").toLowerCase();
    if (answer === "yes") 
        {
        playGame()
    }
else if (answer === "no") {
    alert("Well fuck off then!")
}

else {
    alert("Really though? Figure it out")
}
}



}
function playRound() {

    let humanchoice = prompt("Pick one bitch! Rock, Paper or Scissors?").toLowerCase();
    let botchoice = getComputerChoice();

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

                else{
                    alert("one of three dumshit")
                    playRound()
                }
        }
    
        playGame()