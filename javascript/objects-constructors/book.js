function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.hasBeenRead = () => {
        if (this.read) {
            return "has been read";
        }

        return "not read yet";
    }

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasBeenRead()}.`;
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolien", 295, false);
console.log(theHobbit.info());