let myLibrary = [];

// Book creation
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype = {
    hasBeenRead: function () {
        if (this.read) {
            return "has been read";
        }

        return "not read yet";
    },

    info: function () {
        return `${this.title} by ${this.author}, ${
            this.pages
        } pages, ${this.hasBeenRead()}.`;
    },
};

// Library related methods

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// DOM Manipulation

function removeAllChildNodes(parent) {
    // INEFFICIENT
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const bookList = document.querySelector(".book-list");

function updateDisplay() {
    removeAllChildNodes(bookList); //INEFFICIENT!!
    myLibrary.forEach((book) => {
        if (book != -1) {
            let li = document.createElement("li");
            li.classList.add("list-wrapper");

            for (let prop in book) {
                if (prop == "read") {
                    let button = document.createElement("button");

                    button.textContent = book[prop] ? "Read" : "Not Read";

                    if (book[prop]) {
                        button.classList.add("book-read");
                    } else {
                        button.classList.add("book-unread");
                    }

                    button.setAttribute("data-index", myLibrary.indexOf(book));

                    button.addEventListener("click", readEntry);
                    li.appendChild(button);
                } else if (book.hasOwnProperty(prop)) {
                    let div = document.createElement("div");
                    div.textContent = book[prop];
                    li.appendChild(div);
                }
            }

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.setAttribute("data-index", myLibrary.indexOf(book));
            deleteBtn.addEventListener("click", deleteEntry);

            li.appendChild(deleteBtn);
            bookList.appendChild(li);
        }
    });
}

const submitButton = document.querySelector(".submit");

const bookName = document.querySelector(".book-name");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const read = document.querySelector(".read");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    addBookToLibrary(
        bookName.value,
        bookAuthor.value,
        bookPages.value,
        read.checked
    );
    updateDisplay();
});

const deleteEntry = (e) => {
    let i = e.target.getAttribute("data-index");
    myLibrary[i] = -1; //Hacky fix -- Infficient;

    bookList.removeChild(e.target.parentNode);
};

const readEntry = (e) => {
    let i = e.target.getAttribute("data-index");
    myLibrary[i].read = !myLibrary[i].read;
    e.target.textContent = myLibrary[i].read ? "Read" : "Not Read";

    updateDisplay();
};

addBookToLibrary("Game of Thrones", "Martin", 300, true);
addBookToLibrary("Lord of The Rings", "Tolkien", 200, false);
addBookToLibrary("Sherlock Holmes", "Conan Doyle", 500, true);

updateDisplay();
