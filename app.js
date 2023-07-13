const rockBtn    = document.getElementById("rock-btn");
const paperBtn   = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

let playerImg = document.getElementById("playerImg");
let machineImg = document.getElementById("MachineImg");

let scorePlayerText = document.getElementById("scorePlayerText");
let scoreMachineText = document.getElementById("scoreMachineText");

let newGame = document.getElementById("newGameBtn");

const gameOptions = ["rock", "paper", "scissors"];

let player;
let machine;

let scorePlayer  = 0;
let scoreMachine = 0;

let textResult = document.getElementById("fightText");

scorePlayerText.textContent=scorePlayer;
scoreMachineText.textContent=scoreMachine;


rockBtn.addEventListener("click",()=> {
    playerImg.src = "img/" +gameOptions[0]+".svg";
    playGame(gameOptions[0]);
});

paperBtn.addEventListener("click",()=> {
    playerImg.src = "img/" +gameOptions[1]+".svg";
    playGame(gameOptions[1]);
});

scissorBtn.addEventListener("click",()=> {
    playerImg.src = "img/" +gameOptions[2]+".svg";
    playGame(gameOptions[2]);
});

function playGame(userOption) {
    player = userOption;
    let nRandom = Math.floor(Math.random()*3);
    machine = gameOptions[nRandom];
    machineImg.src = "img/" + gameOptions[nRandom] + ".svg";

    if(player==machine) {
        textResult.textContent = "Empate!";
        checkScore();
    }
    else if(player=="rock" && machine=="scissors") {
        textResult.textContent = "Ganaste!";
        scorePlayer++;
        checkScore();
    }
    else if(player=="paper" && machine=="rock") {
        textResult.textContent = "Ganaste!";
        scorePlayer++;
        checkScore();
    }
    else if(player=="scissors" && machine=="paper") {
        textResult.textContent = "Ganaste!";
        scorePlayer++;
        checkScore();
    }
    else {
        textResult.textContent = "Perdiste!";
        scoreMachine++;
        checkScore();
    }

    if(scorePlayer==3) {
        document.getElementById("final").style.display="block";
        document.getElementById("finalText").textContent="Ganaste!";
        document.getElementById("text1").textContent="Jugador: " + scorePlayer;
        document.getElementById("text2").textContent="Skynet: " + scoreMachine;
        newGame.addEventListener("click",()=>{
            document.getElementById("final").style.display="none";
            scorePlayer=0;
            scoreMachine=0;

            playerImg.src="img/none.svg";
            machineImg.src="img/none.svg";
            checkScore();
            textResult.textContent="Texto!";
        });
    }
    if(scoreMachine==3){
        document.getElementById("final").style.display="block";
        document.getElementById("finalText").textContent="Perdiste!";
        document.getElementById("text1").textContent="Jugador: " + scorePlayer;
        document.getElementById("text2").textContent="Skynet: " + scoreMachine;
        newGame.addEventListener("click",()=>{
            document.getElementById("final").style.display="none";
            scorePlayer=0;
            scoreMachine=0;

            playerImg.src="img/none.svg";
            machineImg.src="img/none.svg";
            checkScore();
            textResult.textContent="Texto!";
        });
    }
}

function checkScore() {
    scorePlayerText.textContent =scorePlayer;
    scoreMachineText.textContent=scoreMachine;
}
