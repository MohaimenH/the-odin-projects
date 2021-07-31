export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.incomplete = [];
        this.complete = [];
        this.tasksID = 0;
    }

    addTODO(TODO) {
        this.incomplete = this.incomplete.concat(TODO);
        tasksID++;
    }

    removeTODO(TODO) {
        this.complete = this.complete.filter((item) => item.name !== TODO.name);
        this.incomplete = this.incomplete.filter(
            (item) => item.name !== TODO.name
        );
    }

    taskToggle(TODO) {
        if (TODO.status) {
            this.incomplete = this.incomplete.concat(TODO);
            this.complete = this.complete.filter(
                (item) => item.name !== TODO.name
            );
        } else {
            this.complete = this.complete.concat(TODO);
            this.incomplete = this.incomplete.filter(
                (item) => item.name !== TODO.name
            );
        }
        TODO.status = !TODO.status;
    }
}
