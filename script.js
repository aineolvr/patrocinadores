



const headerContent = document.querySelector('.header-content');
const optionsCard = document.querySelector('.options-card');
const svgIcon = document.querySelector('.header-content svg');

// adicionando evento de click ao svg 
svgIcon.addEventListener('click', () => {
    optionsCard.classList.toggle('show');
});

//fechar o options-card quando clicar fora deles 
document.addEventListener('click', (event) => {
    if(!optionsCard.contains(event.target) && !svgIcon.contains(event.target)) {
        optionsCard.classList.remove('show');
    }
})


const mobileMenuButton = document.getElementById('mobile-menu-button');
const menuContent = document.getElementById('additional-buttons');


mobileMenuButton.addEventListener('click', () => {
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
