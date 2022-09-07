// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const styleBody = document.querySelector('body');
const textEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', targetInputColor);

function targetInputColor(event) {
  const color = getRandomHexColor();
  styleBody.style.backgroundColor = color;
  textEl.textContent = color;
}