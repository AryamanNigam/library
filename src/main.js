const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    event.preventDefault();

    const content = document.querySelector(".content");
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    
    const card = document.createElement("div");
    card.classList.add("card");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add('book-title');
    bookTitle.textContent = title;
    card.appendChild(bookTitle);


    const authorDiv = document.createElement("div");
    authorDiv.classList.add("book-author");
    authorDiv.textContent = author;
    card.appendChild(authorDiv);

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("book-pages");
    pagesDiv.textContent = pages + " Pages";
    card.appendChild(pagesDiv);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("book-info");

    const readDiv = document.createElement("button");
    readDiv.classList.add("book-read");
    if(read){
        readDiv.textContent = "Read Already";
    }
    else{
        readDiv.textContent = "Not Read";
        readDiv.style.backgroundColor = "rgb(253, 164, 175)";
    }

    let r = "#fda4af";
    let y = "#fef08a";
    let g = "#a7f3d0";
    const colors = [r, y, g];
    const statuses = ["Not Read", "Reading", "Read Already"];

    let index = 0;
    readDiv.addEventListener("click", () => {
        readDiv.style.backgroundColor = colors[index];
        readDiv.textContent = statuses[index];
        index = (index + 1) % colors.length;
    });
    infoDiv.appendChild(readDiv);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        card.remove();
    });
    infoDiv.appendChild(deleteButton);

    card.appendChild(infoDiv);
    content.appendChild(card);
}

const b = document.getElementById("submit");
b.addEventListener("click", addBookToLibrary);

const del = document.querySelectorAll(".delete-btn");
del.forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.parentElement.remove();
    });
});



const alter = document.querySelectorAll(".book-read");
alter.forEach(button => {
    let r = "#fda4af";
    let y = "#fef08a";
    let g = "#a7f3d0";

    const colors = [r, y, g];
    const statuses = ["Not Read", "Reading", "Read Already"];
    let index = 0;

    button.addEventListener("click", () => {
        button.style.backgroundColor = colors[index];
        button.textContent = statuses[index];
        index = (index + 1) % colors.length;
    });
});