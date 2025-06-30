const board = document.getElementById("board");
const status = document.getElementById("status");
let currentPlayer = "X";
let cells = Array(9).fill("");

function createBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.innerText = cell;
    cellDiv.addEventListener("click", () => makeMove(index));
    board.appendChild(cellDiv);
  });
}

function makeMove(index) {
  if (cells[index] !== "" || checkWinner()) return;
  cells[index] = currentPlayer;
  createBoard();

  if (checkWinner()) {
    status.innerText = `${currentPlayer} wins! 🎉`;
  } else if (!cells.includes("")) {
    status.innerText = "It's a draw! 🤝";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.innerText = `${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  return wins.some(([a, b, c]) =>
    cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
  );
}

function resetGame() {
  currentPlayer = "X";
  cells = Array(9).fill("");
  status.innerText = `${currentPlayer}'s turn`;
  createBoard();
}

resetGame(); // initialize
