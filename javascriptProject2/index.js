console.log("This is index.js");
//To dos

// store all the data to thelocal Storage
// 2. given antoher column as an  option to delete the book 
// Add a scrollbar 



//constructor
function Book(nam, author, type) {
    this.nam = nam;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() { }

//Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui");
    tableBody = document.getElementById("tableBody");
    let uiString = ` <tr>

                    <td>${book.nam}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
};

//Implementing the clear funciton
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
};

//Implementing the validate funciton

Display.prototype.validate = function (book) {
    if (book.nam.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
};
//Implementing the show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong>${displayMessage} .
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = "";
    }, 2000);
};
//Add Submit event Listener to form

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let nam = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    // Fiction , programming, cooking
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(nam, author, type);
    console.log(book);

    //remove display
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been added successfully");
    } else {
        display.show("danger", "sorry you can not add this book");
        //Show error tot he user
    }
    e.preventDefault();
}
