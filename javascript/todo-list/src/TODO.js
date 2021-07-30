export default class TODO {
    constructor(title, description, dueDate, priority, status = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    toggleStatus() {
        this.status = !this.status;
    }
}
