import _ from "lodash";
import printMe from './print';

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    element.innerHTML = _.join(["Hello", "webpack"], " ");

    btn.textContent = 'Click me and check console';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());
