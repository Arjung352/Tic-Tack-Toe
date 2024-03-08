let boxes = document.querySelectorAll(".block");
let reset = document.querySelector(".restart");
let playerO = true;
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let win = document.querySelector(".winner");
let count = 0;
const pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
player1.classList.remove("player1");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      player1.classList.add("player1");
      box.innerText = "O";
      playerO = false;
      player2.classList.remove("player2");
    } else {
      player2.classList.add("player2");
      box.innerText = "X";
      playerO = true;
      player1.classList.remove("player1");
    }
    count++;
    box.disabled = true;
    winner();
    if (!winner()) {
      draw();
    }
  });
});
const winner = () => {
  for (let val of pattern) {
    let pos1val = boxes[val[0]].innerText;
    let pos2val = boxes[val[1]].innerText;
    let pos3val = boxes[val[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        player1.classList.add("player1");
        player2.classList.add("player2");
        if (pos1val === "O") {
          win.innerText = "PLAYER 1 WINS THE GAME!";
          win.classList.remove("winner");
        } else {
          win.innerText = "PLAYER 2 WINS THE GAME!";
          win.classList.remove("winner");
        }
        disable();
        return true;
      }
    }
  }
  return false;
};
const disable = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
reset.addEventListener("click", () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  player1.classList.remove("player1");
  player2.classList.add("player2");
  win.classList.add("winner");
  win.innerText = "";
  count = 0;
});
const draw = () => {
  if (count === 9) {
    win.classList.remove("winner");
    win.innerText = "ITS A DRAW!";
    player1.classList.add("player1");
    player2.classList.add("player2");
  }
};
