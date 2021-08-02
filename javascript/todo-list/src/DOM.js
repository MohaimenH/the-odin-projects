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
let selectedProject = localStorage.getItem("selectedProject") || "Default";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const projectsList = document.querySelector(".projects-list");

const taskToggle = (proj, name) => {
    const task =
        proj.incomplete.find((i) => i.title === name) ||
        proj.complete.find((i) => i.title === name);
    if (task.status) {
        proj.incomplete = proj.incomplete.concat(task);
        proj.complete = proj.complete.filter(
            (item) => item.title !== task.title
        );
    } else {
        proj.complete = proj.complete.concat(task);
        proj.incomplete = proj.incomplete.filter(
            (item) => item.title !== task.title
        );
    }
    task.status = !task.status;
    localStorage.setItem("projects", JSON.stringify(appLogic.projects));
};

const renderProjects = () => {
    // console.log("Rendering");
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

        if (projectName.toLowerCase() != "default") {
            let delButton = document.createElement("button");
            delButton.textContent = "X";
            delButton.classList.add("project-delete-btn");

            delButton.addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
                appLogic.projects = appLogic.projects.filter(
                    (p) => p.name !== projectName
                );
                localStorage.setItem(
                    "projects",
                    JSON.stringify(appLogic.projects)
                );
                renderProjects();
            });

            subtitle.appendChild(delButton);
        }
    }
};

const incompleteList = document.querySelector(".incomplete-list");
const completeList = document.querySelector(".complete-list");

const renderTasks = () => {
    // console.log("Tasks rendering..");
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

        let delButton = document.createElement("button");
        delButton.textContent = "X";
        delButton.classList.add("todo-delete-btn");

        delButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            proj.incomplete = proj.incomplete.filter(
                (t) => t.title !== taskName
            );
            localStorage.setItem("projects", JSON.stringify(appLogic.projects));
            renderTasks();
        });
        subtitle.appendChild(delButton);

        let tickButton = document.createElement("button");
        tickButton.textContent = "✓";
        tickButton.classList.add("todo-tick-btn");
        let checkmark = document.createElement("i");
        checkmark.classList.add("bi", "bi-check");
        tickButton.appendChild(checkmark);

        tickButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();

            taskToggle(proj, taskName);

            renderTasks();
        });

        subtitle.appendChild(tickButton);
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

renderProjects();
renderTasks();

const eventListeners = (() => {
    projectsList.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            selectedProject = e.target.firstChild.textContent;
            localStorage.setItem("selectedProject", selectedProject);
            renderTasks();
        }
        renderProjects();
    });

    document.querySelector(".add-project").addEventListener("click", (e) => {
        e.preventDefault();

        if (
            !!document.querySelector("#new-project").value &&
            !!document.querySelector("#new-project-desc").value
        )
            appLogic.newProject(
                document.querySelector("#new-project").value,
                document.querySelector("#new-project-desc").value
            );
        renderProjects();
    });

    document.querySelector(".add-todo").addEventListener("click", (e) => {
        let proj = appLogic.projects.find(
            (item) => item.name === selectedProject
        );
        proj.incomplete.push(
            new TODO(
                document.querySelector("#new-todo").value,
                document.querySelector("#new-todo-desc").value,
                document.querySelector("#new-todo-time").value,
                document.querySelector("#new-todo-priority").value
            )
        );

        proj.incomplete.sort((a, b) => {
            return b.priority - a.priority;
        });

        localStorage.setItem("projects", JSON.stringify(appLogic.projects));

        renderTasks();
    });
})();

// localStorage.clear();
