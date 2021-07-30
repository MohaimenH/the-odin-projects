export default class Project {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.incomplete = [];
        this.complete = [];
    }

    addTODO(TODO) {
        this.incomplete = this.incomplete.concat(TODO);
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
