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
const gridUpdator = () => {
    let playingGrid = document.querySelectorAll(".playingGrid");

    for (let i = 0; i < gameBoard.getGameBoard().length; i++) {
        playingGrid[i].textContent = gameBoard.getGameBoard()[i];
    }
};

// Game module
const gameLogic = (() => {
    gridUpdator();

    let currentTurn = "X";

    const btnWrapper = document.querySelector(".btn-wrapper");

    btnWrapper.addEventListener("click", (e) => {
        if (e.target.tagName == "BUTTON" && e.target.textContent == "") {
            gameBoard.addToGameBoard(currentTurn, e.target.id);
            e.target.classList.add("filledButton");
            currentTurn = currentTurn == "X" ? "O" : "X";

            gridUpdator();
        }
    });
})();
