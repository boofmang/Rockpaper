

function getHumanChoice() {
    let answer = prompt("Choose your destiny! Rock / Paper / Scissors ");
    
    if (answer.toLowerCase() === "rock") {
        return("You choose Rock!");
    }
    else if (answer.toLowerCase() === "paper") {
        return("You choose Paper!");
    }
    else if (answer.toLowerCase() === "scissors")
     {
        return("You choose Scissors!") }
        else { return("One of three dumbshit!")}
     }

    







function getComputerChoice() {
    let bot = Math.floor(Math.random() * 3)
    if (bot === 0) {
        return "Paper";
    }
    else if (bot === 1) {
        return "Rock"
    }
    else {
        return "Scissors"
    }



}

