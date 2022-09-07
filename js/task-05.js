// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
const defoltText = document.querySelector('span')

inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value);
    output.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        output.textContent = "Anonymous"
    }
} 
console.log(defoltText.textContent);