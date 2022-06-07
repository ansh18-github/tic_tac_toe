console.log("welcome to my tic tac toe");

let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let winMusic = new Audio("win.mp3");


let turn = "X";
let gameOver = false;

//function to change the turn of players
const changeTurn = () => {
          return turn === "X" ? "0" : "X";
}

//function to check the win player
const checkWin = () => {
          let boxtext = document.getElementsByClassName("boxText");
          let win = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [2, 4, 6],
                    [0, 4, 8]
          ];

          win.forEach(ele => {
                    if ((boxtext[ele[0]].innerText === boxtext[ele[1]].innerText) && (boxtext[ele[1]].innerText === boxtext[ele[2]].innerText) && (boxtext[ele[0]].innerText !== '')) {
                              document.querySelector(".info").innerText = boxtext[ele[0]].innerText + " won";
                              
                              gameOver = true;
                              document.getElementsByTagName("img")[0].style.width="200px";
                              document.getElementsByClassName("info")[0].style.fontSize="2rem";
                    
                    }
          })
}

//game logic
bodyMusic= (mu)=>{
         // music.play();
} 


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
          let boxtext = element.querySelector(".boxText");
          element.addEventListener('click', () => {
                    if (boxtext.innerText == '') {
                              boxtext.innerText = turn;
                              turn = changeTurn();
                              turnMusic.play();
                              checkWin();
                              if (!gameOver) {
                                        document.getElementsByClassName("info")[0].innerText = "turn for " + turn;

                              }
                    }

          });
});

// function to reset the game
reset.addEventListener("click", () =>{
          let gameReset= document.querySelectorAll(".boxText");
          Array.from(gameReset).forEach( element => {
           element.innerText=" ";
          });
          turn="X";
          gameover= false;
          document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
          document.getElementsByTagName("img")[0].style.width="0px";
          document.getElementsByClassName("info")[0].style.fontSize="1rem";
});