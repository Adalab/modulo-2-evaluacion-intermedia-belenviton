//Query selector

const playBtn = document.querySelector('.js__play_button');
const iptNumber = document.querySelector('.js__input_number');
const computerMessage = document.querySelector('.js__message');

// FUNCIONES

function getRandomNumber(max) {
   return Math.ceil(Math.random() * max);
   }

const randomNumber =  getRandomNumber (100);


const createMessage = () => {

   const userNumber = iptNumber.value;
   iptNumber.max = 100
   const top = iptNumber.max
    
   if (userNumber > top) {
      computerMessage.innerHTML = `El número debe estar entre 1 y 100`
   }
   if (randomNumber >userNumber) {
computerMessage.innerHTML = `Demasiado alto`;
   }
   else if (userNumber < randomNumber) {
   computerMessage.innerHTML = `Demasiado bajo`;
}
   else if (userNumber === randomNumber) { 
   computerMessage.innerHTML = `¡¡¡Has ganado campeona!!!`
}
    };

  const handleClickBtn = (event) => {
   event.preventDefault ();
   createMessage ();
   console.log(randomNumber);
  }




//Eventos
playBtn.addEventListener('click', handleClickBtn);