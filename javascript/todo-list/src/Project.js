export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.incomplete = [];
        this.complete = [];
        this.tasksID = 0;
    }

    addTODO(TODO) {
        this.incomplete.push(TODO);
        this.tasksID++;

        this.incomplete.sort((a, b) => {
            return b.priority - a.priority;
        });
    }

    removeTODO(name) {
        this.complete = this.complete.filter((item) => item.title !== name);
        this.incomplete = this.incomplete.filter((item) => item.title !== name);
    }

    taskToggle(name) {
        const task =
            this.incomplete.find((i) => i.title === name) ||
            this.complete.find((i) => i.title === name);
        if (task.status) {
            this.incomplete = this.incomplete.concat(TODO);
            this.complete = this.complete.filter(
                (item) => item.name !== task.title
            );
        } else {
            this.complete = this.complete.concat(TODO);
            this.incomplete = this.incomplete.filter(
                (item) => item.name !== task.title
            );
        }
        task.status = !task.status;
    }
}
