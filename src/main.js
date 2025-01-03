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
        readDiv.style.backgroundColor = "red";
    }
    infoDiv.appendChild(readDiv);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    infoDiv.appendChild(deleteButton);

    card.appendChild(infoDiv);
    content.appendChild(card);

}

const b = document.getElementById("submit");
b.addEventListener("click", addBookToLibrary);

