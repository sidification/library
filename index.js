let myLibrary = ["Harry Potter", "Symphonies", "Where you go, there you are"];

// function Book(title) {
//   this.title = title;
// }

// function addBookToLibrary() {
//   let newBook = new Book(prompt('What is a book you have read recently'));
//   myLibrary.push(newBook); 
// }

// addBookToLibrary(); 

// document create a div

myLibrary.forEach(copy => {
  const singleBook = document.createElement('div')
  singleBook.innerHTML = copy
  singleBook.classList.add('single-book')
  document.getElementById('title').after(singleBook)
})