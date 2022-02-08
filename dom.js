//examine the document object

//console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[8]);
// // document.all[10].textContent='hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);
// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
//  var headerTitle= document.getElementById('header-title');
//  var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3> helllloo </h3>';
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4'; (wrong)

// for( var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//GET ELEMENTS BY TAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for( var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'aqua';
// }

//QUERY SELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 6px #000';

// var input = document.querySelector('input');
// input.value = 'hello-word';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="send";

// var item = document.querySelector('.list-group-item:nth-child(1)');
// item.style.color = 'red';

// var lastItem =  document.querySelector('.list-group-item:nth-child(4)');
// lastItem.style.color = 'blue';

// var secondItem =  document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'purple';

//QUERY SELECTORALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello world';
// titles[1].textContent = 'hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor ='#f4f4f4' ;
//     even[i].style.backgroundColor = 'pink';
// }



