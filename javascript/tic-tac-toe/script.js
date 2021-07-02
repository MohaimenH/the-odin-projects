// GameBoard Module

const gameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

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

    let playingGrid = document.querySelectorAll(".playingGrid");

    for (let i = 0; i < gameBoard.getGameBoard().length; i++) {
        playingGrid[i].textContent = gameBoard.getGameBoard()[i];
    }

};
