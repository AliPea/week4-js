console.log(document);

console.log(window.document === document);

console.log(typeof document);

console.log(document.documentElement);
console.log(document.title);
console.log(document.body);

console.log(document.body.children);
console.log(document.body.childNodes);

// Nodes
// old way - older codebases
const byId = document.getElementById('list')
console.log(byId);

const byClass = document.getElementsByClassName('item');
console.log(byClass);

const byTag = document.getElementsByTagName('ul');
console.log(byTag);

// modern - ES6
const title = document.querySelector('.title');
console.log(title);
const btn = document.querySelector('#btn');
console.log(btn);
const firstLi = document.querySelector('ul li');
console.log(firstLi);

const allItems = document.querySelectorAll('.item');
console.log(allItems);

allItems.forEach(i => console.log(`I love ${i.textContent}`));

title.textContent = 'Fourth Week Review';

const link = document.querySelector("a");
console.log(link.getAttribute('href'));
link.setAttribute('href','target.com');
console.log(link.getAttribute('href'));
link.removeAttribute('href');
console.log(link.getAttribute('href'));

title.style.color = 'red';

title.classList.add('highlight');
title.classList.remove('highlight');

// CREATE
const list = document.querySelector('#list')
const newItem = document.createElement("li")

// Configuration
newItem.textContent = 'Grapes';
newItem.classList.add('item', 'list-group-item');

// attach to the DOM
list.appendChild(newItem);

// Walking the Node
// Using list node created on line #53
const firstElem = list.firstElementChild;
console.log(firstElem);

console.log(firstElem.parentElement);
console.log(firstElem.parentElement.parentElement);

console.log(list.lastElementChild);

// console.log(list.children);
// console.log(list.childNodes);

const second = list.children[1];
console.log(second);
console.log(second.nextElementSibling);
console.log(second.nextElementSibling.nextElementSibling);

const listContainer = document.querySelector('#list-container');
const listClone = list.cloneNode(true);
console.log(listClone);

listContainer.appendChild(listClone);

// EVENTS

const container = document.querySelector('#propagation-container');
const x = document.querySelector('#btn');

// event not stopped here, so bubbles up to the form. 
container.addEventListener('click', function() {
    console.log('PROPAGATION reaching here. Container fired!');
})

// click submit button to see the event doesn't reach the parent 
x.addEventListener('click', function(event) {
    console.log('button fired!');
    event.stopPropagation();
})

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.type);
    console.log(event.target);
});





