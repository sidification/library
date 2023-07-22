let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  var newBook = prompt('What is a book you have read recently')
  myLibrary.push(newBook)
}

myLibrary.push("the Covenant of Water");
myLibrary.push("The Handmaid's Tale");
myLibrary.push("Little Fires Everywhere");
myLibrary.push("Signal Fires");

function createTable(myLibrary) {
  const table = document.querySelector('table')
  table.style.width = 'auto';
  table.style.border = '1px solid black';
  
  for (let i = 0; i < myLibrary.length; i++) {
  const row = table.insertRow()
  const cell = row.insertCell()
  cell.innerHTML = myLibrary[i];
  cell.style.border = '1px solid black';
  // console.log(myLibrary[i])
  }
}


createTable(myLibrary);



