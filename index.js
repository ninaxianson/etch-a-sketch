let board = document.getElementById('grid');

function createBoard(size) {
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

let numOfDivs = size * size;

for (let i = 0; i < numOfDivs; i++) {
  let div = document.createElement("div");

  board.insertAdjacentElement("beforeend", div);
}

}