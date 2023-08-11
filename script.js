

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

