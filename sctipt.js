let wins = 0; let loses = 0;
const choices =["papier", "pierre", "ciseaux"];
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const resultRun = document.getElementById("modal-container");
const backgdColor = document.querySelector(".modal-bckground");




function runGame (userChoice) {
 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    // pop up
    var popUp = document.getElementById("modal").style.display = 'block';
    document.getElementById('modal-close').addEventListener('click', function(e) {
    document.getElementById('modal').style.display = 'none'
      })

    switch(userChoice + '_' + computerChoice) {
        case "papier_ciseaux":
        case "pierre_ciseaux":
        case "ciseaux_pierre":
            loses += 1;
            resultRun.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> Tu as perdu !`
            backgdColor.style.backgroundColor = "red";
            break;
        case "papier_pierre":
        case "pierre_ciseaux":
        case "ciseaux_papier":
            wins += 1;
            resultRun.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> Tu as gagné !`
            backgdColor.style.backgroundColor = "green";
            break;
        case "papier_papier":
        case "pierre_pierre":
        case "ciseaux_ciseaux":
            resultRun.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> Egalité`
            backgdColor.style.backgroundColor = "white";
            break;
        
    
    }

    
    gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`;
    
}

window.addEventListener("click", () => runGame(popUp));
paper.addEventListener("click", () => runGame("papier"));
rock.addEventListener("click", () => runGame("pierre"));
scissors.addEventListener("click", () => runGame("ciseaux"));
