import Project from "./Project";
import TODO from "./TODO";

const projects = [];
let selectedProject = new Project("Default", "Default project");

const newProject = (name, description) => {
    let project = new Project(name, description);

    projects.push(project);
    selectedProject = project;
};

const newTODO = (title, description, dueDate, priority) => {
    selectedProject.addTODO(new TODO(title, description, dueDate, priority));
};

const removeTODO = (TODO) => {
    selectedProject.removeTODO(TODO);
};

const setActiveProject = (project) => {
    selectedProject = project;
};

export default { projects, newProject, newTODO, removeTODO, setActiveProject };
