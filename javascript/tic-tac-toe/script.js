// GameBoard Module
const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    const getGameBoard = () => {
        return gameBoard;
    };

    const addToGameBoard = (symbol, index) => {
        gameBoard.splice(index, 1, symbol);
    };

    const resetGameBoard = () => {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
    };

    return { getGameBoard, addToGameBoard, resetGameBoard };
})();

// Player Factory
const player = (name, symbol) => {
    name = name;
    symbol = symbol;

    const getName = () => {
        return name;
    };

    const getSymbol = () => {
        return symbol;
    };

    return { getName, getSymbol };
};

// Updates Grid
const gridUpdator = (() => {
    let playingGrid = document.querySelectorAll(".playingGrid");

    const updateDisplay = () => {
        for (let i = 0; i < 9; i++) {
            playingGrid[i].textContent = gameBoard.getGameBoard()[i];
        }
    }
    
    const resetDisplay = () => {
        for (let i = 0; i < 9; i++) {
            playingGrid[i].disabled = false;
            playingGrid[i].textContent = "";
            playingGrid[i].classList.remove("filledButton", "winning-combo", "disabled-grid");

            const winnerText = document.querySelector(".winner-text");
            winnerText.textContent = `Press A Square To Start!`;
         }
    }

    const disableGrid = () => {
        for (let i = 0; i < 9; i++) {
            playingGrid[i].disabled = true;
            playingGrid[i].classList.add("disabled-grid");
         }
    }

    const winningCombo = (combo) => {
        for (let i of combo) {
            playingGrid[i].classList.add("winning-combo");
        }
    }

    return {updateDisplay, resetDisplay, disableGrid, winningCombo};
})();

// Game events
const gameEvents = (() => {
    gridUpdator.updateDisplay();

    let currentTurn = "X";

    const btnWrapper = document.querySelector(".btn-wrapper");

    btnWrapper.addEventListener("click", (e) => {
        if (e.target.tagName == "BUTTON" && e.target.textContent == "") {
            gameBoard.addToGameBoard(currentTurn, e.target.id);
            e.target.classList.add("filledButton");

            gridUpdator.updateDisplay();

            winnerStatus = winChecker();

            const winnerText = document.querySelector(".winner-text");

            if (winnerStatus[0] == "draw") {
                winnerText.textContent = `Draw!`;
                gridUpdator.disableGrid();
            }
            else if (winnerStatus[0]) {
                winnerText.textContent = `${currentTurn} Wins!`;
                gridUpdator.winningCombo(winnerStatus.slice(1));
                gridUpdator.disableGrid();
            }
            else {
                currentTurn = currentTurn == "X" ? "O" : "X";
                winnerText.textContent = `${currentTurn}'s Turn`;
            }

            
        }
    });

    const resetBtn = document.querySelector(".reset-btn");

    resetBtn.addEventListener('click', (e) => {
        gameBoard.resetGameBoard();
        gridUpdator.resetDisplay();
    })

    const setCurrentTurn = (symbol) => {
        currentTurn = symbol;
    }
    return {setCurrentTurn};
})();

const winChecker = () => {
    let board = gameBoard.getGameBoard();

    if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
        return [true,0,1,2];
    }

    if (board[3] == board[4] && board[4] == board[5] && board[3] != "") {
        return [true,3,4,5];
    }

    if (board[6] == board[7] && board[7] == board[8] && board[6] != "") {
        return [true,6,7,8];
    }

    if (board[0] == board[3] && board[3] == board[6] && board[0] != "") {
        return [true,0,3,6];
    }

    if (board[1] == board[4] && board[4] == board[7] && board[1] != "") {
        return [true,1,4,7];
    }

    if (board[2] == board[5] && board[5] == board[8] && board[2] != "") {
        return [true,2,5,8];
    }

    if (board[0] == board[4] && board[4] == board[8] && board[0] != "") {
        return [true,0,4,8];
    }

    if (board[2] == board[4] && board[4] == board[6] && board[2] != "") {
        return [true,2,4,6];
    }

    for (let i=0; i < 9; i++) {
        if (board[i] == "") {
            return [false];
        }
    }

    return ["draw"];
};