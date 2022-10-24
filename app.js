const collapse = document.querySelector('#collapse');
const box = document.querySelector('.box');

collapse.addEventListener('click', () => {
    box.style.display == 'none' ? box.style.display = 'block' : box.style.display = 'none';
});