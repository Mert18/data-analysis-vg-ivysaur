const buttonDown = document.querySelector('.down');
const buttonUp = document.querySelector('.up');
buttonDown.addEventListener('click', () => {
    window.scrollBy(0, -window.innerHeight - 100);
})

buttonUp.addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight + 100);
})

