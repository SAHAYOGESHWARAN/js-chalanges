const buttonElem = document.querySelector('#wrapper button');
const inputElem = document.querySelector('#wrapper input');

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
  inputElem.value = oldText === "ON" ? "OFF" : "ON";
});
