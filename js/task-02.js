const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const onIngredient = document.querySelector('#ingredients');

const listArr = ingredients.map((ingredient) => {
  const elements = document.createElement('li');
  elements.classList.add('item');
  elements.textContent = ingredient;
  return elements;
})

// console.log (listArr)
onIngredient.append(...listArr);