import Project from "./Project";
import TODO from "./TODO";

const appModule = () => {
    let projects = [];

    const newProject = (name, description) => {
        projects.push(new Project(name, description));
    };

    const removeProject = (pname) => {
        // console.log(projects);
        projects = projects.filter((p) => p.name !== pname);
        // console.log(projects);
    };

    const newTODO = (proj, title, description, dueDate, priority) => {
        proj.addTODO(new TODO(title, description, dueDate, priority));
    };

    const deleteTODO = (project, name) => {
        project.removeTODO(name);
    };

    return {
        projects,
        removeProject,
        newProject,
        newTODO,
        deleteTODO,
    };
};

export default appModule;
