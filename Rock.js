let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const para = document.querySelector("#msg");
const userScorePara = document.querySelector("#score-us")
const compScorePara = document.querySelector("#score-co")

//How to genrate the Computer choice

const genCompChoice = () =>{
    //rock, paper, scissors 
    const option = ["rock",  "paper", "scissor"];
    const Idx = Math.floor(Math.random() * 3);
    return option[Idx];
}

const drawGame = () =>{
    console.log("Game is Draw");
    para.innerText = "Game is Draw. Play Again";
    para.style.backgroundColor = "Green"
    para.style.color = "white"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        para.innerText = `You Win! Your ${userChoice} beat ${compChoice}`;
        para.style.backgroundColor = "yellow"
        para.style.color = "Black"
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        para.innerText = `You lose. ${compChoice} beat your ${userChoice}`;
        para.style.backgroundColor = "Pink"
        para.style.color = "red"
    }
}

const playGame = (userChoice) => {
    console.log("User chocie =" ,userChoice);
    //Genrate the computer choice
    const compChoice = genCompChoice();
    console.log("computers chocie =" ,compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
        else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choice.forEach ((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

