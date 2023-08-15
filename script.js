



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
const BtnCancelar = document.getElementById('btn-cancelar');

mobileMenuButton.addEventListener('click', () => {
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});

 
 const openModalButton = document.getElementById('openModalButton');
 const modal = document.querySelector('.mdc-dialog');

 
 openModalButton.addEventListener('click', () => {
   modal.classList.add('mdc-dialog--open');
 });

 
 const closeButton = document.querySelector('.mdc-dialog__close');


 closeButton.addEventListener('click', () => {
   modal.classList.remove('mdc-dialog--open');
 });

 BtnCancelar.addEventListener('click', () => {
    modal.classList.remove('mdc-dialog--open')
 })
