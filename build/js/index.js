const buttonSubmit = document.getElementById('button');
const fomrText = document.getElementById('form');
const textArea = document.getElementById('Message');

const initialApp = () => {
  const buttonHambuguer = document.getElementById('hamburguer-button');
  const mobileMenu = document.getElementById('mobile-menu');


  const toogleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    buttonHambuguer.classList.toggle('toggle-btn')
  }
  buttonHambuguer.addEventListener('click', toogleMenu)
  mobileMenu.addEventListener('click', toogleMenu)
};

document.addEventListener('DOMContentLoaded', initialApp)

const submit = () => {
  fomrText.addEventListener('click', (e) => {
    e.preventDefault();
  });
  alert('oi');
};

buttonSubmit.addEventListener('click', submit);
