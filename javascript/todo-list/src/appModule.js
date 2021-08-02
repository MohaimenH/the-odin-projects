import Project from "./Project";
import TODO from "./TODO";

const appModule = () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [
        {
            name: "Default",
            description: "First Project",
            incomplete: [],
            complete: [],
            tasksID: 0,
        },
    ];
    // let projects = [];

    console.log(localStorage.getItem("projects"));

    const updateLocalStorage = () => {
        console.log(projects);
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    const newProject = (name, description) => {
        projects.push(new Project(name, description));
        updateLocalStorage();
    };

    const removeProject = (pname) => {
        projects = projects.filter((p) => p.name !== pname);
    };

    const newTODO = (proj, title, description, dueDate, priority) => {
        proj.addTODO(new TODO(title, description, dueDate, priority));
        updateLocalStorage();
    };

    const deleteTODO = (project, name) => {
        project.removeTODO(name);
        updateLocalStorage();
    };

    return {
        projects,
        updateLocalStorage,
        removeProject,
        newProject,
        newTODO,
        deleteTODO,
    };
};

export default appModule;
