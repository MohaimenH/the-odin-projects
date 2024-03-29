export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.incomplete = [];
        this.complete = [];
    }

    addTODO(TODO) {
        this.incomplete.push(TODO);

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
            this.incomplete = this.incomplete.concat(task);
            this.complete = this.complete.filter(
                (item) => item.title !== task.title
            );
        } else {
            this.complete = this.complete.concat(task);
            this.incomplete = this.incomplete.filter(
                (item) => item.title !== task.title
            );
        }
        task.status = !task.status;
    }
}
