// GameBoard Module

const gameBoard = (() => {
    let gameBoard = ["X", "X", "X", "X", "X", "O", "O", "O", "X"];

    const getGameBoard = () => {
        return gameBoard;
    };

    const addToGameBoard = (symbol, index) => {
        gameBoard.splice(index, 1, symbol);
        console.log(gameBoard);
    };

    return { getGameBoard, addToGameBoard };
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

// Updates Display
const displayUpdator = () => {

    let btns = document.querySelectorAll(".btns");

    for (let i = 0; i < gameBoard.getGameBoard().length; i++) {
        btns[i].textContent = gameBoard.getGameBoard()[i];
    }

};

