"use strict";

const adv = document.getElementsByClassName('adv');
const books = document.getElementsByClassName('book');
const bookTitle = document.getElementsByTagName('a');
const tablesOfContents = document.getElementsByTagName('ul');
const book2Content = tablesOfContents[0].getElementsByTagName('li');
const book5Content = tablesOfContents[5].getElementsByTagName('li');
const book6Content = tablesOfContents[2].getElementsByTagName('li');
const newElem = document.createElement('li');

books[5].after(books[2]); //1
books[4].before(books[2]);
books[1].after(books[0]);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"; //2

bookTitle[2].textContent = 'Книга 3. this и Прототипы Объектов'; //3

adv[0].remove(); //4

book2Content[3].after(book2Content[6]); //5.2
book2Content[4].after(book2Content[8]);
book2Content[9].after(book2Content[2]);

book5Content[1].after(book5Content[9]); //5.5
book5Content[2].after(book5Content[4]);
book5Content[3].after(book5Content[5]);
book5Content[8].after(book5Content[6]);

newElem.textContent = 'Глава 8: За пределами ES6'; //6
tablesOfContents[5].append(newElem); 
book6Content[10].after(book6Content[9]);