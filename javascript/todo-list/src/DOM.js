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
import appModule from "./appModule";
import TODO from "./TODO";

// Helpers
const appLogic = appModule();
let selectedProject = "Default";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const projectsList = document.querySelector(".projects-list");

const renderProjects = () => {
    removeAllChildNodes(projectsList);
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

const incompleteList = document.querySelector(".incomplete-list");
const completeList = document.querySelector(".complete-list");

const renderTasks = () => {
    removeAllChildNodes(incompleteList);
    removeAllChildNodes(completeList);

    let proj = appLogic.projects.find((item) => item.name === selectedProject);
    for (let x of proj.incomplete) {
        let taskName = x.title;
        let taskDesc = x.description;
        let taskTime = x.dueDate;

        let listItem = document.createElement("li");
        listItem.classList.add("card");
        incompleteList.appendChild(listItem);

        let outerDiv = document.createElement("div");
        outerDiv.classList.add(
            "card-body",
            "text-white",
            `${
                x.priority > 7
                    ? "bg-danger"
                    : x.priority > 3
                    ? "bg-warning"
                    : "bg-success"
            }`,
            "rounded"
        );

        listItem.appendChild(outerDiv);

        let heading = document.createElement("h4");
        heading.textContent = taskName;
        heading.classList.add("card-title", "text-white");
        outerDiv.appendChild(heading);

        let subtitle = document.createElement("h5");
        subtitle.textContent = `${taskDesc}, by ${taskTime}`;
        subtitle.classList.add("card-subtitle", "text-light");
        outerDiv.appendChild(subtitle);
    }

    for (let x of proj.complete) {
        let taskName = x.title;
        let taskDesc = x.description;
        let taskTime = x.dueDate;

        let listItem = document.createElement("li");
        listItem.classList.add("card");
        completeList.appendChild(listItem);

        let outerDiv = document.createElement("div");
        outerDiv.classList.add(
            "card-body",
            "text-white",
            "bg-secondary",
            "rounded"
        );

        listItem.appendChild(outerDiv);

        let heading = document.createElement("h4");
        heading.textContent = taskName;
        heading.classList.add("card-title", "text-white");
        outerDiv.appendChild(heading);

        let subtitle = document.createElement("h5");
        subtitle.textContent = `${taskDesc} by ${taskTime}`;
        subtitle.classList.add("card-subtitle", "text-light");
        outerDiv.appendChild(subtitle);
    }
};

appLogic.newProject("Default", "First Project");

const addTODO = (title, description, dueDate, priority) => {
    let proj = appLogic.projects.find((item) => item.name === selectedProject);
    appLogic.newTODO(proj, title, description, dueDate, priority);
};

addTODO("Gym", "Workout", "12PM", 10);
addTODO("Study", "Math", "2PM", 6);
addTODO("Code", "JavaScript", "3PM", 2);
appLogic.projects
    .find((item) => item.name === "Default")
    .complete.push(new TODO("Grocery", "Freshco", "10AM", 10));

appLogic.newProject("School", "York University");
addTODO("Sleep", "Duh?", "10PM", 3);

appLogic.projects
    .find((item) => item.name === "School")
    .complete.push(new TODO("Gym", "Workout", "12AM", 10));

appLogic.newProject("Work", "Deloitte");
renderProjects();
renderTasks();

const eventListeners = (() => {
    projectsList.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            selectedProject = e.target.firstChild.textContent;
            renderTasks();
        }
        renderProjects();
    });
})();
