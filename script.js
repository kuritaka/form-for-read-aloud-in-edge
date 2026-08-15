const form = document.querySelector('#text-form');
const input = document.querySelector('#text-input');
const readingText = document.querySelector('#reading-text');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  readingText.textContent = input.value;
  readingText.focus();
});
