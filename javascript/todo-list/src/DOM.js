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
import appLogic from "./appLogic";

// Helpers

let selectedProject = "Default";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const projectsList = document.querySelector(".projects-list");

const renderProjects = () => {
    removeAllChildNodes(projectsList);
    console.log(selectedProject);

    for (let x of appLogic.projects) {
        let projectName = x.name;
        let projectDesc = x.description;

        let listItem = document.createElement("li");
        listItem.classList.add("card");
        projectsList.appendChild(listItem);

        let outerDiv = document.createElement("div");
        outerDiv.classList.add(
            "card-body",
            "text-white",
            `${projectName === selectedProject ? "bg-primary" : "bg-dark"}`,
            "rounded",
            "darken-selected",
            "project-item"
        );

        listItem.appendChild(outerDiv);

        let heading = document.createElement("h4");
        heading.textContent = projectName;
        heading.classList.add("card-title", "text-white");
        outerDiv.appendChild(heading);

        let subtitle = document.createElement("h5");
        subtitle.textContent = projectDesc;
        subtitle.classList.add("card-subtitle", "text-light", "sub-head");
        outerDiv.appendChild(subtitle);
    }
};

const addTODO = (title, description, dueDate, priority) => {
    appLogic.newTODO(selectedProject, title, description, dueDate, priority);
};

const addProject = (name, description) => {
    appLogic.newProject(name, description);
};

// addTODO("Gym", "Workout", "12AM", 10);
addProject("Default", "First Project");
addProject("Sunday", "Funday");
addProject("Work", "Deloitte");
renderProjects();

const eventListeners = (() => {
    projectsList.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            selectedProject = e.target.firstChild.textContent;
        }
        renderProjects();
    });
})();
