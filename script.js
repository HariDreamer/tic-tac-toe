// // // const board = document.getElementById("board");
// // // const status = document.getElementById("status");
// // // const clickSound = document.getElementById("clickSound");
// // // const winSound = document.getElementById("winSound");
// // // const scoreXDisplay = document.getElementById("scoreX");
// // // const scoreODisplay = document.getElementById("scoreO");

// // // let currentPlayer = "X";
// // // let cells = [];
// // // let gameOver = false;
// // // let scoreX = 0;
// // // let scoreO = 0;

// // // const emojis = {
// // //   X: "😎",
// // //   O: "😍",
// // // };

// // // function createBoard() {
// // //   board.innerHTML = "";
// // //   gameOver = false;
// // //   cells = Array(9).fill(null);

// // //   for (let i = 0; i < 9; i++) {
// // //     const cell = document.createElement("div");
// // //     cell.className = "cell";
// // //     cell.dataset.index = i;
// // //     cell.addEventListener("click", handleClick);
// // //     board.appendChild(cell);
// // //   }

// // //   status.textContent = `Let's go! ${emojis[currentPlayer]} starts first!`;
// // // }

// // // function handleClick(e) {
// // //   const index = e.target.dataset.index;

// // //   if (cells[index] || gameOver) return;

// // //   clickSound.play();
// // //   cells[index] = currentPlayer;
// // //   e.target.textContent = emojis[currentPlayer];

// // //   if (checkWin(currentPlayer)) {
// // //     winSound.play();
// // //     gameOver = true;
// // //     status.textContent = `${emojis[currentPlayer]} wins! 🎉`;
// // //     if (currentPlayer === "X") scoreX++;
// // //     else scoreO++;
// // //     updateScore();
// // //     return;
// // //   }

// // //   if (cells.every((cell) => cell)) {
// // //     status.textContent = "It's a tie! 🤝";
// // //     return;
// // //   }

// // //   currentPlayer = currentPlayer === "X" ? "O" : "X";
// // //   status.textContent = `Your turn, ${emojis[currentPlayer]}!`;
// // // }

// // // function checkWin(player) {
// // //   const winPatterns = [
// // //     [0, 1, 2],
// // //     [3, 4, 5],
// // //     [6, 7, 8], // rows
// // //     [0, 3, 6],
// // //     [1, 4, 7],
// // //     [2, 5, 8], // cols
// // //     [0, 4, 8],
// // //     [2, 4, 6], // diagonals
// // //   ];

// // //   return winPatterns.some((pattern) =>
// // //     pattern.every((index) => cells[index] === player)
// // //   );
// // // }

// // // function updateScore() {
// // //   scoreXDisplay.textContent = scoreX;
// // //   scoreODisplay.textContent = scoreO;
// // // }

// // // function resetGame() {
// // //   currentPlayer = "X";
// // //   createBoard();
// // // }

// // // createBoard();

// // // -------------------------------------------------------------------------------

// // const board = document.getElementById("board");
// // const status = document.getElementById("status");
// // const clickSound = document.getElementById("clickSound");
// // const winSound = document.getElementById("winSound");
// // const scoreXDisplay = document.getElementById("scoreX");
// // const scoreODisplay = document.getElementById("scoreO");

// // let currentPlayer = "X"; // Player is X
// // let cells = [];
// // let gameOver = false;
// // let scoreX = 0;
// // let scoreO = 0;

// // const emojis = {
// //   X: "😎", // Player
// //   O: "🤖", // AI
// // };

// // function createBoard() {
// //   board.innerHTML = "";
// //   gameOver = false;
// //   cells = Array(9).fill(null);

// //   for (let i = 0; i < 9; i++) {
// //     const cell = document.createElement("div");
// //     cell.className = "cell";
// //     cell.dataset.index = i;
// //     cell.addEventListener("click", handleClick);
// //     board.appendChild(cell);
// //   }

// //   currentPlayer = "X";
// //   status.textContent = `You play as ${emojis[currentPlayer]}!`;
// // }

// // function handleClick(e) {
// //   const index = e.target.dataset.index;

// //   if (cells[index] || gameOver || currentPlayer !== "X") return;

// //   clickSound.play();
// //   cells[index] = "X";
// //   e.target.textContent = emojis["X"];

// //   if (checkWin("X")) {
// //     winSound.play();
// //     gameOver = true;
// //     status.textContent = `${emojis["X"]} wins! 🎉`;
// //     scoreX++;
// //     updateScore();
// //     return;
// //   }

// //   if (cells.every((cell) => cell)) {
// //     status.textContent = "It's a tie! 🤝";
// //     return;
// //   }

// //   currentPlayer = "O";
// //   status.textContent = `AI is thinking... 🤖`;
// //   setTimeout(makeAIMove, 800); // slight delay for realism
// // }

// // function makeAIMove() {
// //   if (gameOver) return;

// //   let emptyIndices = cells
// //     .map((cell, index) => (cell === null ? index : null))
// //     .filter((index) => index !== null);

// //   if (emptyIndices.length === 0) return;

// //   // Pick a random empty cell for AI
// //   const aiIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
// //   cells[aiIndex] = "O";
// //   const aiCell = document.querySelector(`.cell[data-index='${aiIndex}']`);
// //   aiCell.textContent = emojis["O"];
// //   clickSound.play();

// //   if (checkWin("O")) {
// //     winSound.play();
// //     gameOver = true;
// //     status.textContent = `${emojis["O"]} wins! 💀`;
// //     scoreO++;
// //     updateScore();
// //     return;
// //   }

// //   if (cells.every((cell) => cell)) {
// //     status.textContent = "It's a tie! 🤝";
// //     return;
// //   }

// //   currentPlayer = "X";
// //   status.textContent = `Your turn, ${emojis["X"]}!`;
// // }

// // function checkWin(player) {
// //   const winPatterns = [
// //     [0, 1, 2],
// //     [3, 4, 5],
// //     [6, 7, 8],
// //     [0, 3, 6],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [0, 4, 8],
// //     [2, 4, 6],
// //   ];

// //   return winPatterns.some((pattern) =>
// //     pattern.every((index) => cells[index] === player)
// //   );
// // }

// // function updateScore() {
// //   scoreXDisplay.textContent = scoreX;
// //   scoreODisplay.textContent = scoreO;
// // }

// // function resetGame() {
// //   createBoard();
// // }

// // createBoard();

// const board = document.getElementById("board");
// const status = document.getElementById("status");
// const clickSound = document.getElementById("clickSound");
// const winSound = document.getElementById("winSound");
// const scoreXDisplay = document.getElementById("scoreX");
// const scoreODisplay = document.getElementById("scoreO");

// let currentPlayer = "X"; // You = X
// let cells = [];
// let gameOver = false;
// let scoreX = 0;
// let scoreO = 0;

// const emojis = {
//   X: "😎", // Player
//   O: "🤖", // AI
// };

// function createBoard() {
//   board.innerHTML = "";
//   gameOver = false;
//   cells = Array(9).fill(null);

//   for (let i = 0; i < 9; i++) {
//     const cell = document.createElement("div");
//     cell.className = "cell";
//     cell.dataset.index = i;
//     cell.addEventListener("click", handleClick);
//     board.appendChild(cell);
//   }

//   currentPlayer = "X";
//   status.textContent = `You play as ${emojis[currentPlayer]}!`;
// }

// function handleClick(e) {
//   const index = e.target.dataset.index;

//   if (cells[index] || gameOver || currentPlayer !== "X") return;

//   clickSound.play();
//   cells[index] = "X";
//   e.target.textContent = emojis["X"];

//   if (checkWin("X")) {
//     winSound.play();
//     gameOver = true;
//     status.textContent = `${emojis["X"]} wins! 🎉`;
//     scoreX++;
//     updateScore();
//     return;
//   }

//   if (cells.every((cell) => cell)) {
//     status.textContent = "It's a tie! 🤝";
//     return;
//   }

//   currentPlayer = "O";
//   status.textContent = `AI is thinking... 🤖`;
//   setTimeout(makeAIMove, 500); // Delay for realism
// }

// function makeAIMove() {
//   if (gameOver) return;

//   const bestMove = getBestMove();
//   cells[bestMove] = "O";
//   const aiCell = document.querySelector(`.cell[data-index='${bestMove}']`);
//   aiCell.textContent = emojis["O"];
//   clickSound.play();

//   if (checkWin("O")) {
//     winSound.play();
//     gameOver = true;
//     status.textContent = `${emojis["O"]} wins! 💀`;
//     scoreO++;
//     updateScore();
//     return;
//   }

//   if (cells.every((cell) => cell)) {
//     status.textContent = "It's a tie! 🤝";
//     return;
//   }

//   currentPlayer = "X";
//   status.textContent = `Your turn, ${emojis["X"]}!`;
// }

// function getBestMove() {
//   let bestScore = -Infinity;
//   let move;

//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i] === null) {
//       cells[i] = "O";
//       let score = minimax(cells, 0, false);
//       cells[i] = null;

//       if (score > bestScore) {
//         bestScore = score;
//         move = i;
//       }
//     }
//   }

//   return move;
// }

// function minimax(board, depth, isMaximizing) {
//   if (checkWinStatic(board, "O")) return 10 - depth;
//   if (checkWinStatic(board, "X")) return depth - 10;
//   if (board.every((cell) => cell)) return 0;

//   if (isMaximizing) {
//     let bestScore = -Infinity;
//     for (let i = 0; i < board.length; i++) {
//       if (board[i] === null) {
//         board[i] = "O";
//         let score = minimax(board, depth + 1, false);
//         board[i] = null;
//         bestScore = Math.max(score, bestScore);
//       }
//     }
//     return bestScore;
//   } else {
//     let bestScore = Infinity;
//     for (let i = 0; i < board.length; i++) {
//       if (board[i] === null) {
//         board[i] = "X";
//         let score = minimax(board, depth + 1, true);
//         board[i] = null;
//         bestScore = Math.min(score, bestScore);
//       }
//     }
//     return bestScore;
//   }
// }

// function checkWin(player) {
//   const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   return winPatterns.some((pattern) =>
//     pattern.every((index) => cells[index] === player)
//   );
// }

// function checkWinStatic(board, player) {
//   const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   return winPatterns.some((pattern) =>
//     pattern.every((index) => board[index] === player)
//   );
// }

// function updateScore() {
//   scoreXDisplay.textContent = scoreX;
//   scoreODisplay.textContent = scoreO;
// }

// function resetGame() {
//   createBoard();
// }

// createBoard();

const board = document.getElementById("board");
const status = document.getElementById("status");
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");
const scoreXDisplay = document.getElementById("scoreX");
const scoreODisplay = document.getElementById("scoreO");
const modeSelect = document.getElementById("modeSelect");
const difficultySelect = document.getElementById("difficultySelect");
const difficultyLabel = document.getElementById("difficultyLabel");

let currentPlayer = "X";
let cells = [];
let gameOver = false;
let scoreX = 0;
let scoreO = 0;

const emojis = {
  X: "😎",
  O: "🤖",
};

function createBoard() {
  board.innerHTML = "";
  gameOver = false;
  cells = Array(9).fill(null);

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  }

  currentPlayer = "X";
  updateStatus();
}

function updateStatus() {
  if (modeSelect.value === "ai") {
    status.textContent =
      currentPlayer === "X"
        ? `Your turn ${emojis["X"]}`
        : `AI thinking... ${emojis["O"]}`;
  } else {
    status.textContent = `Player ${emojis[currentPlayer]}'s turn`;
  }
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (cells[index] || gameOver) return;

  clickSound.play();
  cells[index] = currentPlayer;
  e.target.textContent = emojis[currentPlayer];

  if (checkWin(currentPlayer)) {
    winSound.play();
    gameOver = true;
    status.textContent = `${emojis[currentPlayer]} wins! 🎉`;
    currentPlayer === "X" ? scoreX++ : scoreO++;
    updateScore();
    return;
  }

  if (cells.every((cell) => cell)) {
    status.textContent = "It's a tie! 🤝";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();

  if (modeSelect.value === "ai" && currentPlayer === "O") {
    setTimeout(makeAIMove, 500);
  }
}

function makeAIMove() {
  if (gameOver) return;

  let move;
  if (difficultySelect.value === "easy") {
    const emptyIndices = cells
      .map((val, i) => (val === null ? i : null))
      .filter((i) => i !== null);
    move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  } else {
    move = getBestMove();
  }

  cells[move] = "O";
  const cell = document.querySelector(`.cell[data-index='${move}']`);
  cell.textContent = emojis["O"];
  clickSound.play();

  if (checkWin("O")) {
    winSound.play();
    gameOver = true;
    status.textContent = `${emojis["O"]} wins! 💀`;
    scoreO++;
    updateScore();
    return;
  }

  if (cells.every((cell) => cell)) {
    status.textContent = "It's a tie! 🤝";
    return;
  }

  currentPlayer = "X";
  updateStatus();
}

function getBestMove() {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === null) {
      cells[i] = "O";
      let score = minimax(cells, 0, false);
      cells[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(board, depth, isMaximizing) {
  if (checkWinStatic(board, "O")) return 10 - depth;
  if (checkWinStatic(board, "X")) return depth - 10;
  if (board.every((cell) => cell)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "O";
        let score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "X";
        let score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function checkWin(player) {
  return checkWinStatic(cells, player);
}

function checkWinStatic(board, player) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return wins.some((pattern) => pattern.every((i) => board[i] === player));
}

function updateScore() {
  scoreXDisplay.textContent = scoreX;
  scoreODisplay.textContent = scoreO;
}

function resetGame() {
  createBoard();
}

modeSelect.addEventListener("change", () => {
  difficultyLabel.style.display =
    modeSelect.value === "ai" ? "inline-block" : "none";
  resetGame();
});

difficultySelect.addEventListener("change", () => {
  resetGame();
});

createBoard();
