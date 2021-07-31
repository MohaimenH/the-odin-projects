/*
- Title and NavBar static components: render once

- Project bar on the left
    - Add new project fields on top
    - Re-render on adding new project

- ToDo list on the right
    - Add new TODO fields on top
    - Re-render on adding new TODO
    - Incomplete TODOs on top
    - Complete in bottom
    - OnClick TODO -> Show/Edit Details or Delete
*/

import "./DOM.css";

const main = document.querySelector(".main");
