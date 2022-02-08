//TRAVERSING DOM

// var itemList = document.querySelector('#items');

//parent node 
 //console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parent element
//  console.log(itemList.parentElement);
// //  itemList.parentElement.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childnodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].backgroundColor = 'yellow';

// //First child
// console.log(itemList.firstChild);

// //first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';

// //last child
// console.log(itemList.lastChild);

// //last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello 4';

// var itemList = document.querySelector('#items');
//next sibling
// console.log(itemList.nextSibling);
// //next ellemnt sibling
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);

// //previous element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


//CREATE ELEMENT

// //create a div
// var newDiv = document.createElement('div');

// //add class
//  newDiv.className = 'hello';

// // // //add id
//  newDiv.id = 'hello1';

// // // //add attribute
//  newDiv.setAttribute('title','hello div');


// //  // create text node
//  var newDivText = document.createTextNode('hello world');

// //  //add text to div
//  newDiv.appendChild(newDivText);

//  var container = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');

//  newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

//  console.log(newDiv);