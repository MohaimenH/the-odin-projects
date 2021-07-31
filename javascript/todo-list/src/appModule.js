import Project from "./Project";
import TODO from "./TODO";

const appModule = () => {
    const projects = [];

    const newProject = (name, description) => {
        projects.push(new Project(name, description));
    };

    const newTODO = (proj, title, description, dueDate, priority) => {
        proj.addTODO(new TODO(title, description, dueDate, priority));
    };

    const deleteTODO = (project, name) => {
        project.removeTODO(name);
    };

    return {
        projects,
        newProject,
        newTODO,
        deleteTODO,
    };
};

export default appModule;
