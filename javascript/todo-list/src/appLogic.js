import Project from "./Project";
import TODO from "./TODO";

let projectID = 0;

const projects = [];
let selectedProject = new Project("Default", "Default project");
projects.push(selectedProject);

const newProject = (name, description) => {
    let project = new Project(projectID, name, description);
    projectID++;
    projects.push(project);
    selectedProject = project;
};

const newTODO = (title, description, dueDate, priority) => {
    selectedProject.addTODO(
        new TODO(selectedProject.tasksID, title, description, dueDate, priority)
    );
};

const removeTODO = (TODO) => {
    selectedProject.removeTODO(TODO);
};

const setActiveProject = (id) => {
    selectedProject = projects.find((project) => project.id === id);
};

export default { projects, newProject, newTODO, removeTODO, setActiveProject };
