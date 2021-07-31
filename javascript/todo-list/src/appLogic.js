import Project from "./Project";
import TODO from "./TODO";

const projects = [];

const newProject = (name, description) => {
    let project = new Project(name, description);
    projects.push(project);
};

const newTODO = (project, title, description, dueDate, priority) => {
    projects
        .find((item) => item.name === project)
        .addTODO(
            new TODO(project.tasksID, title, description, dueDate, priority)
        );
};

const removeTODO = (project, TODO) => {
    project.removeTODO(TODO);
};

export default {
    projects,
    newProject,
    newTODO,
    removeTODO,
};
