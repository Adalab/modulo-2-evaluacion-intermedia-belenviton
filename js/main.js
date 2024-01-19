'use strict';

//Query selector

const completForm = document.querySelector('.js__form');
const playBtn = document.querySelector('.js__play_button');
const iptNumber = document.querySelector('.js__input_number');
const computerMessage = document.querySelector('.js__message');
const counterPc = document.querySelector('.js__counter');
const sectionForm = document.querySelector('.js__principal_section');

//Variables globales

let numberClicks = 1;
const randomNumber = getRandomNumber(100);

// FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const printMessage = (message) => {
  computerMessage.innerHTML = `${message}`;
};

const createMessage = () => {
  const userNumber = parseInt(iptNumber.value);

  if (userNumber < 1 || userNumber > 100) {
    computerMessage.innerHTML = `El número debe estar
   entre 1 y 100.`;
  } else if (userNumber > randomNumber) {
    printMessage(`Demasiado alto`);
  } else if (userNumber < randomNumber) {
    printMessage(`Demasiado bajo`);
  } else if (iptNumber.value === '') {
    printMessage(`Escribe un número`);
  } else {
    printMessage(`¡¡¡Has ganado campeona!!!`);
  }
};

const numberTest = () => {
  if (iptNumber.value === '') {
    counterPc.innerHTML = `Número de intentos: ${numberClicks - 1}`;
  } else {
    counterPc.innerHTML = `Número de intentos: ${numberClicks++}.`;
  }
};

const finalPlay = () => {
  if (parseInt(numberClicks) > 6) {
    sectionForm.innerHTML =
      'El juego ha terminado. ¡Has superado el número de intentos!';
    computerMessage.innerHTML = '';
  }
};
const handleClickBtn = (event) => {
  createMessage();
  numberTest();
  finalPlay();
  console.log(randomNumber);
};
const handleClickEnter = (event) => {
  if (event.key === 'Enter') {
    handleClickBtn();
    finalPlay();
  }
};

//Eventos
completForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
playBtn.addEventListener('click', handleClickBtn);

iptNumber.addEventListener('keyup', handleClickEnter);
