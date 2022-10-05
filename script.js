const searchBtn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});