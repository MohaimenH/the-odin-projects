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
            playingGrid[i].textContent = "";
            playingGrid[i].classList.remove("filledButton");
         }
    }

    return {updateDisplay, resetDisplay};
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
            currentTurn = currentTurn == "X" ? "O" : "X";

            gridUpdator.updateDisplay();
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

