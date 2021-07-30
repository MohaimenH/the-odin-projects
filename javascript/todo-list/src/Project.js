export default class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.incomplete = [];
        this.complete = [];
    }

    taskToggle(TODO) {
        if (TODO.status) {
            this.complete = this.complete.concat(TODO);
            this.incomplete = this.incomplete.filter(
                (item) => item.name !== TODO.name
            );
        } else {
            this.incomplete = this.incomplete.concat(TODO);
            this.complete = this.complete.filter(
                (item) => item.name !== TODO.name
            );
        }
    }
}
