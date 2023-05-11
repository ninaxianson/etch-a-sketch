const resetBtn = document.getElementById('reset-btn');
let board = document.getElementById("grid");
let createBoardBtn = document.getElementById("popup");
let color = "black";
let click = false;

document.querySelector("body").addEventListener("click", function(e) {
  if (e.target.className != "BUTTON"){
    click = !click;
    let draw = document.getElementById('draw');
    if (click) {
      draw.innerText = "Draw"
    } else {
      draw.innerText = "Pen Paused"
    }
  }
})

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  let numOfDivs = size * size;
  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let userInput = prompt("Enter the board size:");
  let message = document.getElementById("message");
  if (userInput === "" || userInput < 1 || userInput > 100) {
    message.textContent = "Please enter a valid number between 1 and 100";
  } else {
    message.innerText = "Click to pause pen";
    return userInput;
  }
}

function colorDiv() {
  if(click ){
   if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}
}

function setColor(colorChoice) {
  color = colorChoice;
}
function resetBtnHandler() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

createBoardBtn.addEventListener("click", function () {
  let size = getSize();
  createBoard(size);
});

resetBtn.addEventListener('click', resetBtnHandler);