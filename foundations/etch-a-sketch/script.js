const container = document.querySelector(".container");
container.addEventListener("mouseover", (e) => {
  if (e.target.tagName.toLowerCase() == "div") {
    e.target.style.backgroundColor = "white";
  }
});

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const buildGrid = (grid) => {
  removeAllChildNodes(container);
  let square = document.createElement("div");

  square.classList.add("square");
  square.style.height = `${720 / grid}px`;
  square.style.width = `${720 / grid}px`;

  container.appendChild(square);

  for (let i = 0; i < grid * grid - 1; i++) {
    container.appendChild(square.cloneNode(true));
  }
};

buildGrid(16);

const reset = () => {
  let numOfSquares = parseInt(prompt("Number of Squares"));
  const allSquares = document.querySelectorAll(".square");
  buildGrid(numOfSquares);
};

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);
