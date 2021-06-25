const container = document.querySelector('#container');

let redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";

container.appendChild(redPara);

let blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";

container.appendChild(blueH3);

let blackDiv = document.createElement('div');
blackDiv.style.border = "1px solid black";
blackDiv.style.backgroundColor = "pink";

let anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div";

blackDiv.appendChild(anotherH1);

let para2 = document.createElement('p');
para2.textContent = "ME TOO!";

blackDiv.appendChild(para2);

container.appendChild(blackDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => {
    alert("Hello World!");
};

const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', (event) => {
    alert("Yello World!");
    event.stopPropagation();
});

const btns = document.querySelector('.btns');
btns.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.target.style.backgroundColor='blue';
    });
});