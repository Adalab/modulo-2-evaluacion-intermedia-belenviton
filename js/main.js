//Query selector

const playBtn = document.querySelector('.js__play_button');
const iptNumber = document.querySelector('.js__input_number');
const computerMessage = document.querySelector('.js__message');
const counterPc = document.querySelector('.js__counter');
// FUNCIONES

function getRandomNumber(max) {
   return Math.ceil(Math.random() * max);
   }

const randomNumber =  getRandomNumber (100);


const createMessage = () => {

   const userNumber = iptNumber.value;
   iptNumber.max = 100;
   
  if (userNumber < 1 || userNumber > 100) {
   computerMessage.innerHTML = `El número debe estar
   entre 1 y 100.`;
  }
  else if (userNumber > randomNumber) {
computerMessage.innerHTML = `Demasiado alto`;
   }
   else if (userNumber < randomNumber) {
   computerMessage.innerHTML = `Demasiado bajo`;
}
   else { 
      computerMessage.innerHTML = `¡¡¡Has ganado campeona!!!`
}
    };

    let numberClicks = 0

const numberTest = () => {
   counterPc.innerHTML = `Número de intentos: ` + `${numberClicks++}`;
}

  const handleClickBtn = (event) => {
   event.preventDefault ();
   createMessage ();
   numberTest ();
   console.log(randomNumber);
  }

//Eventos
playBtn.addEventListener('click', handleClickBtn);