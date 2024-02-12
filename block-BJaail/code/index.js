class BookList{
    constructor(root,books = []){
        this.books = books;
        this.root = root;
    }
    add(text, author, isbn){
        let book = new Book(text, author, isbn);
        this.books.push(book);
        this.createUI()
        return this.books.length
    }
    delete(id){
        let index = this.books.findIndex((book)=> book.id === id);
        this.books.splice(index,1);
        this.createUI()
        return this.books.length
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach(book => {
            let ui = book.createUI();
            ui.querySelector(".close").addEventListener("click",this.delete.bind(this, book.id));
            this.root.append(ui)
        });
    }
}

class Book{
    constructor(name, author, isbn){
        this.name = name;
        this.author = author;
        this.isbn = isbn;
        this.id = `id-${Date.now()}`
    }
    createUI(){
    let tr = document.createElement("tr");
    let name = document.createElement("th")
    name.innerText = this.name;
    let author = document.createElement("th")
    author.innerText = this.author;
    let isbn = document.createElement("th")
    isbn.innerText = this.isbn;
    let close = document.createElement("th")
    let closebtn = document.createElement("button")
    closebtn.classList.add("close")
    closebtn.innerText = "X";
    close.append(closebtn);
    tr.append(name,author,isbn,close);
    return tr;
    }
}

let firstbook = new Book("hexxenheimer", "the burning witches", "666");

let mybooks = new BookList(document.querySelector(".root"))

mybooks.add("Hexenhammer", "The Burning Witches", "666")

mybooks.add("Deliver us", "Inflames", "666")