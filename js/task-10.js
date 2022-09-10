// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("[type='number']"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector ("[data-destroy]"),
  div: document.querySelector("#controls"),
  divBoxes: document.querySelector("#boxes"),
};
refs.btnCreate.addEventListener("click", onBtnCreateClick);

function onBtnCreateClick(event) {
  let size = 30;

  const countInput = refs.input.value;
  for (let i = 0; i < countInput; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(box);
    size += 10;
  }
  refs.input.value = '';
}

refs.btnDestroy.addEventListener('click', onBtnDestroyClick);

function onBtnDestroyClick() {
  const countInput = refs.input.value;

  if (!countInput || countInput < 0) {
    refs.divBoxes.innerHTML = '';
    return;
  }

  const quantity = refs.divBoxes.childElementCount;

  for (let i = 0; i < countInput; i++) {
    if (i > quantity - 1) {
      return;
    }
    refs.divBoxes.lastElementChild.remove();
  }
}



