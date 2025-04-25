const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");

let currentPlayer = "A";
let board = Array(9).fill("");

function createBoard() {
  boardElement.innerHTML = "";
  board.forEach((value, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = value;
    cell.addEventListener("click", () => handleClick(index));
    boardElement.appendChild(cell);
  });
}

function handleClick(index) {
  if (board[index] !== "" || checkWinner()) return;
  board[index] = currentPlayer;
  currentPlayer = currentPlayer === "A" ? "B" : "A";
  updateBoard();
}

function updateBoard() {
  createBoard();
  const winner = checkWinner();
  if (winner) {
    statusElement.textContent = `${winner} برنده شد!`;
  } else if (board.every(cell => cell !== "")) {
    statusElement.textContent = "مساوی!";
  } else {
    statusElement.textContent = `نوبت ${currentPlayer}`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // Rows
    [0,3,6],[1,4,7],[2,5,8], // Columns
    [0,4,8],[2,4,6]          // Diagonals
  ];
  for (const [a, b, c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function changeBackground(index) {
  const backgrounds = [
    "url('bg1.jpg')",
    "url('bg2.jpeg')",
    "url('bg3.jpeg')"
  ];
  document.body.style.backgroundImage = backgrounds[index - 1];
}

createBoard();
updateBoard();
