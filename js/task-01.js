// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения.

// const elementList = document.querySelector('#categories').children;

// console.log('Number of categories:', elementList.length);

// [...elementList].forEach((item) => {
//     const title = item.firstElementChild.textContent;
//     const innerList = item.querySelectorAll('li').length;

//     console.log('Category:', title);
//     console.log('Elements:', innerList);

// });

// 2 варіант
const elementList = document.querySelector('#categories');
console.log('Number of categories:', elementList.children.length);

[...elementList.children].forEach((item) => {
    // console.log('Category:', item);
    
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);

});
