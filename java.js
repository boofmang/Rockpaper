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

